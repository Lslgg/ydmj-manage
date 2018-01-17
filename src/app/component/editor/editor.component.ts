import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'component-editor',
    templateUrl: 'editor.html',
    encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements OnInit {
    @Input() name: string;
    public editorOptions: Object = {
        placeholderText: this.name,
        fileUpload: false,
        imageUploadParam: 'avatar',
        imageUploadURL: `${environment.dataServer}/profile`,
        events: {
            'froalaEditor.initialized': () => {
                console.log('editor');
            },
            'froalaEditor.image.removed': (e, editor, $img) => {
                console.log(editor);
                var list = $img[0].src.split("/");
                var fileName=list[list.length-1];
                this.http.post(`${environment.dataServer}/delimg/${fileName}`, null);
            }
        }
    };

    public content: string;

    constructor(private http: Http) {

    }

    ngOnInit() { }
}