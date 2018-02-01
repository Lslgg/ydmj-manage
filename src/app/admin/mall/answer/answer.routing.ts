import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AddAnswerComponent, AnswerComponent } from './index';

export const AnswerRoutes: Routes = [
  { path: 'answer', component: AnswerComponent, data: { title: '问答列表', module: 'answer', power: "SHOW" } },
  { path: 'addAnswer', component: AddAnswerComponent, data: { title: '添加问答', module: 'answer', power: "ADD" } },
  { path: 'addAnswer/:id', component: AddAnswerComponent, data: { title: '修改问答', module: 'answer', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const AnswerList = [
  AnswerComponent,    
  AddAnswerComponent
];

