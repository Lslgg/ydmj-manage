import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BusinessComponent, AddBusinessComponent} from './index';

export const BusinessRoutes: Routes = [
  { path: 'business', component: BusinessComponent, data: { title: '商家列表', module: 'business', power: "SHOW" } },
  { path: 'addBusiness', component: AddBusinessComponent, data: { title: '添加商家', module: 'business', power: "ADD" } },
  { path: 'addBusiness/:id', component: AddBusinessComponent, data: { title: '修改商家', module: 'business', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const BusinessList = [
    BusinessComponent,    
    AddBusinessComponent
];

