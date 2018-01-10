import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'app-setting',
    templateUrl: 'setting.html'
})

export class SettingComponent implements OnInit {

    content: { free: boolean, news: string, notice: string, tip: string } =
        { free: false, news: "", notice: "", tip: "" };

    version: { iOSUrl: string, iOSVersion: string, androidUrl: string, androidVersion: string } =
        { iOSUrl: "", iOSVersion: "", androidUrl: "", androidVersion: "" };


    constructor(private apollo: Apollo) {

    }

    ngOnInit() {
        var listStr = this.getContentStr();
        type info = { tip: any, notice: any, news: any, version: any };
        this.apollo.query<info>({query:listStr}).subscribe(({data})=>{
            this.version=data.version;
            Object.assign(this.content, data.tip);
            Object.assign(this.content, data.notice);
            Object.assign(this.content, data.news);
        });
    }


    set_news() {
        const str = gql`mutation updateNews($news: String!) {
            updateNews(id:"1",news:{content:$news}) { id }
        }`;
        this.apollo.mutate({ mutation: str, variables: { notice: this.content.news } })
            .subscribe(({data}) => {
                var id = data.updateNews.id;
                alert(id ? "修改成功！" : "修改失败！")
            });
    }

    set_notice() {
        const str = gql`mutation updateNotice($notice: String!) {
            updateNotice(id:"1",notice:{content:$notice}) { id }
        }`;
        this.apollo.mutate({ mutation: str, variables: { notice: this.content.notice } })
            .subscribe(({data}) => {
                var id = data.updateNotice.id;
                alert(id ? "修改成功！" : "修改失败！")
            });
    }

    async set_tip() {
        const str = gql`mutation updateTip($tip: String!) {
            updateTip(id:"1",tip:{content:$tip}) { id }
        }`;
        this.apollo.mutate({ mutation: str, variables: { tip: this.content.tip } })
            .subscribe(({data}) => {
                var id = data.updateTip.id;
                alert(id ? "修改成功！" : "修改失败！")
            });
    }

    set_if_free(free: any) {
        const str = gql`mutation updateTip($free: Boolean!) {
            updateTip(id:"1",tip:{free:$free}) { id }
        }`;
        this.apollo.mutate({ mutation: str, variables: { free: free.checked } })
            .subscribe(({data}) => {
                var id = data.updateTip.id;
                alert(id ? "修改成功！" : "修改失败！")
            });
    }

    set_version() {
        var upStr = gql`mutation updateVersion($iOSUrl: String, $iOSVersion:String,
                $androidUrl:String,$androidVersion:String)
            {
                updateVersion(id:"1",version:{
                    iOSUrl:$iOSUrl,
                    iOSVersion:$iOSVersion,
                    androidUrl:$androidUrl,
                    androidVersion:$androidVersion }){ id }
            }`;
        this.apollo.mutate({
            mutation: upStr,
            variables: {
                iOSUrl: this.version.iOSUrl,
                iOSVersion: this.version.iOSVersion,
                androidUrl: this.version.androidUrl,
                androidVersion: this.version.androidVersion
            }
        }).subscribe(({data}) => {
            var id = data.updateVersion.id;
            alert(id ? "修改成功！" : "修改失败！")
        });
    }

    private getContentStr(): string {
        var listStr = gql`query list{
            tip: getTipById(id: "1") {
                id 
                free 
                tip:content 
            }
            notice: getNoticeById(id: "1") {
                id 
                notice:content
            }
            news: getNewsById(id: "1") {
                id 
                news:content
            }
            version: getVersionById(id: "1") {
                id 
                iOSUrl 
                androidUrl 
                iOSVersion 
                androidVersion
            }
        }`;
        return listStr;
    }

}