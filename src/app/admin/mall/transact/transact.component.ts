import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'mall-transact',
    templateUrl: 'transact.html',
})

export class TransactComponent implements OnInit {


    constructor(private router: Router, private apollo: Apollo) {}

    ngOnInit() {}

    doTransact(code: String) {

        var sql = gql`query($code:String){
            result:doTransact(code:$code)
        }`;
        this.apollo.query<{ result: any }>({
            query: sql,
            variables: { code: `${code}` },
            fetchPolicy: "network-only"
        }).subscribe(({ data }) => {
            console.log(data.result);
            switch (data.result) {
                case -1:
                    alert("该兑换码不存在！");
                    break;
                case 1:
                    alert("该兑换码已兑换！");
                    break;
                case 2:
                    alert("该兑换码已过期！");
                    break;
                case 3:
                    alert("兑换成功！");
                    break;
                case 4:
                    alert("出错了！");
                    break;
                default:
                    alert("出错了！");
            }
        })
    }

}