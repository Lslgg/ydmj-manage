import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

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
                id,name,Business{id,name} 
            }
            count:getGoodsTypeCount(goodsType:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteGoodsType(id:$id)
        }`,
        url: "admin/add-goods-type",
        where: { advert: {} }
    };

    constructor(private router: Router,private apollo: Apollo) {

    }

    businessList: Array<{ key: string, value: string }> = [];
    ngOnInit() {
        this.businessList = [];
        var sql = gql`query{
            list:getBusiness {id, name}
        }`;
        this.apollo.query<{ list: Array<{ id: String, name: String }> }>({ query: sql }).subscribe(({ data }) => {
            if (data.list) {
                for (var i = 0; i < data.list.length; i++) {
                    this.businessList.push({ key: data.list[i].id + '', value: data.list[i].name + '' });
                }                
            }
        })
    }

}