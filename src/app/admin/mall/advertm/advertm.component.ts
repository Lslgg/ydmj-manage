import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-advertm',
    templateUrl: 'advertm.html',
})

export class AdvertmComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "", value: "全部" },
        { key: "大厅广告", value: "大厅广告" },
        { key: "活动广告", value: "活动广告" }];

    advertm: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchAdvertm){
            list:getAdvertmPage(pageIndex:$index,pageSize:$size,advertm:$info){
                id,name,isValid 
            }
            count:getAdvertmCount(advertm:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteAdvertm(id:$id)
        }`,
        url: "admin/addAdvertm",
        where: { advert: {} }
    };

    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    // onSetInfo(info: IdType) {
    //     if (info.type == "title") {
    //         this.router.navigate(['../admin/addBusiness', info.id]);
    //     }
    // }
}