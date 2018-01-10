import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[tbody-td]',
    templateUrl: 'tbody.td.html'
})

export class TbodyTdComponent implements OnInit {

    @Input() item: object;

    @Input() title: string | number | Array<string> | boolean;

    @Input() colType: string;

    @Input() id: string;

    @Input() field: string;

    @Input() updateUrl: string;

    @Output() onSetInfo = new EventEmitter<IdType>();



    constructor(private router: Router) { }

    ngOnInit() {
        if (this.colType == "object") {
            var list = this.field.split('.');
            var info = this.item[list[0]];
            if (!info) { this.title = ""; return; }
            this.title = info[list[1]];
        }
    }

    setInfo(info: IdType) {
        this.onSetInfo.emit(info);
    }

    allCheck(isCheck: boolean) {
        console.log(this.item["checkboxList"]);
        for (var i = 0; i < this.item["checkboxList"].length; i++) {
            var self = this.item["checkboxList"][i];
            self["isCheck"] = !isCheck;
        }
    }

    singleCheck(val: object) {
        val["isCheck"] = !val["isCheck"];
    }

    update(id) {
        this.router.navigate(['../' + this.updateUrl, id]);
    }
}