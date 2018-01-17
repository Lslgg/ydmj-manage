import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-answer',
    templateUrl: 'answer.html',
})

export class AnswerComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "", value: "全部" },
        { key: "大厅广告", value: "大厅广告" },
        { key: "活动广告", value: "活动广告" }];

    answer: TableStr = {
        data: gql`query($index:Int,$size:Int,$info:searchAnswer){
            list:getAnswerPage(pageIndex:$index,pageSize:$size,answer:$info){
                id,name,isValid 
            }
            count:getAnswerCount(answer:$info)
        }`,
        delete: gql`mutation($id:String){
            deleteAnswer(id:$id)
        }`,
        url: "admin/addAnswer",
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