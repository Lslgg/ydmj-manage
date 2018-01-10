import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-advert',
    templateUrl: 'advert.html',
})

export class AdvertComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "", value: "全部" },
        { key: "大厅广告", value: "大厅广告" },
        { key: "活动广告", value: "活动广告" }];

    advert: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchAdvert){
            list:getAdvertPage(pageIndex:$index,pageSize:$size,advert:$info){
                id,activity,title,isValid,endDate,startDate,type
            }
            count:getAdvertCount(advert:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteAdvert(id:$id)
        }`,
        url: "admin/addAdvert",
        where: { advert: {} }
    };

    constructor(private router: Router) {

    }

    ngOnInit() {

    }
   
    onSetInfo(info: IdType) {
        if (info.type == "title") {
            this.router.navigate(['../admin/addAdvert', info.id]);
        }
    }
}