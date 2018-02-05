import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerRoutes, PlayerList } from './player/player.routing';
import { CardLogRoutes, CardLogList } from './cardLog/cardLog.routing';
import { DealerRoutes, DealerList } from './dealer/dealer.routing';
import { AdvertRoutes, AdvertList } from './advert/advert.routing';
import { SettingRoutes, SettingList } from './setting/setting.routing';
import { OrderRoutes, OrderList } from './order/order.routing';


var routes:Routes=[
    ...PlayerRoutes,
    ...CardLogRoutes,
    ...DealerRoutes,
    ...AdvertRoutes,
    ...SettingRoutes,
    ...OrderRoutes,
];

export var GameRoutes: Routes =routes;

//一定要将路由加载的模块导出到admin.module模块
export const GameList = [
    PlayerList, 
    CardLogList,
    DealerList,
    AdvertList,
    SettingList,
    OrderList,
]


