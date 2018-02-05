import { Routes } from '@angular/router';

import { UserRoutes, UserList } from './user/user.routing';
import { RoleRoutes, RoleList } from './role/role.routing';
import { MenuRoutes, MenuList } from './menu/menu.routing';
import { PowerRoutes, PowerList } from './power/power.routing';

export var systemRoutes:Routes=[
    ...UserRoutes,
    ...RoleRoutes,
    ...MenuRoutes,
    ...PowerRoutes,
];

//一定要将路由加载的模块导出到admin.module模块
export const SystemList = [
    UserList,
    RoleList,
    MenuList,
    PowerList,
]
