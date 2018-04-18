import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-score',
    templateUrl: 'score.html',
})

export class ScoreComponent implements OnInit {

    business: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchBusiness){
            list:getBusinessPage(pageIndex:$index,pageSize:$size,business:$info){
                id,name,isValid,createAt
            }
            count:getBusinessCount(business:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteBusiness(id:$id)
        }`,
        url: "admin/scoreList",
        where: { business: {} }
    };

    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    onSetInfo(info:any) {
        if(info.type == "详细") {
            this.router.navigate(['/admin/scoreList/'+info.id]);
        }
    }

}