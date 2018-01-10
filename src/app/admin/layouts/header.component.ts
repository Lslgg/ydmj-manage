import { Component, OnInit, ViewEncapsulation, Input, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-layouts-header',
    styleUrls: ['header.scss'],
    templateUrl: 'header.html',
})

export class HeaderComponent implements OnInit {

    @Input() sidenav: any;


    constructor(private router: Router,
        private apollo: Apollo) {

    }

    ngOnInit() { }

    LogOut() {
        this.apollo.query<{ success: boolean }>({
            query: gql`query{
            success:logOut
        }`}).subscribe(({ data }) => {
                if (data.success) {
                    alert("已成功退出！");
                    this.router.navigate(['login']);
                }
            })
    }
}