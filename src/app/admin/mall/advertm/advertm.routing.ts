import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AdvertmComponent, AddAdvertmComponent } from './index';


export const AdvertmRoutes: Routes = [
  { path: 'advertm', component: AdvertmComponent, data: { title: '广告列表', module: 'advertm', power: "SHOW" } },
  { path: 'addAdvertm', component: AddAdvertmComponent, data: { title: '添加广告', module: 'advertm', power: "ADD" } },
  { path: 'addAdvertm/:id', component: AddAdvertmComponent, data: { title: '修改广告', module: 'advertm', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const AdvertmList = [
  AdvertmComponent,   
  AddAdvertmComponent,
];

