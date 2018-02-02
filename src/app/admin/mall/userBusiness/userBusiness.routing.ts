import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AddUserBusinessComponent } from './addUserBusiness.component';

export const UserBusinessRoutes: Routes = [
  { path: 'userBusiness', component: AddUserBusinessComponent, data: { title: '添加用户商家列表', module: 'userBusiness', power: "ADD" } },
];

//一定要将路由加载的模块导出到主模块
export const UserBusinessList = [
  AddUserBusinessComponent
];

