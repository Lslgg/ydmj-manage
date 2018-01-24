import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { TinyMceComponent } from './tinymce.component';

import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    imports: [
        FormsModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot()
    ],
    exports: [
        EditorComponent,
        TinyMceComponent
    ],
    declarations: [EditorComponent, TinyMceComponent],
    providers: [],
})
export class EditorModule { }
