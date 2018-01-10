import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'admi-role',
    templateUrl: 'role.html'
})

export class RoleComponent {
    role: TableStr={
        data:gql`query getList($index:Int,$size:Int,$info:searchRole){
            list:getRolePage(pageIndex:$index,pageSize:$size,role:$info){
                id roleName code desc isValid
            }
            count:getRoleCount(role:$info)
        }`,
        delete: gql`mutation delInfo($id:String){
            deleteRole(id:$id)
        }`,
        url:"admin/addRole",
        where:{role:{}}
    }
}