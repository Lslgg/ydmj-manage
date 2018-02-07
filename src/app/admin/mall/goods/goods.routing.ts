import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GoodsComponent} from './index';
import { AddGoodsComponent } from './component/addGoods.component';

export const GoodsRoutes: Routes = [
  { path: 'goods', component: GoodsComponent, data: { title: '商品列表', module: 'goods', power: "SHOW" } },
  { path: 'addGoods', component: AddGoodsComponent, data: { title: '添加商品', module: 'goods', power: "ADD" } },
//   { path: 'addAdvert/:id', component: AddAdvertComponent, data: { title: '修改广告', module: 'advert', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const GoodsList = [
  GoodsComponent,    
  AddGoodsComponent
];

