import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FileUploadComponent } from './fileUpload.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
    ],
    exports: [ FileUploadComponent ],
    declarations: [ FileUploadComponent ],
    providers: [],
})
export class FileUploadModalModule { }