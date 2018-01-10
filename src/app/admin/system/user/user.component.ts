import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'admin-user',
    templateUrl: 'user.html',
})

export class UserComponent implements OnInit {

    roleList: Array<{ key: string, value: string }> = [];

    User: TableStr = {
        data: gql`query getList($index:Int,$size:Int,$info:searchUser){
            list:getUserPage(pageIndex:$index,pageSize:$size,user:$info){
                id username name email isValid Role { roleName,id }
            }
            count:getUserCount(user:$info)
        }`,
        delete: gql`mutation delInfo($id:String){
            deleteUser(id:$id)
        }`,
        url: "admin/addUser",
        where: { user: {} }
    };

    constructor(private apollo: Apollo) {

    }

    ngOnInit() {
        this.apollo.query<{list:any}>({
            query: gql`query {
                list:getRoles{key:id value:roleName}
            }`
        }).subscribe(({ data }) => this.roleList = data.list)
    }
}

