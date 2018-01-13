import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from "../shared";
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'admin-addMenu',
    templateUrl: 'addMenu.html'
})

export class AddMenuComponent implements OnInit {

    //创建表单
    menuForm: FormGroup = this.fb.group({
        id: '',
        pid: '0',
        parentTitle: [{ value: '根目录', disabled: true }],
        title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
        code: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
        url: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
        menuImg: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
        isValid: true
    });

    type: number;

    constructor(private apollo: Apollo, private fb: FormBuilder,
        private route: ActivatedRoute, private router: Router) {
        let id = this.route.snapshot.params['id'];
        this.type = this.route.snapshot.params['type'];
        if (this.type == 1) { //设置添加时表单显示信息
            this.setAddMenu(id);
            return;
        }
        //设置修改时表单显示信息
        this.setUpdateMenu(id);
    }

    ngOnInit() { }

    setAddMenu(id: string) {
        this.menuForm.get("pid").setValue("0");
        this.menuForm.get("parentTitle").setValue("根目录");
        if (id != "0") {
            var sql = gql`query getMenuById($id:String){
                menu:getMenuById(id:$id){ id title }
            }`;
            this.apollo.query<{ menu: any }>({ query: sql, variables: { id } }).subscribe(({ data }) => {
                this.menuForm.get("pid").setValue(data.menu.id);
                this.menuForm.get("parentTitle").setValue(data.menu.title);
            })

        }
    }

    async setUpdateMenu(id: string) {

        var sql = gql`query getMenubyId($id:String){
            menu:getMenuById(id:$id){
                id title menuImg isLeaf pid code url isValid
            }
        }`;
        var queryInfo = { query: sql, variables: { id } };
        var data = await this.apollo.query<{ menu: any }>(queryInfo).toPromise();
        var menu = data.data.menu;
        var pid = "0";
        var parentTitle = "根目录";
        var menuId = menu.id;

        //如果pid不为0,显示父类名称
        if (menu.pid != "0") {
            var PInfo = { query: sql, variables: { id: menu.pid } }
            var pData = await this.apollo.query<{ menu: any }>(PInfo).toPromise();
            var pMenu = pData.data.menu;
            if (pMenu) {
                pid = pMenu.id;
                parentTitle = pMenu.title;
            }
        }

        var title = menu.title;
        var code = menu.code;
        var url = menu.url;
        var menuImg = menu.menuImg;
        var isLeaf = menu.isLeaf;
        var isValid = menu.isValid;
        var menuForm = {
            id: menuId, pid, parentTitle, title, code,
            url, menuImg, isLeaf, isValid
        }

        this.menuForm.setValue(menuForm)
    }

    onSubmit(menu: Menu) {
        if (this.type == 1) {
            menu.id = "";
        }
        var sql = gql`mutation save($menu:inputMenu){
            menu:saveMenu(menu:$menu){ id }
        }`;
        var mutInfo = {
            mutation: sql,
            variables: { menu: menu }
        }

        this.apollo.mutate<{ menu: any }>(mutInfo).subscribe(({ data }) => {
            alert(data ? "保存成功！" : "保存失败");
            this.router.navigate(['admin/menu']);
        });
    }

    onSetImg(className: string) {
        this.menuForm.get("menuImg").setValue(className);
    }
}