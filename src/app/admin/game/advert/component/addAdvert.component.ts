import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-add-advert',
    templateUrl: 'addAdvert.html',
})

export class AddAdvertComponent implements OnInit {

    advertForm: FormGroup = this.fb.group({
        id: [''],
        title: ['', Validators.required],
        type: ['', Validators.required],
        activity: [3, Validators.required],
        imageIds: [''],
        explain: [''],
        startDate: [this.cdate.startDate],
        endDate: [this.cdate.endDate],
        isValid: [true],
    });

    advert:FormStr={
        data: gql`query($id:String){
            info:getAdvertById(id:$id){
                id,activity,title,isValid,type,endDate,startDate,
                explain,imageIds:Images{ id name:originalname url:path }
            }
        }`,
        save: gql`mutation($info:inputAdvert){
            saveAdvert(advert:$info){ id }
        }`,
        url: "admin/advert",
        
    }

    typeList: Array<{ key: string, value: string }> = [
        { key: "大厅广告", value: "大厅广告" }, 
        { key: "活动广告", value: "活动广告" }
    ];

    files: Array<any> = new Array<any>();

    constructor(@Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() { }
}