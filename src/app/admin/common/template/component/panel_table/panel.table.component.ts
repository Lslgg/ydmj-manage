import { Component, OnInit, Input,Inject,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'template-panel-table',
    templateUrl: 'panel.table.html'
})

export class PanelTableComponent {

    @Input() Title:string;

    @Input() showOpeation:boolean=true;

    @Output() onAdd = new EventEmitter<number>();

    @Input() addUrl;

    @Output() onDelete = new EventEmitter();

    constructor(private router: Router) {

     }
    

    onAddInfo(){
        this.onAdd.emit();
        if(this.addUrl){
            this.router.navigate(['../'+this.addUrl]);
        }
    }

    delete(){
        if(confirm("是否真的要删除！")){
            this.onDelete.emit();
        }
    }
}