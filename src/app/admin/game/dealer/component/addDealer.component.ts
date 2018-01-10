import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-add-dealer',
    templateUrl: 'addDealer.html'
})

export class AddDealerComponent {

    //创建form表单
    dealerForm: FormGroup = this.fb.group({
        id: [""],
        name: ['', [Validators.required, Validators.minLength(2)]],
        code: ['', [Validators.required, Validators.minLength(4)]],
    });;

    //表单相关操作
    dealer: FormStr = {
        data: gql`query getInfo($id:String){
            info:getDealerById(id:$id){
                id name code
            }
        }`,
        save: gql`mutation add($info:inputDealer){
            saveDealer(dealer:$info){ id }
        }`,
        url: "admin/dealer",
    }

    constructor(private fb: FormBuilder) {

    }
}