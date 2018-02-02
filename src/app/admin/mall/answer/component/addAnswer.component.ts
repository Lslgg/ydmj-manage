import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import gql from 'graphql-tag';

@Component({
    selector: 'mall-add-answer',
    templateUrl: 'addAnswer.html',
})

export class AddAnswerComponent implements OnInit {

    answerForm: FormGroup = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        type: ['', Validators.required], 
        content: ['', Validators.required],                        
        startDate: [this.cdate.startDate],
        endDate: [this.cdate.endDate],
        isValid: [true],
    });

    answer: FormStr = {
        data: gql`query($id:String){
            info:getAnswerById(id:$id){
                id,name,type,content,startDate,endDate
            }
        }`,
        save: gql`mutation($info:inputAnswer){
            saveAnswer(answer:$info){ id }
        }`,
        url: "admin/answer",

    }

    typeList: Array<{ key: string, value: string }> = [
        { key: "常见问答", value: "常见问答" },        
    ];

    files: Array<any> = new Array<any>();

    constructor( @Inject("commonData") private cdate: CommonData,
        private fb: FormBuilder, private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() { }
}