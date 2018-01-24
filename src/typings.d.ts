/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}
declare var tinymce: any;

declare function escape(s: string): string;

declare var System: any;

declare var Parse: any;

type Tclass<T> = { new(): T };

type Condition = {
    field: string,
    value: any,
    condition: string,
    type: string,
    group: string
}

type TableStr = {
    data: string,
    delete?: string,
    url?: string,
    where?: string | object,
    isPage?: boolean,
}

type FormStr = {
    data: string,
    module?: string,
    save?: string,
    url?: string
}

//Output事件参数
type IdType = { id: string, type: string };

/**
 * 公共的数据
 */
interface CommonData{
    /**
     * 当前月开始日期
     */
    startDate: string;
    
    /**
     * 当前月结束日期
    */
    endDate: string;

     /**
     * 日期格式
     * @param date 日期
     * @param format 格式 默认 'YYYY-MM-DD' 
     */
    toDateFormat(date?:Date,format?:string);
}

