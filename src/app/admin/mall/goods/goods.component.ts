import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-goods',
    templateUrl: 'goods.html',
})

export class GoodsComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "", value: "全部" },
        { key: "大厅广告", value: "大厅广告" },
        { key: "活动广告", value: "活动广告" }];

    goods: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchGoods){
            list:getGoodsPage(pageIndex:$index,pageSize:$size,goods:$info){
                id,name,isValid
            }
            count:getGoodsCount(goods:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteGoods(id:$id)
        }`,
        url: "admin/addGoods",
        where: { advert: {} }
    };

    constructor(private router: Router) {

    }

    ngOnInit() {

    }
}