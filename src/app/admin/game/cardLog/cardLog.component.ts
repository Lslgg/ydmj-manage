import { Component, OnInit } from '@angular/core';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-cardLog',
    templateUrl: 'cardLog.html',
})

export class CardLogComponent implements OnInit {

    cardLog:TableStr={
		data:gql`query getList($index:Int,$size:Int,$info:searchCardLog){
            list:getCardLogPage(pageIndex:$index,pageSize:$size,cardLog:$info){
                id userName playName card type createAt
            }
            count:getCardLogCount(cardLog:$info)
        }`,
		delete:gql`mutation delInfo($id:String){
            deleteCardLog(id:$id)
        }`,
		url:"admin/cardLog",
		where:{cardLog:{}}
	};
    
    constructor() { 
      
    }

    ngOnInit() { }
}
