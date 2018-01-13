import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GoodsTypeComponent} from './index';

export const GoodsTypeRoutes: Routes = [
  { path: 'goods-type', component: GoodsTypeComponent, data: { title: '商品类别列表', module: 'goods-type', power: "SHOW" } },
//   { path: 'addAdvert', component: AddAdvertComponent, data: { title: '添加广告', module: 'advert', power: "ADD" } },
//   { path: 'addAdvert/:id', component: AddAdvertComponent, data: { title: '修改广告', module: 'advert', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const GoodsTypeList = [
  GoodsTypeComponent,    
];

