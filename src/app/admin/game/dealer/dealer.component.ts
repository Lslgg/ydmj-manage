import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-dealer',
    templateUrl: 'dealer.html'
})

export class DealerComponent {
    //表格相关操作
    dealer: TableStr = {
        data:gql`query getList($index:Int,$size:Int,$info:String){
            list:getDealerPage(pageIndex:$index,pageSize:$size,where:$info){
                id name code
            }
            count:getDealerCount(where:$info)
        }`,
        delete:gql`mutation delInfo($id:String){
            deleteDealer(id:$id)
        }`,
        url: "admin/addDealer",
        where:'1=1 and ${where}',
    };
}