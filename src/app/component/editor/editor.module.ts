import { NgModule } from '@angular/core';
import { EditorComponent } from './editor.component';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
    imports: [
        FormsModule, 
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot()
    ], 
    exports: [
        EditorComponent
    ],
    declarations: [EditorComponent],
    providers: [],
})
export class EditorModule { }
