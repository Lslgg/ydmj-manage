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

    goodsForm: FormGroup = this.fb.group({
        id: [''],
        businessId: ['', Validators.required],
        goodsTypeId: ['', Validators.required],
        name: ['', Validators.required],
        score: ['', Validators.required],
        ruler: ['', Validators.required],
        explain: ['', Validators.required],
        stock: ['', Validators.required],
        imageIds: ['', Validators.required],
        validTime: ['', Validators.required],
        isValid: [false, Validators.required],
    });

    goods: FormStr = {
        data: gql`query($id:String){
            info:getGoodsById(id:$id){
            id,name,score,ruler,explain,stock,isValid,businessId:Business{id},goodsTypeId:GoodsType{id},validTime,,imageIds:Images{ id name:originalname url:path }
            }
        }`,
        save: gql`mutation($info:inputGoods){
            saveGoods(goods:$info){ id }
        }`,
        url: "admin/goods",
    };

    businessList: Array<{ key: string, value: string }> = [];
    goodsTypeList: Array<{ key: string, value: string }> = [];
    timeList: Array<{ key: Number, value: string }> = [
        { key: 259200000, value: "3天内有效" },
        { key: 604800000, value: "7天内有效" },
        { key: 1296000000, value: "15天内有效" },
        { key: 2592000000, value: "30天内有效" },
        { key: 7776000000, value: "90天内有效" },
    ];
    businessId: Array<String> = [];

    constructor(
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router,
        private apollo: Apollo) {
    }

    ngOnInit() {
        this.getInit();
    }

    async getInit() {
        var businessList = await this.getBusinessList();
        if (businessList) {
            for (var i = 0; i < businessList.length; i++) {
                this.businessList.push({ key: businessList[i].id + '', value: businessList[i].name + '' });
                this.businessId.push(businessList[i].id);
            }
        }
        var goodsTypeList = await this.getGoodsTypeList();
        if (goodsTypeList) {
            if (goodsTypeList) {
                for (var i = 0; i < goodsTypeList.length; i++) {
                    this.goodsTypeList.push({ key: goodsTypeList[i].id + '', value: goodsTypeList[i].name + '' });
                }
            }
        }
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
        return new Promise<any>((resolve, reject) => {
            this.apollo.query<{ list: Array<{ id: String, name: String }> }>({
                query: sql,
                variables: { "info": `${this.businessId}` }
            }).subscribe(({ data }) => {
                resolve(data.list);
                return;
            })
        })

    }

    onChange(info: any) {
        this.goodsTypeList = [];
        var sql = gql`query($info:searchGoodsType){
            list:getGoodsTypeWhere(goodsType:$info) {id, name}
        }`;
        this.apollo.query<{ list: Array<{ id: String, name: String }> }>({
            query: sql,
            variables: { "info": { "businessId": `{"$eq":"${info}"}` } }
        }).subscribe(async ({ data }) => {
            if (data.list) {
                for (var i = 0; i < data.list.length; i++) {
                    this.goodsTypeList.push({ key: data.list[i].id + '', value: data.list[i].name + '' });
                }
            }
        })
    }
}