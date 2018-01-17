import { Injectable, Inject } from '@angular/core';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';

export class AuthPower {
    public id: string;
    public url: string;
    public operation: Array<string> = new Array<string>();
}

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {


    constructor(private router: Router, private apollo: Apollo) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        let promise = new Promise<boolean>((resolve, reject) => {
            var urlData = route.data;
            let url = urlData["module"];
            let power = urlData["power"];
            //notPower 没用权限 ，allpower 不用权限
            if (url == "notPower" || url == "allpower") {
                resolve(true);
                return;
            }

            //查看其它是否有权限
            var isSuccess = false;
            this.getRolrPowerList().then(list => {
                list.forEach(val => {
                    var index = val.operation.indexOf(power);
                    if (val.url.toUpperCase() == url.toUpperCase() && index > -1) {
                        isSuccess = true;
                    }
                });
                //不管怎样返回true只是如果没权限返回到提示页面
                resolve(true);
                if (!isSuccess) { 
                    this.router.navigate(['/admin/notPower']);
                    return;
                }
            }).catch(error => {
                reject(false);
            })
        });

        return promise;

    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }

    getRolrPowerList(): Promise<Array<AuthPower>> {

        var sql = gql`query{
            user:currentUser {
                id,Role {id, Powers(limit:100) { id,url,operation} } 
            }
        }`;
        var qInfo: any = { query: sql, fetchPolicy: "network-only" };
        type Info = { user: any };
        let promise = new Promise<Array<AuthPower>>((resolve, reject) => {
            this.apollo.query<Info>(qInfo).subscribe(({ data }) => {
                if (data.user) {
                    var powers = data.user.Role.Powers;
                    resolve(<Array<AuthPower>>powers);
                }
            });
        })

        return promise;
    }
}