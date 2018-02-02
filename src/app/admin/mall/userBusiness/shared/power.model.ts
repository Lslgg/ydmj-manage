export class Power{
    public id:string;
    public code:string;
    public url:string;
    public title:string;
    public explain:string;
    public menuId:string;
    public type:string;
    public isValid:boolean;
    public isCheck:boolean;  
    public operation:Array<Operation>=new Array<Operation>();
    public list:Array<string>=new Array<string>();

    public static operationMap():Map<string,string>{
        var operatinMap=new Map<string,string>();
        operatinMap.set("SHOW","查看");
        operatinMap.set("ADD","添加");
        operatinMap.set("UPDATE","修改");
        operatinMap.set("DELETE","删除");
        operatinMap.set("CHECK", "审核");
        return operatinMap;
    }
}



export enum Operation{
    SHOW="SHOW",
	ADD="ADD",
	UPDATE="UPDATE",
	DELETE="DELETE"
}

export class RolePower extends Power{
    public roleId:string;
}

export class NavMenu{
    public id:string;
    public code:string;
    public url:string;
    public isValid:boolean=true;
    public isLeaf:boolean=false;
    public title:string;
    public isChecked:boolean=false;
}

export class PowerFun{
    public isSHOW:boolean;
    public isADD:boolean;
    public isUPDATE:boolean;
    public isDELETE:boolean;
    public isCHECK:boolean;
}

export class RoleInfo{
    public id:string;
    public roleName:string;
    public name:string;
    public desc:string;
}

export class Tree{
    public id:string;
    public pid:string;
    public name:string;
    public isLeaf:boolean;
    public IsSubMenu:boolean;
    public subTrees:Array<Tree>=[];
    constructor(id:string,pid:string,name:string,isLeaf:boolean){
        this.id=id;
        this.pid=pid;
        this.name=name;
        this.isLeaf=isLeaf;
    }
}