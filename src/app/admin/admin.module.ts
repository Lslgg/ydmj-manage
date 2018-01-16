import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { CommonModule as SystemCommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
//admin common template
import { TemplateModule } from './common/template';
//custom
import { BreadcrumbsComponent } from '../component';
import { TableModule } from '../component/table/table.module';
import { DataFormModule } from '../component/dataform';
import { TreeModule } from '../component/tree';
import { DataModalModule } from '../component/dataModal';
import { FontawesomeModule } from '../component/fontawesome';
import { AuthGuard } from './common/server/auth-guard.service';
//Materia Ui
import { MaterialList } from '../common/material.list';

import { AdminRoutingModule, ComponentList } from './admin.routing';

import { AsideToggleDirectiveNew } from './layouts/directiver'
import { CheckedPipe, KeysPipe} from './system/power/shared/power.pipe';

import { SIDEBAR_TOGGLE_DIRECTIVES, NAV_DROPDOWN_DIRECTIVES, 
  AsideToggleDirective,EqualValidator,ToggleDirective } from './common/directive';

let directive=[
  SIDEBAR_TOGGLE_DIRECTIVES, NAV_DROPDOWN_DIRECTIVES, 
  AsideToggleDirective,EqualValidator,ToggleDirective
];

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SystemCommonModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        MaterialList,
        AdminRoutingModule,
        TemplateModule,
        TableModule,
        DataFormModule,
        TreeModule,
        DataModalModule,
        FontawesomeModule,
    ],
    exports: [],
    declarations: [
        directive,
        CheckedPipe,
        KeysPipe,
        BreadcrumbsComponent,
        AsideToggleDirectiveNew,
        ComponentList
    ],
    providers: [
        AuthGuard
    ],
})

export class AdminModule { }
