import { Component, OnInit, Inject } from '@angular/core';
import { Tree, Power } from '../shared/power.model';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'admin-add-power',
    styleUrls: ['../power.scss'],
    templateUrl: 'addPower.html'
})

export class AddPowerComponent implements OnInit {

    treeList: Array<Tree> = [];

    dataList: Array<object> = [];

    powerList: Array<Power> = [];

    roleId: string = "";

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
            var ids = this.dataList.filter(p => p["isCheck"]).map(pp => `${pp["id"]}`);
            var sql = gql`mutation delRolePower($roleId:String,$ids:[String]){
                delAllPowerbyId(roleId:$roleId,id:$ids)
            }`;
            this.apollo.mutate({
                mutation: sql, variables: { roleId: this.roleId, ids: ids }
            }).subscribe(({ data }) => {
                alert(data ? "删除成功！" : "删除失败！");
                this.getRolePower();
            })
        }
    }

    onModalSave(list: Array<Power>) {
        if (this.roleId == "") {
            alert("请选择角色！");
            return;
        }

        var rolePower = list.filter(p => p.isCheck).map(p => {
            return { roleId: this.roleId, powerId: p.id }
        });

        var sql = gql`mutation saveRolePower($list:[inputRolePower]){
            role:addAllRolePower(rolePower:$list){ id }
        }`;

        var mutationInfo = {
            mutation: sql,
            variables: { list: rolePower }
        }

        this.apollo.mutate<{ role: any }>(mutationInfo).subscribe(({ data }) => {
            this.roleId = data.role.id;
            this.getRolePower();
        });
    }

    //查找角色权限
    getRolePower() {
        var sql = gql`query getList($id:String){
            role:getRoleById(id:$id) {
                powerList:Powers { id operation title code }
            }
        }`;

        this.apollo.query<{ role: { powerList: any } }>({
            query: sql,
            fetchPolicy: "network-only",
            variables: { id: this.roleId }
        }).subscribe(({ data }) => {
            let operationMap = Power.operationMap();
            var list = data.role.powerList.map(val => {
                var info = { isCheck: false, operationMap: new Array<string>(), operation: [], list: [] };
                Object.assign(info, val);
                var oList = info.operation.map(item => operationMap.get(item));
                info.list = oList;
                return info;
            });
            this.dataList = list;
        })
    }

    //查找权限
    getPowerList() {
        var sql = gql`query{
            list:getPowerWhere(power:{isValid:true}) {id title operation  url } 
        }`;

        this.apollo.query<{ list: any }>({ query: sql }).subscribe(({ data }) => {
            let operationMap = Power.operationMap();
            var list = data.list.map(val => {
                var info = { isCheck: false, operationMap: new Array<string>(), operation: [], list: [] };
                Object.assign(info, val);
                var oList = info.operation.map(item => operationMap.get(item));
                info.list = oList;
                return info;
            });
            this.powerList = list;
        })

    }

    getRoleTree() {
        this.apollo.query<{ roles: Array<Tree> }>({
            query: gql`query{
                roles:getRoles {id name:roleName isLeaf:id}
            }`
        }).subscribe(({ data }) => this.treeList = data.roles);
    }
}