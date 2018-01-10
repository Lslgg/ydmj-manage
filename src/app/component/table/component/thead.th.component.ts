import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: '.data-th',
    styleUrls: ['./table.css'],
    template: ` 
        {{title}}
        <ng-content></ng-content>
    `
})

export class TheadThComponent implements OnInit {

    @Output() onCheckAll = new EventEmitter<Boolean>();

    @Input() isShowCheckbox: boolean = true;

    @Input() checked: boolean = false;

    @Input() name: string;
    @Input() title: string;
    @Input() type: string;
    @Input() columnSpan: number;
    @Input() rowsetSpan: number;

    ngOnInit() { }

}