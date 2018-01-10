import { Component, OnInit, Inject } from '@angular/core';
import gql from 'graphql-tag';

@Component({
	selector: 'admin-order',
	templateUrl: 'order.html',
})

export class OrderComponent {
	
	startDate:string;

	endDate:string;

	order: TableStr = {
		data:gql`query getList($index:Int,$size:Int,$info:String){
            list:getOrderPage(pageIndex:$index,pageSize:$size,where:$info){
				id,name,dealerName,card,cost
            }
            count:getOrderCount(where:$info)
			total:getOrderCardCost(where:$info){
				card,cost
			}
        }`,
		url: "admin/addOrder",
		where:'1=1 and ${where}',
	};

	constructor(@Inject("commonData") private comDate:CommonData){
		this.startDate=this.comDate.startDate;
		this.endDate=this.comDate.endDate;
	}
}