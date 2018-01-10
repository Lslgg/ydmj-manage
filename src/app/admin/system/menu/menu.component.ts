import { Component, OnInit, Inject } from '@angular/core';
import { Menu, Tree } from "./shared";
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-menu',
    templateUrl: 'menu.html'
})

export class MenuComponent implements OnInit {

    treeList: Array<Tree> = [];

    nowTree: Tree;

    constructor(private router: Router, private apollo: Apollo) {

    }

    async ngOnInit() {
        var list = await this.getSubTree("0");
        this.treeList = this.setTree(list);
    }

    setTree(list: Array<Menu>): Array<Tree> {
        let trees: Array<Tree> = [];
        list.forEach(async p => {
            var subList = await this.getSubTree(p.id);
            var isLeaf = subList.length > 0;
            trees.push(new Tree(p.id, p.pid, p.title, !isLeaf));
        });
        return trees;
    }

    //加载子菜单
    async onGetSubTree(tree: Tree) {
        if (tree == null) return;
        this.nowTree = tree;
        if (tree.subTrees.length > 0) return;
        var list = await this.getSubTree(tree.id);
        tree.subTrees = this.setTree(list);
        tree.IsSubMenu = list.length > 0;
    }

    //添加菜单
    onAddTree(id: string) {
        this.router.navigate(['/admin/addMenu/' + id + "/1"]);
    }

    //删除菜单
    async onDeleteTree(info: { id: string, pid: string }) {
        var { id, pid } = info;
        if (!confirm("确认要删除！")) return
        var list = await this.getSubTree(id);
        if (list.length > 0) {
            alert("有子菜单不能删除，请先删除子菜单！");
            return;
        }

        var sql = gql`mutation delInfo($id:String){
            deleteMenu(id:$id)
        }`;
        this.apollo.mutate({
            mutation: sql,
            variables: { id: id }
        }).subscribe(({ data }) => {
            alert(data?"删除成功！":"删除失败！");
            this.delArrayTree(id);
        })
    }

    delArrayTree(id) {
        this.treeList = this.treeList.filter(val => val.id != id);
        if (this.nowTree != null) {
            this.nowTree.subTrees = this.nowTree.subTrees.filter(val => val.id != id);
        }
    }

    //修改菜单
    onUpdateTree(idName: { id: string, name: string }) {
        this.router.navigate(['/admin/addMenu/' + idName.id + "/2"]);
    }

    //查找子菜单
    getSubTree(pid: string): Promise<Array<Menu>> {
        var queryInfo = this.setQueryInfo(pid);
        let promise = new Promise<Array<Menu>>((resolve, reject) => {
            this.apollo.query<{ menus: Array<Menu> }>(queryInfo).subscribe(({ data }) => {
                resolve(data.menus);
            })
        })

        return promise;
    }

    private setQueryInfo(pid: string): any {
        var sql = gql`query getMenuSub($info:searchMenu){
            menus:getMenuWhere(menu:$info){
                id title menuImg isLeaf pid code url isValid
            }
        }`;
        var queryInfo = { 
            query: sql, 
            variables: { info: { pid: `${pid}` } }, 
            fetchPolicy: "network-only"
        };
        return queryInfo;
    }
}