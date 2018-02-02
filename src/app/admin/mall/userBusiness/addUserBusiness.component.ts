import { Component, OnInit, Inject } from '@angular/core';
import { Tree, Power } from './shared/power.model';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'admin-add-addUserBusiness',
    styleUrls: ['power.scss'],
    templateUrl: 'addUserBusiness.html'
})

export class AddUserBusinessComponent implements OnInit {

    treeList: Array<Tree> = [];

    dataList: Array<object> = [];

    powerList: Array<any> = [];

    roleId: string = "";
    userId: string = "";

    roleName: string = "无";

    constructor(private apollo: Apollo) {
        this.getRoleTree();
        this.getPowerList();
    }

    ngOnInit() {

    }

    onUpdateTree(info: { id: string, name: string }) {
        var { id, name } = info;
        this.roleId = id;
        this.roleName = name;
        this.getRolePower();
    }

    onDelList() {
        if (confirm("确认要删除！")) {            
            var businessList: Array<String> = [];
            for (var i = 0; i < this.dataList.length; i++) {
                if (this.dataList[i]['isCheck']) { 
                    businessList.push("\""+this.dataList[i]['id']+"\"");   
                }
            }
            var sql = gql`mutation deleteUserBusinessAll($list:[searchUserBusiness]){
                deleteUserBusinessAll(userBusiness:$list)
            }`;
            var mutationInfo = {
                mutation: sql,
                variables: { list: {"_id":`{"$in":"[${businessList}]"}`} }
            }
            this.apollo.mutate(mutationInfo).subscribe(({ data }) => {                
                alert(data.deleteUserBusinessAll ? "删除成功！" : "删除失败！");
                this.getRolePower();
            });
        }
    }

    onModalSave(list: Array<Power>) {
        if (this.roleId == "") {
            alert("请选择角色！");
            return;
        }
        var businessList: Array<{ userId: String, businessId: String }> = [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].isCheck) {
                businessList.push({ userId: this.roleId, businessId: list[i].id });
            }
        }
        var sql = gql`mutation saveUserBusinessAll($list:[inputUserBusiness]){
            user:saveUserBusinessAll(userBusiness:$list){ user:User{id} }
        }`;
        var mutationInfo = {
            mutation: sql,
            variables: { list: businessList }
        }
        this.apollo.mutate<{ user: any }>(mutationInfo).subscribe(({ data }) => {
            this.roleId = data.user[0].user.id;
            this.getRolePower();
        });
    }

    //查找角色权限
    getRolePower() {
        var sql = gql`
        query($info:Json) {
            userBusiness:getUserBusinessWhere(userBusiness:{userId:$info}) {
                id,Business{id,name},createAt
                }
            }`;

        this.apollo.query<{ userBusiness: Array<{ id: String, Business: { id, name } }> }>({
            query: sql,
            fetchPolicy: "network-only",
            variables: { info: `{"$eq":"${this.roleId}"}` }
        }).subscribe(({ data }) => {
            var list = data.userBusiness.map(val => {
                var info = { isCheck: false, Business: { id: String, name: String } };
                Object.assign(info, val);
                return info;
            });
            this.dataList = list;
        })
    }

    //查找权限
    getPowerList() {
        var sql = gql`query{
            list:getBusiness {id, name, createAt}
        }`;

        this.apollo.query<{ list: Array<{ id: String, name: String, createAt: Date }> }>({ query: sql }).subscribe(({ data }) => {
            let operationMap = Power.operationMap();
            var list = data.list.map(val => {
                var info = { isCheck: false, id: String, name: String, createAt: Date };
                Object.assign(info, val);
                console.log(info);
                return info;
            });
            this.powerList = list;
        })

    }

    getRoleTree() {
        this.apollo.query<{ user: Array<Tree> }>({
            query: gql`query{
                # user:getRoles {id name:roleName isLeaf:id}
                user:getUsers {
                    id,name:username,isLeaf:id
                },
            }`
        }).subscribe(({ data }) => this.treeList = data.user);
    }

}