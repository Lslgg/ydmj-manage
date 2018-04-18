import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'mall-add-goodsType',
    templateUrl: 'addGoodsType.html',
})

export class AddGoodsTypeComponent implements OnInit {

    goodsTypeForm: FormGroup = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        businessId: ['', Validators.required],
    });

    goodsType: FormStr = {
        data: gql`query($id:String){
            info:getGoodsTypeById(id:$id){
            id,name,businessId:Business{id}
            }
        }`,
        save: gql`mutation($info:inputGoodsType){
            saveGoodsType(goodsType:$info){ id }
        }`,
        url: "admin/goods-type",
    }

    businessList: Array<{ key: string, value: string }>=[];

    constructor( 
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router,
        private apollo: Apollo) {
    }

    ngOnInit() {
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
}