import { NgModule } from '@angular/core';
import { CommonModule as SysteCommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { ToggleDirective } from './directive/toggle.directive';
import { MaterialList } from '../../../common/material.list'
import { 
    PanelTableComponent, 
    PanelFormComponent 
} from './component/index';

@NgModule({
    imports: [
        MaterialList,
        SysteCommonModule,
    ],
    declarations: [
        TemplateComponent,
        PanelTableComponent,
        PanelFormComponent,
        ToggleDirective
    ],
    exports:[
        TemplateComponent,
        PanelTableComponent,
        PanelFormComponent
    ],
    bootstrap: [TemplateComponent],
})
export class TemplateModule { }
