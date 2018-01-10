import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRoutes, AdminComponentList } from './admin/admin.routing';
import { LoginComponent,  } from './login.component';

var routes: Routes = [];

//登录
routes = routes.concat(AdminRoutes);

export var routeList: Routes = [
    {
        path: '', component: LoginComponent, data: { title: '登录' },
        children: routes
    }
];

@NgModule({
    imports: [RouterModule.forChild(routeList)],
    exports: [RouterModule]
})

export class LoginRoutingModule { }

//一定要将路由加载的模块导出到admin.module模块
export const ComponentList = [
    LoginComponent,
    AdminComponentList,
]

