import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-goodsType',
    templateUrl: 'goodsType.html',
})

export class GoodsTypeComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "", value: "全部" },
        { key: "大厅广告", value: "大厅广告" },
        { key: "活动广告", value: "活动广告" }];

    goodsType: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchGoodsType){
            list:getGoodsTypePage(pageIndex:$index,pageSize:$size,goodsType:$info){
                id,name,isValid 
            }
            count:getGoodsTypeCount(goodsType:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteGoodsType(id:$id)
        }`,
        url: "admin/addGoodsType",
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