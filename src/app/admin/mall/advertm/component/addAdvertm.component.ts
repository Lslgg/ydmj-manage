import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-add-advertm',
    templateUrl: 'addAdvertm.html',
})

export class AddAdvertmComponent implements OnInit {

    advertmForm: FormGroup = this.fb.group({
        id: [''],
        title: ['', Validators.required],
        type: ['', Validators.required],
        link: ['', Validators.required],
        imageIds: [''],
        explain: [''],
        startDate: [this.cdate.startDate],
        endDate: [this.cdate.endDate],
        isValid: [true],
    });

    advertm: FormStr = {
        data: gql`query($id:String){
            info:getAdvertmById(id:$id){
                id,link,title,isValid,type,endDate,startDate,
                explain,imageIds:Images{ id name:originalname url:path }
            }
        }`,
        save: gql`mutation($info:inputAdvertm){
            saveAdvertm(advertm:$info){ id }
        }`,
        url: "admin/advertm",
    }

    typeList: Array<{ key: string, value: string }> = [
        { key: "全部", value: "全部" },
        { key: "商品页面广告", value: "商品页面广告" },
        { key: "商家页面广告", value: "商家页面广告" }
    ];

    files: Array<any> = new Array<any>();

    constructor( @Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() { }
}