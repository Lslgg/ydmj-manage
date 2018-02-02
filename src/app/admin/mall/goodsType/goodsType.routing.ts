import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { GoodsTypeComponent, AddGoodsTypeComponent} from './index';

export const GoodsTypeRoutes: Routes = [
  { path: 'goods-type', component: GoodsTypeComponent, data: { title: '商品类别列表', module: 'goods-type', power: "SHOW" } },
  { path: 'add-goods-type', component: AddGoodsTypeComponent, data: { title: '添加商品类别', module: 'goods-type', power: "ADD" } },
  { path: 'add-goods-type/:id', component: AddGoodsTypeComponent, data: { title: '修改商品类别', module: 'goods-type', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const GoodsTypeList = [
  GoodsTypeComponent,    
  AddGoodsTypeComponent
];

