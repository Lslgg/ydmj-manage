import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'file-upload',
    styleUrls: ['fileUpload.css'],
    templateUrl: 'fileUpload.html',
})

export class FileUploadComponent implements OnInit {

    @Input() multiple: boolean = true;

    @Output() onFileChange = new EventEmitter<Array<string>>();

    @Output() onDeleteFile = new EventEmitter<Array<string>>();

    @Input() files: Array<{ id: string, url: string, name: string }> = [];

    constructor(private apollo: Apollo) {

    }

    ngOnInit() {

    }

    fileChange(event) {
        var webServer = environment.dataServer;
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            var sql = gql` mutation($files: [Upload!]!) {
                    files:multipleUpload(files: $files) {
                        id filename originalname encoding mimetype path
                    }
                }`;
            var mutInfo = {
                mutation: sql,
                variables: { files: fileList }
            }
            this.apollo.mutate<{ files: Array<any> }>(mutInfo)
                .subscribe(({ data }) => {
                    var fileList = data.files.map(p => {
                        var id = p.id;
                        var url = `${webServer}/${p.path}`;
                        var name = p.originalname;
                        return { id, url, name }
                    });
                    this.files = this.files.concat(fileList)
                    let ids = this.files.map(p => p.id);
                    this.onFileChange.emit(ids);
                })
        }

    }

    deleteFile(id: string) {
        if (confirm("确实要删除该文件!")) {
            this.apollo.mutate({
                mutation: gql`mutation($id:String){
                success:deleFile(id:$id)
              }`, variables: { id }
            }).subscribe(({ data }) => {
                if (data.success) {
                    this.files = this.files.filter(p => p.id != id);
                    let ids = this.files.map(p => p.id);
                    this.onFileChange.emit(ids);
                }
            })
        }
    }
}