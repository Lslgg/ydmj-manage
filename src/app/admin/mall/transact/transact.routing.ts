import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TransactComponent } from './transact.component';

export const TransactRoutes: Routes = [
  { path: 'transact', component: TransactComponent, data: { title: '积分兑换', module: 'transact', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const TransactList = [
  TransactComponent
];

