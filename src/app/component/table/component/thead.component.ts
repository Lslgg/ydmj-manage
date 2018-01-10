import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input, QueryList, ContentChildren, ContentChild } from '@angular/core';
import { TheadThComponent } from './thead.th.component';

@Component({
    selector: '.data-thead',
    styleUrls: ['./table.css'],
    template: ` 
        <tr class="theadTr" #theadTr>
            <th *ngIf="isShowCheckbox" name="#" type="checkbox" width="20"> 
                <mat-checkbox (click)="allchecked(checked)"></mat-checkbox>
            </th>
            <ng-content class=".data-th"></ng-content>
        </tr>
    `
})

export class TheadComponent implements OnInit {

    rowList: Array<{
        name: string, title: string,
        type: string, columnSpan: number, rowsetSpan: number
    }> = [];

    @Input() isShowCheckbox: boolean = true;
    
    @Input() checked: boolean = false;

    //实现自动全选,如果是自动查找不需要给值
    @Input() dataList:Array<Object>=[];

    constructor() {

    }

    @ContentChildren(TheadThComponent) theadths: QueryList<TheadThComponent>



    ngAfterContentInit() {
        //如果是显示checkbox 添加记录到tbody也显示checkbox
        if(this.isShowCheckbox){
            this.rowList.push({ name:"checkbox", title:"checkbox", 
                type:"checkbox", columnSpan:1, rowsetSpan:1 });
        }

        this.theadths.forEach(p => {
            let name = p.name;
            let title = p.title;
            let type = p.type;
            let columnSpan = p.columnSpan;
            let rowsetSpan = p.rowsetSpan;
            this.rowList.push({ name, title, type, columnSpan, rowsetSpan });
        })
    }

    ngOnInit() { }

    allchecked(checked: boolean) {
        this.checked = !checked;
        this.dataList.forEach(p=>p["isCheck"]=this.checked);
    }
}