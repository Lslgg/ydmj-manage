import { Component, OnInit,Input,ContentChildren,QueryList,HostBinding } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormItemComponent } from '../formItem/formItem.component';

@Component({
    selector: 'form-group',
    templateUrl: 'formGroup.html',
    host: { 'class': 'col-md-12' }
})

export class FormGroupComponent implements OnInit {

    @Input() formInfo:FormGroup;

    @Input() name:string;

    @Input() isRootClass:boolean=true;

    @HostBinding('class.col-md-12') colmd12: boolean;

    @ContentChildren(FormItemComponent) flist: QueryList<FormItemComponent>;
    
    constructor() { }

    ngOnInit() { 
        this.colmd12 = this.isRootClass; 
    }
}