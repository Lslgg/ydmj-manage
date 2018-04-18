import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/server/auth-guard.service';

import { AdminComponent } from './admin.component';
import { HeaderComponent, SideNavComponent } from './layouts';
import { MainRoutes, MainComponentList } from './main/main.routing';
import { NotFindPageRoutes, NotFindPageComponentList } from '../component/404/notFindPage.routing';
import { systemRoutes, SystemList } from './system/system.routing';
import { GameRoutes, GameList } from './game/game.routing';
import { MallRoutes, MallList } from './mall/mall.routing';


var routes: Routes = [
  ...MainRoutes,
  ...systemRoutes,
  ...GameRoutes,
  ...MallRoutes,
  ...NotFindPageRoutes,
];

export var routeList: Routes = [
  {
    path: '', canActivateChild: [AuthGuard],
    component: AdminComponent, data: { title: '后台管理' },
    children: routes
  }
];


@NgModule({
  imports: [RouterModule.forChild(routeList)],
  exports: [RouterModule]
})


export class AdminRoutingModule { }

//一定要将路由加载的模块导出到admin.module模块
export const ComponentList = [
  HeaderComponent,
  SideNavComponent,
  AdminComponent,
  MainComponentList,
  NotFindPageComponentList,
  SystemList,
  GameList,
  MallList,
]
