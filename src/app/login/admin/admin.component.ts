import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'login-admin',
    templateUrl: 'admin.html',
    styleUrls: ['admin.css'],
})

export class AdminComponent implements OnInit {

    constructor(private apollo: Apollo,
        private router: Router) {
    }

    ngOnInit() {

    }

    async onLogin(account: string, pwd: string) {
        var sql = gql`query login($username:String!,$password:String!){
            user:login(username:$username,password:$password) {username password }
        }`;

        this.apollo.query<{ user: any }>({
            query: sql,
            variables: { username: account, password: pwd },
            fetchPolicy: "network-only"
        }).subscribe(({ data }) => {
            if (data.user) {
                window.location.href = "admin/main";
            } else {
                alert("用户名密码错误，请输入正确的用户或密码！");
                this.router.navigate(['/login']);
            }
        })
    }
}