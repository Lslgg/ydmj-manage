import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Component({
    selector: 'admin-addUser',
    templateUrl: 'addUser.html',
})

export class AddUserComponent implements OnInit {

    userForm: FormGroup = this.fb.group({
        id: [''],
        username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
        roleId: ['', Validators.required],
        pwdList: new FormGroup({
            password: new FormControl('123456', [Validators.required, Validators.minLength(6)]),
            passwordConfirm: new FormControl('123456'),
            isValid: new FormControl(true)
        }, this.pwdMatch),
    });

    roleList: Array<{}> = [];

    oldRoleId: string;

    userStr: FormStr = {
        module: "user",
        data: gql`query getInfo($id:String){
            info:getUserById(id:$id){
                id,username
                roleId:Role{id}
                password 
                passwordConfirm:password
                isValid
            }
        }`,
        save: gql`mutation add($info:inputUser){
            saveUser(user:$info) { id }
        }`,
        url: "admin/user",
    };

    constructor(private apollo: Apollo, private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.apollo.query<{ list: any }>({
            query: gql`query {
                list:getRoles{key:id value:roleName}
            }`
        }).subscribe(({ data }) => this.roleList = data.list)
    }


    //密码验证
    private pwdMatch(g: FormGroup) {
        let password = g.get('password').value;
        let passwordConfirm = g.get('passwordConfirm').value;
        if (password != passwordConfirm) {
            g.get('passwordConfirm').setErrors({ MatchPassword: true })
        } else {
            return null;
        }
    }
}