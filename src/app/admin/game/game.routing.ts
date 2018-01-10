import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerRoutes, PlayerList } from './player/player.routing';
import { CardLogRoutes, CardLogList } from './cardLog/cardLog.routing';
import { DealerRoutes, DealerList } from './dealer/dealer.routing';
import { AdvertRoutes, AdvertList } from './advert/advert.routing';
import { SettingRoutes, SettingList } from './setting/setting.routing';
import { OrderRoutes, OrderList } from './order/order.routing';


var routes:Routes=[];
//玩家充值管理
routes = routes.concat(PlayerRoutes);
//房卡管理
routes = routes.concat(CardLogRoutes);
//系统管理
routes = routes.concat(DealerRoutes);
//广告管理
routes = routes.concat(AdvertRoutes);
//游戏设置
routes = routes.concat(SettingRoutes);
//游戏设置
routes = routes.concat(OrderRoutes);

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


