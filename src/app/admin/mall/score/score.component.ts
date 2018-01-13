import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-score',
    templateUrl: 'score.html',
})

export class ScoreComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "", value: "全部" },
        { key: "大厅广告", value: "大厅广告" },
        { key: "活动广告", value: "活动广告" }];

    business: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchBusiness){
            list:getBusinessPage(pageIndex:$index,pageSize:$size,business:$info){
                id,name,isValid 
            }
            count:getBusinessCount(business:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteBusiness(id:$id)
        }`,
        url: "admin/addBusiness",
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