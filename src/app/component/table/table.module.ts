import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialList } from '../../common/material.list';
import { MatNativeDateModule } from "@angular/material";
import {
    DataTableComponent,
    TheadComponent,
    TheadThComponent,
    TbodyComponent,
    TfootComponent,
    PagiationComponent,
    TbodyTdComponent,
    SearchComponent,
    
} from "./component/index";

let commonList = [
    DataTableComponent,
    TheadComponent,
    TheadThComponent,
    TbodyComponent,
    TfootComponent,
    PagiationComponent,
    TbodyTdComponent,
    SearchComponent
];

@NgModule({
    imports: [
        MaterialList,
        CommonModule,
        FormsModule,
    ],
    exports: [commonList],
    declarations: [commonList]
})
export class TableModule { }
