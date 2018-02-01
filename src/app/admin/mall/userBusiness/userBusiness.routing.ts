import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { UserBusinessComponent} from './index';

export const UserBusinessRoutes: Routes = [
  { path: 'ubusiness', component: UserBusinessComponent, data: { title: '用户商家列表', module: 'ubusiness', power: "SHOW" } },
//   { path: 'addAdvert', component: AddAdvertComponent, data: { title: '添加广告', module: 'advert', power: "ADD" } },
//   { path: 'addAdvert/:id', component: AddAdvertComponent, data: { title: '修改广告', module: 'advert', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const UserBusinessList = [
  UserBusinessComponent,    
];

