import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gql from 'graphql-tag';

@Component({
	selector: 'player',
	templateUrl: 'player.html',
})

export class PlayerComponent implements OnInit {

	player:TableStr={
		data:gql`query getList($index:Int,$size:Int,$info:String){
            list:getPlayerPage(pageIndex:$index,pageSize:$size,where:$info){
                id name cardNum image
            }
            count:getPlayerCount(where:$info)
        }`,
		url:"admin/addPlayer",
		where:'1=1 and ${where}',
	};

	constructor(private router:Router) {

	}

	ngOnInit() {
		
	}

	onSetInfo(info: IdType) {
		var { id, type } = info;
		if (type == '充值') {
			this.router.navigate(['../admin/addPlayer',id]);
		}
	}
}