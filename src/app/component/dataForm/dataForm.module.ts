import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FileUploadModalModule } from '../fileUpload/';
import { MaterialList } from '../../common/material.list';
import {MatInputModule} from '@angular/material';
import { EditorModule } from '../editor/editor.module';

import {
   DataFormComponent,
   FormItemComponent,
   FormGroupComponent,
   ValidatorComponent,
} from "./component/index";

let commonList = [
  DataFormComponent,
  FormItemComponent,
  FormGroupComponent,
  ValidatorComponent
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        MaterialList,
        ReactiveFormsModule,
        FileUploadModalModule,
        EditorModule
    ],
    exports: [
        commonList
    ],
    declarations: [
        commonList
    ],
    providers: [],
})
export class DataFormModule { }
