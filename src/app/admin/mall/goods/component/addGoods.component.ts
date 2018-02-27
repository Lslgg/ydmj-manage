import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
    selector: 'mall-add-goods',
    templateUrl: 'addGoods.html',
})

export class AddGoodsComponent implements OnInit {

    flag: Boolean = false;
    goodsForm: FormGroup = this.fb.group({
        id: [''],
        businessId: ['', Validators.required],
        goodsTypeId: ['', Validators.required],
        name: ['', Validators.required],
        score: ['', Validators.required],
        ruler: ['', Validators.required],
        explain: ['', Validators.required],
        stock: ['', Validators.required],
        validTime: ['', Validators.required],
        isValid: [false, Validators.required],
    });

    goods: FormStr = {
        data: gql`query($id:String){
            info:getGoodsById(id:$id){
            id,name,score,ruler,explain,stock,isValid,businessId:Business{id}
            }
        }`,
        save: gql`mutation($info:inputGoods){
            saveGoods(goods:$info){ id }
        }`,
        url: "admin/goods",
    };

    businessList: Array<{ key: string, value: string }> = [];
    goodsTypeList: Array<{ key: string, value: string }> = [];
    timeList: Array<{ key: string, value: string }> = [
        { key: "259200000", value: "3天内有效" },
        { key: "604800000", value: "7天内有效" },
        { key: "1296000000", value: "15天内有效" },
        { key: "2592000000", value: "30天内有效" },
        { key: "7776000000", value: "90天内有效" },
    ];
    businessId:Array<String> = [];

    constructor(
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router,
        private apollo: Apollo) {
    }

    async ngOnInit() {
        var businessList = await this.getBusinessList();
        if (businessList) {
            for (var i = 0; i < businessList.length; i++) {
                this.businessList.push({ key: businessList[i].id + '', value: businessList[i].name + '' });
                this.businessId.push(businessList[i].id);
            }
        }
        this.getGoodsTypeList();
        // var goodsTypeList = await this.getBusinessList();
        this.flag = true;
    }

    async getBusinessList() {
        this.businessList = [];
        var sql = gql`query{
            list:getBusiness {id, name}
        }`;
        return new Promise<any>((resolve, reject) => {
            var info = this.apollo.query<{ list: Array<{ id: String, name: String }> }>({ query: sql }).subscribe(({ data }) => {
                resolve(data.list);
                return;                                       
            })
        });
    }

    getGoodsTypeList() {
        this.goodsTypeList = [];
        var sql = gql`query($info:String){
            list:getGoodsTypeByIdIn(id:$info) {id, name}
        }`;
        return this.apollo.query<{ list: Array<{ id: String, name: String }> }>({
            query: sql,
            variables: { "info":  `${this.businessId}` }
        }).subscribe(({ data }) => {
            console.log(data);
            if (data.list) {
                for (var i = 0; i < data.list.length; i++) {
                    this.goodsTypeList.push({ key: data.list[i].id + '', value: data.list[i].name + '' });
                }
            }
            return data.list;
        })
    }
    onDone(info:any) {
        console.log(info);
    }

    onChange(info: any) {
        this.goodsTypeList = [];
        var sql = gql`query($info:searchGoodsType){
            list:getGoodsTypeWhere(goodsType:$info) {id, name}
        }`;
        return this.apollo.query<{ list: Array<{ id: String, name: String }> }>({
            query: sql,
            variables: { "info": { "businessId": `{"$eq":"${info}"}` } }
        }).subscribe(async ({ data }) => {
            if (data.list) {
                for (var i = 0; i < data.list.length; i++) {
                    this.goodsTypeList.push({ key: data.list[i].id + '', value: data.list[i].name + '' });
                }
            }
            return data.list;
        })
    }
}