import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-addRole',
    templateUrl: 'addRole.html',
})

export class AddRoleComponent implements OnInit {

    roleForm: FormGroup = this.fb.group({
        id: [''],
        code: [''],
        roleName: ['', [Validators.required, Validators.maxLength(32)]],
        desc: [''],
        isDefault: [false],
        isValid: [true]
    });

    roleStr: FormStr = {
        module: "role",
        data: gql`query getInfo($id:String){
            info:getRoleById(id:$id){
                id roleName code desc isValid isDefault
            }
        }`,
        save: gql`mutation add($info:inputRole){
            saveRole(role:$info) { id }
        }`,
        url: "admin/role",
    };

    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {

    }
}