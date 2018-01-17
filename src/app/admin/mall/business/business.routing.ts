import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BusinessComponent} from './index';

export const BusinessRoutes: Routes = [
  { path: 'business', component: BusinessComponent, data: { title: '商家列表', module: 'business', power: "SHOW" } },
//   { path: 'addAdvert', component: AddAdvertComponent, data: { title: '添加广告', module: 'advert', power: "ADD" } },
//   { path: 'addAdvert/:id', component: AddAdvertComponent, data: { title: '修改广告', module: 'advert', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const BusinessList = [
    BusinessComponent,    
];

