import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tree } from "../../shared/tree.modle";

@Component({
    selector: 'tree-item',
    styleUrls: ["../tree.css"],
    templateUrl: 'treeItem.html',
})

export class TreeItemComponent implements OnInit {

    @Input() tree: Tree;

    @Input() treeList: Array<Tree> = [];

    @Input() isOperation:boolean=false;

    @Output() onDeleteTree = new EventEmitter<object>();

    @Output() onGetSubTree = new EventEmitter<Tree>();

    @Output() onAddTree = new EventEmitter<string>();

    @Output() onUpdateTree = new EventEmitter<{id:string,name:string}>();

    constructor() {

    }

    ngOnInit() {

    }

    //下面方法因为控件自己调用了自己，然后要传出去自己的方法，所以同一方法写了两次
    getSelfSubTree(tree: Tree) {
        this.onGetSubTree.emit(tree);
    }

    addSelfTree(id: string) {
        this.onAddTree.emit(id);
    }

    updateSelfTree(id: string, name: string) {
        this.onUpdateTree.emit({id:id,name:name})
    }

    deleteSelfTree(id: string, pid: string) {
        this.onDeleteTree.emit({ id: id, pid: pid });
    }

    getSubList(tree: Tree) {
        this.onGetSubTree.emit(tree);
    }

    addTree(id:string) {
        this.onAddTree.emit(id);
    }

    updateTree(idName:{id:string,name: string}) {
        this.onUpdateTree.emit(idName)
    }

    deleteTree(info: { id: string, pid: string }) {
        this.onDeleteTree.emit(info);
    }

}