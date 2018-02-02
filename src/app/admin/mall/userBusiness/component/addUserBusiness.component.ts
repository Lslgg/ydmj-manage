import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular/Apollo';

@Component({
    selector: 'mall-add-userBusiness',
    templateUrl: 'addUserBusiness.html',
})

export class AddUserBusinessComponent implements OnInit {

    userBusinessForm: FormGroup = this.fb.group({
        id: [''],
        userId: ['', Validators.required],
        businessId: ['', Validators.required],
    });

    userBusiness: FormStr = {
        data: gql`query{
            info:getUserBusinessCount         
        }`,
        save: gql`mutation($info:inputUserBusiness){
            saveUserBusiness(userBusiness:$info){ id }
        }`,
        url: "admin/userBusiness",
    }

    businessList: Array<{ key: string, value: string }> = [];
    userList: Array<{ key: string, value: string }> = [];


    constructor( @Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router,
        private apollo: Apollo) {
    }

    ngOnInit() {
        type ObjList = Array<{ key: string, value: string }>;
        this.apollo.query<{ userList: ObjList, businessList: ObjList }>({
            query: gql`query{
                            userList:getUsers {
                            key:id,value:username
                            },
                            businessList:getBusiness {
                            key:id,value:name
                            }
                        }`
            , fetchPolicy: "network-only",
        }).subscribe(({ data }) => {
            if (data.userList) {
                this.userList = data.userList;
            }
            if (data.businessList) {
                this.businessList = data.businessList;
            }
        });
    }
    change(info: any) {
    }
}