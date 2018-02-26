import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-business',
    templateUrl: 'business.html',
})

export class BusinessComponent implements OnInit {

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

}