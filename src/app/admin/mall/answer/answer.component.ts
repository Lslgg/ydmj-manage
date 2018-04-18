import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-answer',
    templateUrl: 'answer.html',
})

export class AnswerComponent implements OnInit {

    typeList: Array<{ key: string, value: string }> = [
        { key: "常见问答", value: "常见问答" }, 
    ];

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

}