import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

type User = {
    id: string, pfId: string, username: string,
    email: string, phone: string, address: string
};

@Component({
    selector: 'admin-user-info',
    templateUrl: 'userInfo.html',
})

export class UserInfoComponent implements OnInit {

    userForm: FormGroup = this.fb.group({
        id: [''],
        pfId: [''],
        username: [{ value: '', disabled: true }, [Validators.required]],
        email: [''],
        phone: [''],
        address: [''],
    });

    constructor(private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router, private apollo: Apollo) {
        this.getProfile();
    }

    ngOnInit() { }

    onSubmit(user: User) {
        this.updateUser(user);
    }

    getProfile() {
        var sql = gql`query {
             user:currentUser { 
                id username  email
                Profile{ pfId:id phone address }
            }
        }`;

        this.apollo.query<{ user: any }>({ query: sql})
            .subscribe(({ data }) => {
                var user = data.user;
                var { id, username, email } = user;
                var pfId = "", phone = "", address = "";

                if (user.Profile) {
                    pfId = user.Profile.pfId;
                    phone = user.Profile.phone;
                    address = user.Profile.address;
                }
                var userValue = { id, username, email, pfId, phone, address };
                this.userForm.setValue(userValue);
            })
    }

    updateUser(user: User) {
        const sql = gql`mutation save($user:inputUser,$profile: inputProfile){
                user:saveUser(user:$user) { id }
                profile:saveProfile(profile: $profile) { id }
          }`;
        var { phone, address } = user;
        var profile = { phone, address, id: user.pfId, userId: user.id }
        var info = {
            mutation: sql,
            variables: {
                user: { id: user.id, email: user.email },
                profile: profile
            }
        };
        this.apollo.mutate<{ user: any, profile: any }>(info).subscribe(({ data }) => {
            alert(data.user.id ? "修改成功！" : "修改失败！");
        })
    }
}