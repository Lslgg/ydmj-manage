import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessRoutes, BusinessList } from './business/business.routing';
import { AdvertmList, AdvertmRoutes } from './advertm/advertm.routing';
import { AnswerRoutes, AnswerList } from './answer/answer.routing';
import { GoodsRoutes, GoodsList } from './goods/goods.routing';
import { GoodsTypeList, GoodsTypeRoutes } from './goodsType/goodsType.routing';
import { ScoreList, ScoreRoutes } from './score/score.routing';
import { UserBusinessRoutes, UserBusinessList } from './userBusiness/userBusiness.routing';
import { TransactRoutes, TransactList } from './transact/transact.routing';



var routes: Routes = [
    ...BusinessRoutes,
    ...AdvertmRoutes,
    ...AnswerRoutes,
    ...GoodsRoutes,
    ...GoodsTypeRoutes,
    ...ScoreRoutes,
    ...UserBusinessRoutes,
    ...TransactRoutes,

];

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
    TransactList,
]


