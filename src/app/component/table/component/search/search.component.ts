import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'search-item',
    styleUrls: ['search.scss'],
    templateUrl: 'search.html'
})


export class SearchComponent implements OnInit {

    @Input() name: string;

    @Input() title: string;

    @Input() type: string="text";

    @Input() value: any;

    @Input() group:string;

    /**
     * mysql 和sql 语法一样
     * mongodb 条件下列
     *$eq 相等
     *$ne 不等于
     *$gt 大于
     *$gte大于等于
     *$lt 小于
     *$lte小于等于
     *$in 属于，处于
     *$nin不属于，不处于
     */
    @Input() condition: string = '=';

    @Input() dataList: Array<{ key: string, value: string }> = [];

    nowValue: any;


    constructor() {

    }

    ngOnInit() {
        this.nowValue = this.value;
        if (this.type == "date" && this.value) {
            this.nowValue = new FormControl(new Date(this.value));
        }else if(this.type == "date"){
            this.nowValue = new FormControl(new Date());
        }
    }
}