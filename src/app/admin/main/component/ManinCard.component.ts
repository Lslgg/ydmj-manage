import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'admin-main-card',
    templateUrl: 'mainCard.html'
})

export class MainCardComponent implements OnInit {

    @Input() title:string;
    @Input() subTitle:string;
    @Input() icons:string;
    @Input() subIcons:string;
    @Input() total:number=0;
    @Input() color:string="orange"

    constructor() { }

    ngOnInit() { }
}