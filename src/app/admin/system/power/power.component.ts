import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Power, Operation } from './shared/power.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
	selector: 'admin-power',
	styleUrls: ['power.scss'],
	templateUrl: 'power.html',
})

export class PowerComponent implements OnInit {

	nowPower: Power = new Power();

	powerForm: FormGroup= this.fb.group({
		id: [''],
		title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
		code: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
		url: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
		isValid: true
	});;

	powerStr: TableStr = {
		data: gql`query getList($index:Int,$size:Int,$info:searchPower){
            list:getPowerPage(pageIndex:$index,pageSize:$size,power:$info){
				id title type operation code url explain isValid
            }
            count:getPowerCount(power:$info)
        }`,
		delete: gql`mutation delInfo($id:String){
            deletePower(id:$id)
        }`,
		url: "admin/addPower",
		where: { power: {} }
	};

	menuStr: TableStr = {
		data: gql`query getList($index:Int,$size:Int,$info:searchMenu){
            list:getMenuPage(pageIndex:$index,pageSize:$size,menu:$info){
				id title menuImg isLeaf pid code url isValid
            }
            count:getMenuCount(menu:$info)
        }`,
		delete: gql`mutation delInfo($id:String){
            deleteMenu(id:$id)
        }`,
		url: "admin/addMenu",
		where: { menu: { "\"url\"": '{ \\\"$nin\\\" : [\\\"none\\\"] }' } }
	};

	constructor(private fb: FormBuilder,private apollo: Apollo) {

	}

	ngOnInit() {

	}



	onCheckboDelete(list: Array<Power>, tablePower: any) {

		if (confirm("确认要删除！")) {
			var isTip = true;
			var idList = list.filter(p => p.isCheck).map(p => `"${p.id}"`);
			if (idList.length <= 0) return;
			var reqStr = idList.join(",");

			var power = { _id: `{"$in":[${reqStr}]}` };
			var sql = gql`mutation delInfo($power:searchPower ){
				success:delAllPower(power:$power)
			}`;

			var mutInfo = {
				mutation: sql,
				variables: { power: power }
			}

			this.apollo.mutate(mutInfo).subscribe(({ data }) => {
				console.log(data);
				alert(data.success ? "成功！" : "失败！");
				if (data.success) {
					tablePower.getPage(1);
				}
			})
		}
	}

	onSetInfo(info: IdType, funModal: any, list: Array<Power>) {
		var { id, type } = info;
		if (type == "功能权限") {
			funModal.show();
			var self = list.filter(val => val["id"] == id);
			this.nowPower = self[0];
		}
	}
	//批量添加菜单到权限
	onModalSave(naveMenulist: Array<object>, tablePower: any) {
		
		var powerList = naveMenulist.filter(p => p["isCheck"]).map(val => {
			var menuId = val["id"];
			var url = val["url"];
			var title = val["title"];
			var operation = [Operation.ADD, Operation.UPDATE, Operation.SHOW, Operation.DELETE];
			var code = "0000";
			var explain = "系统菜单";
			var type = "系统菜单";
			return { title, menuId, url, operation, code, explain, type, isValid: true }
		});

		var sql = gql`mutation savePower($power:[inputPower]){
			power:addAllPower(power:$power){ id }
		}`;

		var mutationInfo = {
			mutation: sql,
			variables: { power: powerList }
		}

		this.apollo.mutate<{ power: Array<any> }>(mutationInfo).subscribe(({ data }) => {
			var success = data.power.length > 0;
			tablePower.getPage(1);
			alert(success ? "添加成功！" : "添加失败！");
		})

	}

	onFunCheck(obj: any) {
		let { checked,value } = obj.checked;
		if (checked) {
			this.nowPower.operation.push(value);
		} else {
			this.nowPower.operation = this.nowPower.operation.filter(p => p != value);
		}
	}

	//修改操作权限
	onSaveFunPower() {
		var operation = this.nowPower.operation;
		var power = { id: this.nowPower.id, operation }
		var sql = gql`mutation update($power:inputPower){
			power:savePower(power:$power){ id }
		}`;
		var mutInfo = {
			mutation: sql,
			variables: { power: power }
		};
		this.apollo.mutate(mutInfo).subscribe(({data})=>{
			var success=data.power.id;
			alert(success?"修改成功！":"修改失败！");
		})
	}

	//添加单个权限
	onSubmit(info: object, tablePower: any) {

		var title = info["url"];
		var url = info["url"];
		var code = info["code"];
		var isValid = info["isValid"];
		var operation = [Operation.ADD, Operation.UPDATE, Operation.SHOW, Operation.DELETE];
		var power = {
			title, url, code, isValid, explain: "自定义权限菜单",
			type: "自定义", menuId: "", operation
		}

		var sql = gql`mutation savePower($power:inputPower){
			power:savePower(power:$power){ id }
		}`

		var mutationInfo = {
			mutation: sql,
			variables: { power: power }
		}

		this.apollo.mutate<{ power: any }>(mutationInfo).subscribe(({ data }) => {
			var success = data.power;
			alert(success ? "添加成功！" : "添加失败！");
			tablePower.getPage(1);
		})
	}

}

