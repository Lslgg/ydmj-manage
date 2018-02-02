import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessRoutes, BusinessList } from './business/business.routing';
import { AdvertmList, AdvertmRoutes } from './advertm/advertm.routing';
import { AnswerRoutes, AnswerList } from './answer/answer.routing';
import { GoodsRoutes, GoodsList } from './goods/goods.routing';
import { GoodsTypeList, GoodsTypeRoutes } from './goodsType/goodsType.routing';
import { ScoreList, ScoreRoutes } from './score/score.routing';
import { UserBusinessRoutes, UserBusinessList } from './userBusiness/userBusiness.routing';



var routes: Routes = [];
//商家管理
routes = routes.concat(BusinessRoutes);
//广告管理
routes = routes.concat(AdvertmRoutes);
//问答管理
routes = routes.concat(AnswerRoutes);
//商品管理
routes = routes.concat(GoodsRoutes);
//商品类别管理
routes = routes.concat(GoodsTypeRoutes);
//积分统计管理
routes = routes.concat(ScoreRoutes);
//商家用户管理
routes = routes.concat(UserBusinessRoutes);


export var MallRoutes: Routes = routes;

//一定要将路由加载的模块导出到admin.module模块
export const MallList = [
    BusinessList,
    AdvertmList,
    AnswerList,
    GoodsList,
    GoodsTypeList,
    ScoreList,
    UserBusinessList,
]


