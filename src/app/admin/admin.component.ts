import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-admin',
    templateUrl: 'admin.html',
    styleUrls: ['admin.scss'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
})

export class AdminComponent implements OnInit {

    constructor(private apollo: Apollo, private router: Router) {        
        this.apollo.query({
            query: gql`query{ id:currentUser{ id } }`})
            .subscribe(({ data }) => {                
                if (!data['id']) {
                    alert("请先登录用户！");
                    this.router.navigate(['login']);
                }
            });
    }

    ngOnInit() { }

}