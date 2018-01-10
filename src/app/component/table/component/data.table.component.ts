import {
    Component, OnInit, Input, ContentChild, ElementRef,
    AfterViewInit, Output, EventEmitter, QueryList, ContentChildren
} from '@angular/core';
import { TheadComponent } from './thead.component';
import { TbodyComponent } from './tbody/tbody.component';
import { SearchComponent } from './search/search.component';


@Component({
    selector: 'data-table',
    styleUrls: ['./table.css'],
    templateUrl: 'data.table.html'

})

export class DataTableComponent implements OnInit {

    @Input() moduleStr: TableStr;

    @Input() isSearch: boolean = true;

    @Output() onSearch = new EventEmitter<object>();

    @ContentChildren(SearchComponent) searchList: QueryList<SearchComponent>

    @ContentChild(TheadComponent) thead: TheadComponent;

    @ContentChild(TbodyComponent) tbody: TbodyComponent;

    constructor() {

    }

    //内容初始化完，加载查询
    ngAfterContentInit() {
        this.tbody.conditionList = this.getCondition();
        this.tbody.rowNameList = this.thead.rowList;
        this.tbody.thead = this.thead;
        var colNum = this.thead.rowList.length;
        this.tbody.pagiztionColSpan = colNum;
        var totals = this.thead.rowList.filter(p => p.type == "total");
        this.tbody.totalList = totals.map(p => {
            return { name: p.name, title: p.title, total: 0 }
        });

        this.tbody.getPage(1);
    }

    ngOnInit() {
        this.tbody.moduleStr = this.moduleStr;
    }


    //根据条件查询
    search() {
        var list= this.getCondition();
        this.tbody.conditionList =list;
        if (this.tbody.IsAutomaticList) {
            this.tbody.getPage(1);
        }
        this.onSearch.emit(list);
    }

    //获取查询条件
    getCondition(): Array<Condition> {
        return this.searchList.filter(p => p.nowValue).map(p => {
            return {
                field: p.name,
                value: p.nowValue,
                condition: p.condition,
                type: p.type,
                group: p.group
            }
        })
    }

}
