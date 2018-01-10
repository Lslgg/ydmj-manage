import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatButtonModule} from '@angular/material/button'
import { DataModalComponent } from './dataModal.component';

@NgModule({
    imports: [
        MatButtonModule,
        CommonModule,
        ModalModule
    ],
    exports: [ DataModalComponent ],
    declarations: [ DataModalComponent ],
    providers: [],
})
export class DataModalModule { }
