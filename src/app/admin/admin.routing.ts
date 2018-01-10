import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/server/auth-guard.service';

import { AdminComponent } from './admin.component';
import { HeaderComponent,SideNavComponent } from './layouts';
import { MainRoutes,MainComponentList } from './main/main.routing';
import { NotFindPageRoutes, NotFindPageComponentList } from '../component/404/notFindPage.routing';
import { systemRoutes,SystemList } from './system/system.routing';
import { GameRoutes,GameList } from './game/game.routing';


var routes:Routes=[];
//首页
routes = routes.concat(MainRoutes);
//系统管理
routes=routes.concat(systemRoutes);
//游戏栏目管理
routes=routes.concat(GameRoutes);
//错误页面请放最后
routes = routes.concat(NotFindPageRoutes);

export var routeList: Routes = [
  {
    path: '',canActivateChild: [AuthGuard],
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
    GameList
]
