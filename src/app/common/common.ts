export class CommonData implements CommonData {

    startDate: String;

    endDate: String;

    moment = require('moment');

    constructor() {
       this.setDate();
    }

    private setDate(){
        
        //日期第一天
        var start = new Date();
        start.setDate(1);
        this.startDate = this.moment(start).format("YYYY-MM-DD");

        //日期第一天
        var enddate = new Date();
        //月份移至下月份
        enddate.setMonth(enddate.getMonth() + 1);
        //下个月份的第一天
        enddate.setDate(1);
        //日期-1当月的最后一天
        enddate.setDate(enddate.getDate() - 1);
        this.endDate = this.moment(enddate).format("YYYY-MM-DD");
    }

    /**
     * 日期格式
     * @param date 日期 默认今天
     * @param format 格式 默认 'YYYY-MM-DD' 
     */
    public toDateFormat(date:Date=new Date(),format:string="YYYY-MM-DD"){
        return this.moment(date).format(format);
    }
}