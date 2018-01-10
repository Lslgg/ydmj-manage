import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { CardLogComponent } from './cardLog.component';

export const CardLogRoutes: Routes = [
  { path: 'cardLog', component: CardLogComponent, data: { title: '房卡日志', module: 'cardLog', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const CardLogList = [
  CardLogComponent
];

