import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { NavMenu } from './shared/layouts';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-layouts-sidenav',
    templateUrl: 'sideNav.html',
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})

export class SideNavComponent implements OnInit {

    navMenuList: Array<NavMenu>;

    userMenuList: Array<NavMenu>;

    constructor(private router: Router, private apollo: Apollo) {

    }

    ngOnInit() {
        //查找菜单和当前登录用户可访问的菜单
        var sql = gql`query{
            list:getMenuWhere(menu: {isValid: true}) { id pid title menuImg code url }
            user:currentUser {
                id,Role {id, Powers:Powers(limit:100) { id,
                Menu{ id,pid,title,menuImg,code,url} } } 
            }
        }`;
        var qInfo: any = { query: sql, fetchPolicy: "network-only" };
        type Info = { user: any, list: Array<NavMenu> };
        this.apollo.query<Info>(qInfo).subscribe(({ data }) => {
            if (data.list) {
                var powers = data.user.Role.Powers;
                //用户能访问的菜单
                var userMenuList = powers.filter(p => p.Menu != null).map(p => Object.assign({}, p.Menu));
                //所有菜单 
                var navMenuList = data.list.map(p => Object.assign({}, p));

                this.navMenuList = this.setUserMenu(userMenuList, navMenuList);

                var navList = new Array<NavMenu>();
                this.navMenuList = this.setTreeList("0", navList);

                //排序
                this.navMenuList.sort((t1, t2) => {
                    if (t1.code > t2.code) return 1;
                    if (t1.code < t2.code) return -1;
                    return 0;
                });
            }
        })
    }

    //设置用户菜单
    private setUserMenu(userMenuList: Array<NavMenu>,
        navMenuList: Array<NavMenu>): Array<NavMenu> {
        let pidList = userMenuList.map(p => p.pid);
        //去掉重复
        pidList = Array.from(new Set(pidList));
        var menuList: Array<NavMenu> = [];
        pidList.forEach(p => {
            var pMenu = navMenuList.filter(pp => pp.id == p);
            if (pMenu.length <= 0) return;
            var pInfo = pMenu[0];
            menuList.push(pInfo);
            if (pInfo.pid == "0") return;

            //查看有没有三级菜单，没有添加一级菜单
            var isTrue = menuList.filter(pp => pp.id == pInfo.pid).length > 0;
            if (isTrue) return;
            var ppMenu = navMenuList.filter(pp => pp.id == pInfo.pid);
            if (ppMenu.length <= 0) return
            menuList.push(ppMenu[0]);
        });
        userMenuList = userMenuList.concat(menuList);
        return userMenuList;
    }

    //转换成树形菜单
    private setTreeList(pid: string,
        navList: Array<NavMenu>): Array<NavMenu> {
        if (pid == "0") {
            navList = this.navMenuList.filter(v => v.pid == pid);
            this.setTreeList("1", navList);
        } else {
            navList.map(val => {
                //根据父级菜单查找子级菜单
                let subList = this.navMenuList.filter(v => v.pid == val.id);
                if (subList.length > 0) {
                    val.subNavMenuList = subList;
                    this.setTreeList(val.id, subList);
                } else {
                    val.subNavMenuList = new Array<NavMenu>();
                }
            })
        }

        return navList;

    }

    logOut() {
        this.apollo.query<{ success: boolean }>({
            query: gql`query{ success:logOut}`
        }).subscribe(({ data }) => {
            if (data.success) {
                alert("已成功退出！");
                this.router.navigate(['login']);
            }
        })
    }
}