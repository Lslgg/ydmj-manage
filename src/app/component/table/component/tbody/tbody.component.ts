import {
    Component, OnInit, ElementRef, ViewChildren,
    Input, Output, EventEmitter, ContentChild, Inject
} from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { PagiationComponent } from '../pagiation/pagiation.component';
import { TheadComponent } from '../thead.component';

import { Router } from '@angular/router';

@Component({
    selector: '.data-tbody',
    styleUrls: ['../table.css'],
    templateUrl: 'tbody.html',

})

export class TbodyComponent implements OnInit {

    //表格数据
    @Input() dataList: Array<Object> = [];

    //是否自动加载数据
    @Input() IsAutomaticList: boolean = true;

    //数据主键用于对数据的操作
    @Input() key: string = "id";

    //是否显示分页
    @Input() isShowPagiation: boolean = true;

    //是否显示统计
    @Input() isShowTotal: boolean = false;

    //分页大小
    @Input() pageSize: number = 10;

    //数据总数
    @Input() pageCount: number = 0;

    //下一页事件
    @Output() ongetPage = new EventEmitter<number>();

    //是否自己修改和修改事件
    @Input() IsOnUpdate: boolean = false;
    @Output() onUpdate = new EventEmitter<string>();

    //是否自已删除和删除事件
    @Input() IsOnDelete: boolean = false;
    @Output() onDelete = new EventEmitter<string>();

    //是否设置有效和事件
    @Input() IsOnIsValue: boolean = false;
    @Output() onIsValue = new EventEmitter<string>();

    //根据类型来处理的事件
    @Output() onSetInfo = new EventEmitter<IdType>();

    //统计处理的事件
    @Output() onLoadTotal = new EventEmitter<any>();

    //获取分页控件
    @ContentChild(PagiationComponent) Pagiation: PagiationComponent;


    //表格头部信息根据这信息来处理表格
    rowNameList: Array<{
        name: string, title: string,
        type: string, columnSpan: number, rowsetSpan: number
    }> = [];

    //分页行跨列
    pagiztionColSpan: number = 1;

    //操作处理
    operationList: Array<string> = [];

    moduleStr: TableStr;

    thead: TheadComponent;

    //分页数据条件
    conditionList: Array<Condition> = new Array<Condition>();

    //统计列表
    totalList: Array<{ name: string, title: string, total: number }>;
    //#endregion
    constructor(public elementRef: ElementRef,
        private router: Router, private apollo: Apollo) {
    }

    ngOnInit() {
        //获取操作事件
        let operation = this.elementRef.nativeElement.getAttribute("operation");
        if (operation) {
            this.operationList = operation.split("|");
        }
    }


    async getPage(pageIndex: number) {
        //分页方法
        this.ongetPage.emit(pageIndex);
        //统计方法
        this.onLoadTotal.emit(this.totalList);

        //如果是自动就加载
        if (this.IsAutomaticList) {
            var whereStr = this.getWhere();
            var pageInfo = await this.apollo.query({
                query: this.moduleStr.data,
                fetchPolicy: "network-only",
                variables: { index: pageIndex, size: this.pageSize, info: whereStr }
            }).toPromise<{ data: any }>();

            var { list, count = 1, total } = pageInfo.data;
            this.dataList = list.map(p => Object.assign({ ischeck: false }, p));
            this.pageCount = count;
            this.thead.dataList = this.dataList;
            this.findTotal(total);
        }
    }

    //查找统计
    private findTotal(total: any) {
        if(!total) return ;
        let keys = Object.keys(total);
        for (var i = 0, num = keys.length; i < num; i++) {
            var info = this.totalList[i];
            if (info && info.name == keys[i]) {
                var sum=total[info.name];
                info.total = sum?sum:0;
            }
        }

    }



    //获取查询条件
    private getWhere(): string {
        var whereStr = "";
        //对象的查询条件
        if (typeof this.moduleStr.where == "object") {
            whereStr = this.getObjWhere();
            whereStr = JSON.parse(whereStr);
        } else if (typeof this.moduleStr.where == "string") { //mysql条件
            whereStr = this.moduleStr.where ? this.moduleStr.where : " 1=1 ";
            whereStr = whereStr.replace("${where}", this.getStrWhere());
        }
        return whereStr;
    }

    //字符的查询条件
    private getStrWhere(): string {
        var where = [];
        this.conditionList.filter(p => p.value).forEach(p => {
            var value = this.getFindValue(p);
            where.push(`${p.field} ${p.condition} '${value}'`);
        });
        if (where.length > 0) {
            return where.join(" and ");
        }
        return " 1=1 ";
    }

    //获取对象的查询条件
    private getObjWhere(): string {
        var where = [];
        //如果查询不为组合
        this.conditionList.filter(p => p.value && !p.group).forEach(p => {
            var field = this.setObjWhereStr(p);
            where.push(field);
        })
        var keys = Object.keys(this.moduleStr.where);
        this.getObjGroupWhere(where);
        this.getInitWhere(where);
        var fileds = `${where.join(",")}`;
        if (keys.length > 0) {
            return `{${fileds}}`;
        }
        return "";
    }

    //对象分组查询的条件
    private getObjGroupWhere(where: Array<string>) {
        var groupList = this.conditionList.filter(p => p.value && p.group);
        var group = groupList.map(p => p.group);
        //去掉重复
        group = Array.from(new Set(group));
        group.forEach(str => {
            var filed = "";
            var list = groupList.filter(p => p.group == str);
            if (list.length == 2) {
                filed = this.setGroupObjWhereStr(str, list);
                where.push(filed);
            } else {//如果一组只有一个有值 
                var info = list[0];
                //单个要查询的字段为group的段
                info.field = str;

                filed = this.setObjWhereStr(info);
                where.push(filed);
            }
        })
    }

    //拼接组合条件字符串
    private setGroupObjWhereStr(str, list: Array<Condition>): string {
        var info1 = list[0];
        var info2 = list[1];
        var value1 = this.getFindValue(info1);
        var value2 = this.getFindValue(info2);
        var condition1 = info1.condition;
        var condition2 = info2.condition;
        var isString = typeof value1 == "string";
        value1 = isString ? `\\\"${value1}\\\"` : `${value1}`;
        value2 = isString ? `\\\"${value2}\\\"` : `${value2}`;
        //create:{"$gt": start, "$lt": end}
        var field = `"${str}":"{\\\"${condition1}\\\":${value1},\\\"${condition2}\\\":${value2}}"`;
        return field;
    }

    //拼接单个条件字符串
    private setObjWhereStr(info: Condition): string {
        var value = this.getFindValue(info);
        var isString = typeof value == "string";
        //如果是字符串类型条件后值加双引号
        value = isString ? `\\\"${value}\\\"` : `${value}`;
        var field = `"${info.field}":"{\\\"${info.condition}\\\":${value}}"`;
        return field;
    }


    //获取查询的值，根据类型做相应转换
    private getFindValue(info: Condition): string {
        var moment = require('moment');
        //时期转换为查询格式
        if (info.type == 'date' && (typeof info.value == "object")) {
            info.value = moment(info.value["value"]).format("YYYY-MM-DD");
        }
        return info.value;
    }

    //获取对象的初始化的查询条件
    private getInitWhere(where: Array<string>) {
        var values = Object.values(this.moduleStr.where);
        var subInfo = values[0];
        var subKeys = Object.keys(subInfo);
        for (var i = 0; i < subKeys.length; i++) {
            var field = `${subKeys[i]}:"${subInfo[subKeys[i]]}"`;
            where.push(field);
        }
    }

    //checkbox 事件设置当前这条数据是否选中
    onchecked(item: object, ischeck: boolean) {
        item["isCheck"] = ischeck;
    }

    //删除事件
    async delInfo(id: string) {
        if (confirm("是否真的要删除！")) {
            this.onDelete.emit(id);
            if (this.IsOnDelete) return;
            this.dataList = this.dataList.filter(val => val["id"] != id);
            this.pageCount = this.pageCount - 1;
            this.apollo.mutate({
                mutation: this.moduleStr.delete,
                variables: { id: id }
            }).subscribe(({ data }) => {
                alert(data ? "删除成功！" : "删除失败！");
            })
        }
    }

    //修改事件
    update(id: string) {
        this.onUpdate.emit(id);
        if (this.IsOnUpdate) return;
        this.router.navigate(['../' + this.moduleStr.url, id]);
    }

    //设置事件
    isValue(id: string) {
        this.onIsValue.emit(id);
        if (this.IsOnIsValue) return;

    }

    //根据类型来处理不同业务
    setInfo(info: IdType) {
        this.onSetInfo.emit(info);
    }

}