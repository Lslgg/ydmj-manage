import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'mall-add-goods',
    templateUrl: 'addGoods.html',
})

export class AddGoodsComponent implements OnInit {

    goodsForm: FormGroup = this.fb.group({
        id: [''],
        businessId: ['', Validators.required],
        goodsTypeId: ['', Validators.required],
        name: ['', Validators.required],
        score: ['', Validators.required],
        ruler: ['', Validators.required],
        explain: ['', Validators.required],
        stock: ['', Validators.required],
        isValid: [false, Validators.required],
    });

    goods: FormStr = {
        data: gql`query($id:String){
            info:getGoodsById(id:$id){
            id,name,score,ruler,explain,stock,isValid
            }
        }`,
        save: gql`mutation($info:inputGoods){
            saveGoods(goods:$info){ id }
        }`,
        url: "admin/addGoods",
    }

    businessList: Array<{ key: string, value: string }> = [];
    goodsTypeList: Array<{ key: string, value: string }> = [];

    constructor(
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router,
        private apollo: Apollo) {
    }

    ngOnInit() {
        this.getBusinessList();
    }

    getBusinessList() {
        this.businessList = [];
        var sql = gql`query{
            list:getBusiness {id, name}
        }`;
        this.apollo.query<{ list: Array<{ id: String, name: String }> }>({ query: sql }).subscribe(({ data }) => {
            if (data.list) {
                for (var i = 0; i < data.list.length; i++) {
                    this.businessList.push({ key: data.list[i].id + '', value: data.list[i].name + '' });
                }                
            }
        })
    }

    onChange(info: any) {
        this.goodsTypeList = [];
        var sql = gql`query($info:searchGoodsType){
            list:getGoodsTypeWhere(goodsType:$info) {id, name}
        }`;
        this.apollo.query<{ list: Array<{ id: String, name: String }> }>({
            query: sql, variables: { "info": { "businessId": `{"$eq":"${info}"}` } }
        }).subscribe(({ data }) => {            
            if (data.list) {
                for (var i = 0; i < data.list.length; i++) {
                    this.goodsTypeList.push({ key: data.list[i].id + '', value: data.list[i].name + '' });
                }
            }
        })
    }
}