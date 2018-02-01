import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-add-business',
    templateUrl: 'addBusiness.html',
})

export class AddBusinessComponent implements OnInit {

    businessForm: FormGroup = this.fb.group({
        id: [''],        
        name: ['', Validators.required],
        phone_num: ['', Validators.required],
        address: ['', Validators.required],
        b_hours: ['', Validators.required],
        brief: ['', Validators.required],
        score: [0,],        
        imageIds: [''],    
        trans_times: [0,],                    
        isValid: [true],
    });

    business: FormStr = {
        data: gql`query($id:String){
            info:getBusinessById(id:$id){
            id,name,phone_num,address,b_hours,address,b_hours,brief,score,trans_times,imageIds:Images{ id name:originalname url:path }
            }
        }`,
        save: gql`mutation($info:inputBusiness){
            saveBusiness(business:$info){ id }
        }`,
        url: "admin/business",
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