import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MainCardComponent } from './component/ManinCard.component';

export const MainRoutes: Routes = [
   { path: '', component: MainComponent, data: { title: '主页', module: 'notPower', power: "SHOW" } },
   { path: 'main', component: MainComponent, data: { title: '主页', module: 'notPower', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const MainComponentList = [
    MainComponent,
    MainCardComponent
];
