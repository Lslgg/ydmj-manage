import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { OrderComponent } from './order.component';

export const OrderRoutes: Routes = [
  { path: 'order', component: OrderComponent, data: { title: '订单管理', module: 'Order', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const OrderList = [
    OrderComponent,
];

