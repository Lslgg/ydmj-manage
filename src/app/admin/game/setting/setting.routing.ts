import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SettingComponent } from './setting.component';

export const SettingRoutes: Routes = [
   { path: 'setting', component: SettingComponent, data: { title: '系统设置', module: 'setting', power: "SHOW" } },
];

//一定要将路由加载的模块导出到主模块
export const SettingList = [
    SettingComponent,
];

