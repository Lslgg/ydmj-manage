import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ScoreComponent} from './index';
import { ScoreListComponent } from './component/scoreList.component';
import { ScoreDetailComponent } from './component/scoreDetail.component';

export const ScoreRoutes: Routes = [
  { path: 'score', component: ScoreComponent, data: { title: '商家列表', module: 'score', power: "SHOW" } },
  { path: 'scoreList/:id', component: ScoreListComponent, data: { title: '积分统计', module: 'score', power: "SHOW" } },
  { path: 'scoreDetail/:id', component: ScoreDetailComponent, data: { title: '积分统计', module: 'score', power: "SHOW" } },
//   { path: 'addAdvert/:id', component: AddAdvertComponent, data: { title: '修改广告', module: 'advert', power: "UPDATE" } },  
];

//一定要将路由加载的模块导出到主模块
export const ScoreList = [
  ScoreComponent,    
  ScoreListComponent,
  ScoreDetailComponent
];

