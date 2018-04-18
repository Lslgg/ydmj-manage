import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-advertm',
    templateUrl: 'advertm.html',
})

export class AdvertmComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "全部", value: "全部" },
        { key: "商品页面广告", value: "商品页面广告" },
        { key: "商家页面广告", value: "商家页面广告" }];

    advertm: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchAdvertm){
            list:getAdvertmPage(pageIndex:$index,pageSize:$size,advertm:$info){
                id,title,isValid 
            }
            count:getAdvertmCount(advertm:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteAdvertm(id:$id)
        }`,
        url: "admin/addAdvertm",
        where: { advertm: {} }
    };

    constructor(private router: Router) {
      
    }

    ngOnInit() {

    }

}