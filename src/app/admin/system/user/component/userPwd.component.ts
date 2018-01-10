import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'admin-user-pwd',
    templateUrl: 'userPwd.html',
})

export class UserPwdComponent implements OnInit {

    userForm: FormGroup = this.fb.group({
        id: [''],
        username: [{ value: "", disabled: true },
        [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
        password: ['', Validators.required],
        pwdList: new FormGroup({
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            passwordConfirm: new FormControl('')
        }, this.pwdMatch),
    });

    oldPassword: string;

    constructor(private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private apollo: Apollo) {
    }

    ngOnInit() {
        var sql = gql`query {
            user:currentUser { id username password }
        }`;

        this.apollo.query<{user:any}>({ query: sql }).subscribe(({ data }) => {
            var { id, username, password } = data.user;
            this.userForm.get("username").setValue(username);
            this.userForm.get("id").setValue(id);
            this.oldPassword = password;
        })
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

    onSubmit(info: any) {
        var { id, password, pwdList } = info;
        var newPassword = pwdList["password"];

        if (this.oldPassword != password) {
            alert("你输入的旧密码不正确！")
            return;
        }

        var sql = gql`mutation upUserPassword($user:inputUser){
            user:saveUser(user:$user) { id }
          }`;

        var user = { id: id, password: newPassword };
        var mutaionInfo = {
            mutation: sql,
            variables: { user }
        };
        this.apollo.mutate<{ user: any }>(mutaionInfo).subscribe(({ data }) => {
            alert(data.user.id ? "修改成功！" : "修改失败！");
            if (data.user.id) {
                this.router.navigate(["admin/main"]);
            }
        })
    }
}
