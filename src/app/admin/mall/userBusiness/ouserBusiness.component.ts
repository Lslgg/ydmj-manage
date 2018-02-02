import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-userBusiness',
    templateUrl: 'userBusiness.html',
})

export class UserBusinessComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "", value: "全部" },
        { key: "大厅广告", value: "大厅广告" },
        { key: "活动广告", value: "活动广告" }];

    userBusiness: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchUserBusiness){
            list:getUserBusinessPage(pageIndex:$index,pageSize:$size,userBusiness:$info){
                id, user:User{name:username}, business:Business{name}
            }
            count:getUserBusinessCount(userBusiness:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteUserBusiness(id:$id)
        }`,
        url: "admin/addUserBusiness",
        where: { advert: {} }
    };

    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    // onSetInfo(info: IdType) {
    //     if (info.type == "title") {
    //         this.router.navigate(['../admin/addGoodsType', info.id]);
    //     }
    // }
}