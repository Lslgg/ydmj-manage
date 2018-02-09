import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-scoreList',
    templateUrl: 'scoreList.html',
})

export class ScoreListComponent implements OnInit {

    goods: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchGoods){
            list:getGoodsPage(pageIndex:$index,pageSize:$size,goods:$info){
                id,name,Business{name},score,GoodsType{name},times,createAt
            }
            count:getGoodsCount(goods:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteGoods(id:$id)
        }`,
        url: "admin/addGoods",
        where: { advert: {} }
    };

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {

    }
    onSetInfo(info:any) {
        if(info.type == "详细") {
            this.router.navigate(['/admin/scoreDetail/'+info.id]);
        }
    }
}