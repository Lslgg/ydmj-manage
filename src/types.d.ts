/* tslint:disable */

/* 日期类型 */
export type Date = any;

/* Json字符串转换为对象 */
export type Json = any;

/* 正则表达式类型，用于正则查询！ */
export type RegExp = any;

/* The &#x60;Upload&#x60; scalar type represents a file upload promise that resolves an object containing &#x60;stream&#x60;, &#x60;filename&#x60;, &#x60;mimetype&#x60; and &#x60;encoding&#x60;. */
export type Upload = any;

/* &#x60;Mongodb Comparison 查询 &#x60; scalar字段(不加$) 语法: 等于 {eq:&quot;admin&quot;}in查询 {in:[1.,2,3]}小于 {lt:10}小于等于 {lte:10} | 大于 {gt:10}大于等于 {gte:10}between {lte:1,gte:10}     参考:https://docs.mongodb.com */
export type Comparison = any;
/* 查询 */
export interface Query {
  dummy?: boolean | null;
  getUsers?: User[] | null /* 查找所有用户 */;
  getUserById?: User | null /* 根据ID查找用户 */;
  getUserPage?: User[] | null /* 分页查找 */;
  getUserCount?: number | null /* 查找分页总数 */;
  getUserWhere?: User[] | null /* 根据条件查找 */;
  login?: User | null /* 用户登录 */;
  logOut?: boolean | null /* 用户退出 */;
  currentUser?: User | null /* 当前登录用户 */;
  getCurrentMenu?: MenuTree[] | null /* 当前用户菜单列表 */;
  getRoles?: Role[] | null /* 查找所有角色 */;
  getRoleById?: Role | null /* 根据ID查找角色 */;
  getRolePage?: Role[] | null /* 分页查找角色 */;
  getRoleCount?: number | null /* 查找分页角色总数 */;
  getRoleWhere?: Role[] | null /* 根据条件查找角色 */;
  getMenus?: Menu[] | null /* 查找所有菜单 */;
  getMenuById?: Menu | null /* 根据ID查找菜单 */;
  getMenuPage?: Menu[] | null /* 分页查找菜单 */;
  getMenuCount?: number | null /* 根据条件查找菜单总数 */;
  getMenuWhere?: Menu[] | null /* 根据条件查找菜单 */;
  getPowers?: Power[] | null /* 查找所有权限 */;
  getPowerById?: Power | null /* 根据ID查找权限 */;
  getPowerPage?: Power[] | null /* 分页查找权限 */;
  getPowerCount?: number | null /* 根据条件查找权限总数 */;
  getPowerWhere?: Power[] | null /* 根据条件查找权限 */;
  getProfiles?: Profile[] | null /* 查找所有用户资料 */;
  getProfileById?: Profile | null /* 根据ID查找用户资料 */;
  getProfilePage?: Profile[] | null /* 分页查找用户资料 */;
  getProfileCount?: number | null /* 查找分页用户资料总数 */;
  getProfileWhere?: Profile[] | null /* 根据条件查找用户资料 */;
  getProfileAggregate?: Json | null /* 聚合查询 */;
  images?: File[] | null;
  getAdverts?: Advert[] | null /* 查找所有权限 */;
  getAdvertById?: Advert | null /* 根据ID查找权限 */;
  getAdvertPage?: Advert[] | null /* 分页查找权限 */;
  getAdvertCount?: number | null /* 根据条件查找权限总数 */;
  getAdvertWhere?: Advert[] | null /* 根据条件查找权限 */;
  getPlayers?: Player[] | null /* 查找所有玩家 */;
  getPlayerById?: Player | null /* 根据ID查找玩家 */;
  getPlayerPage?: Player[] | null /* 分页查找玩家 */;
  getPlayerCount?: number | null /* 查找分页玩家总数 */;
  getPlayerWhere?: Player[] | null /* 根据条件查找 */;
  getCardLogs?: CardLog[] | null /* 查找所有房卡日志 */;
  getCardLogPage?: CardLog[] | null /* 分页查找房卡日志 */;
  getCardLogCount?: number | null /* 查找房卡日志分页总数 */;
  getCardLogWhere?: CardLog[] | null /* 根据条件查找房卡日志 */;
  getDealers?: Dealer[] | null /* 查找所有群主 */;
  getDealerById?: Dealer | null /* 根据ID查找群主 */;
  getDealerPage?: Dealer[] | null /* 分页查找 */;
  getDealerCount?: number | null /* 查找分页群主总数 */;
  getDealerWhere?: Dealer[] | null /* 根据条件查找群主 */;
  getVersionById?: Version | null /* 查找版本设置 */;
  getNewsById?: News | null /* 查找公告信息 */;
  getNoticeById?: Notice | null /* 查找走门灯信息 */;
  getTipById?: Tip | null /* 查找微信提示|否免费房卡 */;
  getOrderPage?: Order[] | null /* 分页查找玩家 */;
  getOrderCount?: number | null /* 查找分页玩家总数 */;
  getOrderCardCost?: OrderCardCost | null /* 根据用户统计房卡数和消费金额 */;
  getCardRecordPage?: CardRecord[] | null /* 分页查找房卡记录 */;
  getCardRecordCount?: number | null /* 查找分页查找房卡记录总数 */;
  getCardRecordWhere?: CardRecord[] | null /* 根据条件查找房卡记录 */;
  getCardRecordStatistice?: number | null /* 统计当天房卡记录 */;
  getBusiness?: Business[] | null /* 查找所有商家 */;
  getBusinessById?: Business | null /* 根据ID查找问答 */;
  getBusinessPage?: Business[] | null /* 分页查找 */;
  getBusinessCount?: number | null /* 查找分页总数 */;
  getBusinessWhere?: Business[] | null /* 根据条件查找 */;
  getGoodsType?: GoodsType[] | null /* 查询所有类别 */;
  getGoodsTypeById?: GoodsType | null /* 根据ID查找问答 */;
  getGoodsTypePage?: GoodsType[] | null /* 分页查找 */;
  getGoodsTypeCount?: number | null /* 查找分页总数 */;
  getGoodsTypeWhere?: GoodsType[] | null /* 根据条件查找 */;
  getGoods?: Goods[] | null /* 查询所有商品 */;
  getGoodsById?: Goods | null /* 根据ID查找问答 */;
  getGoodsPage?: Goods[] | null /* 分页查找 */;
  getGoodsCount?: number | null /* 查找分页总数 */;
  getGoodsWhere?: Goods[] | null /* 根据条件查找 */;
  getTransaction?: Transaction[] | null /* 查询所有 */;
  getTransactionById?: Transaction | null /* 根据ID查找问答 */;
  getTransactionPage?: Transaction[] | null /* 分页查找 */;
  getTransactionCount?: number | null /* 查找分页总数 */;
  getTransactionWhere?: Transaction[] | null /* 根据条件查找 */;
  getAnswer?: Answer[] | null /* 查询所有问答 */;
  getAnswerById?: Answer | null /* 根据ID查找问答 */;
  getAnswerPage?: Answer[] | null /* 分页查找 */;
  getAnswerCount?: number | null /* 查找分页总数 */;
  getAnswerWhere?: Answer[] | null /* 根据条件查找 */;
  getAdvertm?: Advertm[] | null /* 查询所有广告 */;
  getAdvertmById?: Advertm | null /* 根据ID查找广告 */;
  getAdvertmPage?: Advertm[] | null /* 分页查找 */;
  getAdvertmCount?: number | null /* 查找分页总数 */;
  getAdvertmWhere?: Advertm[] | null /* 根据条件查找 */;
}
/* 系统用户表 */
export interface User {
  id: string;
  username?: string | null /* 用户登录名 */;
  name?: string | null /* 姓名 */;
  email?: string | null /* 邮件 */;
  password?: string | null /* 密码 */;
  createAt?: Date | null /* 创建时间 */;
  updateAt?: Date | null /* 修改时间 */;
  Role?: Role | null /* 用户角色 */;
  isValid?: boolean | null /* 是否有效 */;
  Profile?: Profile | null /* 用户资料 */;
}
/* 系统角色表 */
export interface Role {
  id: string;
  roleName?: string | null /* 角色名 */;
  desc?: string | null /* 说明 */;
  code?: string | null;
  isValid?: boolean | null /* 是否用效 */;
  createAt?: Date | null /* 创建时期 */;
  updateAt?: Date | null /* 修改时期 */;
  Powers?: Power[] | null /* 权限 */;
}
/* 系统权限表 */
export interface Power {
  id?: string | null;
  title?: string | null /* 标题 */;
  operation?: Operation[] | null /* 操作权限 */;
  code?: string | null;
  url?: string | null;
  explain?: string | null;
  type?: string | null;
  menuId?: string | null;
  Menu?: Menu | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 系统菜单表 */
export interface Menu {
  id?: string | null;
  title?: string | null /* 标题 */;
  menuImg?: string | null /* 图标ico */;
  isLeaf?: boolean | null /* 是否子节点 */;
  pid?: string | null;
  code?: string | null;
  url?: string | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 用户资料 */
export interface Profile {
  id?: string | null;
  phone?: string | null;
  address?: string | null;
  card?: number | null;
  userId?: string | null;
  createAt?: Date | null;
  updateAt?: Date | null;
}

export interface MenuTree {
  Menu?: Menu | null;
  MenuList?: MenuTree[] | null;
}
/* 文件表 */
export interface File {
  id: string;
  path: string;
  originalname: string;
  filename: string;
  mimetype: string;
  encoding: string;
}
/* 广告管理表 */
export interface Advert {
  id?: string | null;
  title?: string | null /* 标题 */;
  Images?: File[] | null /* 广告图片 */;
  startDate?: Date | null /* 活动开始时间 */;
  endDate?: Date | null /* 活动对结束时间 */;
  explain?: string | null /* 说明String */;
  activity?: number | null /* 活动状态 */;
  type?: string | null /* 活动类型 */;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 玩家用户表 */
export interface Player {
  id: string;
  weixin?: string | null /* 微信ID */;
  deviceMac?: string | null;
  name?: string | null /* 微信名 */;
  forbid?: boolean | null;
  image?: string | null /* 微信头像 */;
  sex?: number | null;
  state?: number | null;
  cardNum?: number | null /* 房卡数量 */;
  lastLoginTime?: Date | null /* 最后登录时间 */;
  lastLoginIp?: string | null /* 登录IP地址 */;
  updateTime?: Date | null;
  createTime?: Date | null;
  deleteTime?: Date | null;
  platform?: string | null;
  appVersion?: string | null;
  resourceVersion?: string | null;
  code?: string | null /* 群主ID */;
}
/* 后台添加的房卡日志 */
export interface CardLog {
  id: string;
  userName?: string | null /* 用户 */;
  playName?: string | null /* 玩家名 */;
  card?: number | null /* 房卡数量 */;
  type?: string | null /* 加房卡|减房卡 */;
  createAt?: Date | null /* 创建时间 */;
  updateAt?: Date | null /* 修改时间 */;
}

export interface Dealer {
  id: string;
  account?: string | null;
  openid?: string | null;
  password?: string | null;
  name?: string | null;
  create_time?: number | null;
  token?: string | null;
  last_login_time?: number | null;
  privilege_level?: number | null;
  level?: number | null;
  card?: number | null;
  gift_card?: number | null;
  wx?: string | null;
  code?: string | null;
  is_del?: number | null;
  is_allow?: number | null;
}
/* 版本设置 */
export interface Version {
  id: string;
  iOSUrl?: string | null;
  iOSVersion?: string | null;
  androidUrl?: string | null;
  androidVersion?: string | null;
  updateTime?: number | null;
  createTime?: number | null;
  deleteTime?: number | null;
}
/* 公告信息 */
export interface News {
  id: string;
  content?: string | null;
  updateTime?: number | null;
  createTime?: number | null;
  deleteTime?: number | null;
}
/* 走门灯信息 */
export interface Notice {
  id: string;
  content?: string | null;
  updateTime?: number | null;
  createTime?: number | null;
  deleteTime?: number | null;
}
/* 微信提示是|否免费房卡 */
export interface Tip {
  id: string;
  content?: string | null;
  free?: boolean | null;
  ifcheck?: boolean | null;
  updateTime?: number | null;
  createTime?: number | null;
  deleteTime?: number | null;
  iOSCharge?: boolean | null;
}
/* 充值订单表 */
export interface Order {
  id: string;
  userId?: string | null;
  name?: string | null;
  dealerId?: string | null;
  dealerName?: string | null;
  card?: number | null;
  cost?: number | null;
  createTime?: Date | null;
}

export interface OrderCardCost {
  count?: number | null;
  card?: number | null;
  cost?: number | null;
}
/* 房卡记录 */
export interface CardRecord {
  id?: string | null;
  userId?: string | null;
  userName?: string | null /* 玩家 */;
  dealerId?: string | null;
  dealerName?: string | null /* 群主 */;
  changeNum?: string | null /* 房卡数量 */;
  reason?: string | null /* 类型 */;
  createTime?: number | null;
}
/* 商家 */
export interface Business {
  id?: string | null;
  name?: string | null;
  phone_num?: string | null;
  address?: string | null;
  b_hours?: string | null;
  brief?: string | null;
  score?: number | null;
  Images?: File[] | null;
  trans_times?: number | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 商品类别 */
export interface GoodsType {
  id?: string | null;
  name?: string | null;
  Business?: Business | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 商品 */
export interface Goods {
  id?: string | null;
  name?: string | null;
  cost_score?: number | null;
  rule?: string | null;
  explain?: string | null;
  count?: number | null;
  trans_times?: number | null;
  goods_type?: string | null;
  imageSrc?: string | null;
  stock?: number | null;
  limit?: number | null;
  Business?: Business | null;
  GoodsType?: GoodsType | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 积分统计 */
export interface Transaction {
  id?: string | null;
  trade_code?: string | null;
  Goods?: Goods | null;
  Business?: Business | null;
  User?: User | null;
  user_name?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  complete_time?: Date | null;
  state?: boolean | null;
  t_code?: string | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 问答 */
export interface Answer {
  id?: string | null;
  name?: string | null;
  type?: string | null;
  content?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 广告 */
export interface Advertm {
  id?: string | null;
  title?: string | null;
  type?: string | null;
  link?: string | null;
  Images?: File[] | null;
  explain?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}
/* 变更 */
export interface Mutation {
  dummy?: boolean | null;
  saveUser?: User | null /* 创建用户|修改用户 */;
  deleteUser?: boolean | null /* 删除用户 */;
  saveRole?: Role | null /* 创建角色|修改角色 */;
  deleteRole?: boolean | null /* 删除角色 */;
  addRolePower?: Role | null /* 添加角色权限 */;
  delPowerbyRoleId?: boolean | null /* 根据角色删除角色权限 */;
  delPowerbyId?: boolean | null /* 根据角色权限管理表ID删除权限 */;
  delAllPowerbyId?: boolean | null /* 根据角色权限管理表权限Id批量删除权限 */;
  addAllRolePower?: Role | null /* 批量添加角色权限 */;
  saveMenu?: Menu | null /* 创建菜单|修改菜单 */;
  updateMenu?: Menu | null;
  deleteMenu?: boolean | null /* 删除菜单 */;
  savePower?: Power | null /* 创建权限|修改权限 */;
  deletePower?: boolean | null /* 删除权限 */;
  addAllPower?: Power[] | null /* 批量添加权限 */;
  delAllPower?: boolean | null /* 批量根据条件删除 */;
  saveProfile?: Profile | null /* 创建用户资料|修改用户资料 */;
  deleteProfile?: boolean | null /* 删除用户资料 */;
  singleUpload: File /* 单个文件上传 */;
  multipleUpload: File[] /* 多个文件上传 */;
  deleFile?: boolean | null /* 删除文件 */;
  saveAdvert?: Advert | null /* 创建活动|修改活动 */;
  deleteAdvert?: boolean | null /* 删除活动 */;
  updatePlayerCard?: boolean | null /* 修改用户房卡 */;
  saveCardLog?: CardLog | null /* 添加房卡日志 */;
  deleteCardLog?: boolean | null /* 删除房卡日志 */;
  saveDealer?: Dealer | null /* 创建群主|修改群主 */;
  deleteDealer?: boolean | null /* 删除群主 */;
  updateVersion?: Version | null /* 修改版本设置 */;
  updateNews?: News | null /* 修改公告信息 */;
  updateNotice?: Notice | null /* 修改走门灯信息 */;
  updateTip?: Tip | null /* 修改微信提示|否免费房卡 */;
  saveBusiness?: Business | null /* 添加修改商家 */;
  deleteBusiness?: boolean | null /* 删除商家 */;
  saveGoodsType?: GoodsType | null /* 添加修改商品类别 */;
  deleteGoodsType?: boolean | null /* 删除商品类别 */;
  saveGoods?: Goods | null /* 添加修改商品 */;
  deleteGoods?: boolean | null /* 删除商品 */;
  saveTransaction?: Transaction | null /* 添加修改交易 */;
  deleteTransaction?: boolean | null /* 删除交易 */;
  saveAnswer?: Answer | null /* 添加修改问答 */;
  deleteAnswer?: boolean | null /* 删除问答 */;
  saveAdvertm?: Advertm | null /* 添加修改广告 */;
  deleteAdvertm?: boolean | null /* 删除广告 */;
}

export interface searchUser {
  username?: Json | null;
  roleId?: Json | null;
  email?: Json | null;
  name?: Json | null;
}

export interface searchRole {
  roleName?: Json | null;
}

export interface searchMenu {
  title?: RegExp | null;
  pid?: string | null;
  code?: Json | null;
  url?: Json | null;
  isValid?: boolean | null;
}

export interface searchPower {
  _id?: Json | null;
  title?: RegExp | null;
  code?: RegExp | null;
  url?: RegExp | null;
  type?: RegExp | null;
  isValid?: boolean | null;
}

export interface searchProfile {
  _id?: Json | null;
  phone?: Json | null;
  address?: Json | null;
  card?: Json | null;
}

export interface searchAdvert {
  title?: RegExp | null;
  type?: string | null /* 活动类型 */;
  startDate?: Date | null /* 活动开始时间 */;
  endDate?: Date | null /* 活动对结束时间 */;
}

export interface searchCardLog {
  userName?: Json | null /* 用户 */;
  playName?: Json | null /* 玩家名 */;
  createAt?: Json | null /* 创建时间 */;
}

export interface searchBusiness {
  id?: Json | null;
  name?: Json | null;
}

export interface searchGoodsType {
  id?: Json | null;
  name?: Json | null;
}

export interface searchGoods {
  id?: Json | null;
  name?: Json | null;
}

export interface searchTransactionType {
  id?: Json | null;
  name?: Json | null;
  t_code?: Json | null;
}

export interface searchAnswer {
  id?: Json | null;
  name?: Json | null;
}

export interface searchAdvertm {
  id?: Json | null;
  title?: Json | null;
}

export interface inputUser {
  id?: string | null;
  username?: string | null;
  name?: string | null;
  email?: string | null;
  password?: string | null;
  roleId?: string | null;
  profileId?: string | null;
  isValid?: boolean | null;
}

export interface inputRole {
  id?: string | null;
  roleName?: string | null;
  desc?: string | null;
  code?: string | null;
  isValid?: boolean | null;
}

export interface inputRolePower {
  roleId?: string | null;
  powerId?: string | null;
}

export interface inputMenu {
  id?: string | null;
  menuImg?: string | null;
  isLeaf?: boolean | null;
  pid?: string | null;
  code?: string | null;
  url?: string | null;
  isValid?: boolean | null;
  title?: string | null;
}

export interface inputPower {
  id?: string | null;
  title?: string | null /* 标题 */;
  operation?: Operation[] | null /* 操作权限 */;
  code?: string | null;
  url?: string | null;
  explain?: string | null;
  menuId?: string | null;
  type?: string | null;
  isValid?: boolean | null;
}

export interface inputProfile {
  id?: string | null;
  phone?: string | null;
  address?: string | null;
  card?: number | null;
  userId?: string | null;
}

export interface inputAdvert {
  id?: string | null;
  title?: string | null /* 标题 */;
  imageIds?: string[] | null /* 文件id列表 */;
  startDate?: Date | null /* 活动开始时间 */;
  endDate?: Date | null /* 活动对结束时间 */;
  explain?: string | null /* 说明 */;
  activity?: number | null /* 活动状态 */;
  type?: string | null /* 活动类型 */;
  isValid?: boolean | null /* 是否有效 */;
}

export interface inputCardLog {
  userName?: string | null /* 用户 */;
  playName?: string | null /* 玩家名 */;
  card?: number | null /* 房卡数量 */;
  type?: string | null /* 加房卡|减房卡 */;
}

export interface inputDealer {
  id?: string | null;
  account?: string | null;
  openid?: string | null;
  password?: string | null;
  name?: string | null;
  create_time?: number | null;
  token?: string | null;
  last_login_time?: number | null;
  privilege_level?: number | null;
  level?: number | null;
  card?: number | null;
  gift_card?: number | null;
  wx?: string | null;
  code?: string | null;
  is_del?: number | null;
  is_allow?: number | null;
}

export interface inputVersion {
  iOSUrl?: string | null;
  iOSVersion?: string | null;
  androidUrl?: string | null;
  androidVersion?: string | null;
}

export interface inputNews {
  content?: string | null;
}

export interface inputNotice {
  content?: string | null;
}

export interface inputTip {
  content?: string | null;
  free?: boolean | null;
}

export interface inputBusiness {
  id?: string | null;
  user_id?: string | null;
  name?: string | null;
  phone_num?: string | null;
  address?: string | null;
  b_hours?: string | null;
  brief?: string | null;
  score?: number | null;
  imageIds?: string[] | null;
  trans_times?: number | null;
  isValid?: boolean | null;
}

export interface inputGoodsType {
  id?: string | null;
  name?: string | null;
  business_id?: string | null;
  isValid?: boolean | null;
  updateAt?: Date | null;
  createAt?: Date | null;
}

export interface inputGoods {
  id?: string | null;
  name?: string | null;
  cost_score?: number | null;
  rule?: string | null;
  explain?: string | null;
  count?: number | null;
  trans_times?: number | null;
  goods_type?: string | null;
  imageSrc?: string | null;
  stock?: number | null;
  limit?: number | null;
  business_id?: string | null;
  goodsType_id?: string | null;
  isValid?: boolean | null;
}

export interface inputTransaction {
  id?: string | null;
  trade_code?: string | null;
  goods_id?: string | null;
  business_id?: string | null;
  user_id?: string | null;
  user_name?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  complete_time?: Date | null;
  state?: boolean | null;
  t_code?: string | null;
  isValid?: boolean | null;
}

export interface inputAnswer {
  id?: string | null;
  name?: string | null;
  type?: string | null;
  content?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  isValid?: boolean | null;
}

export interface inputAdvertm {
  id?: string | null;
  title?: string | null;
  type?: string | null;
  link?: string | null;
  imageIds?: string[] | null;
  explain?: string | null;
  startDate?: Date | null;
  endDate?: Date | null;
  isValid?: boolean | null;
}
export interface GetUserByIdQueryArgs {
  id?: string | null;
}
export interface GetUserPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  user?: searchUser | null;
}
export interface GetUserCountQueryArgs {
  user?: searchUser | null;
}
export interface GetUserWhereQueryArgs {
  user?: searchUser | null;
}
export interface LoginQueryArgs {
  username: string;
  password: string;
}
export interface GetRoleByIdQueryArgs {
  id?: string | null;
}
export interface GetRolePageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  role?: searchRole | null;
}
export interface GetRoleCountQueryArgs {
  role?: searchRole | null;
}
export interface GetRoleWhereQueryArgs {
  role?: searchRole | null;
}
export interface GetMenuByIdQueryArgs {
  id?: string | null;
}
export interface GetMenuPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  menu?: searchMenu | null;
}
export interface GetMenuCountQueryArgs {
  menu?: searchMenu | null;
}
export interface GetMenuWhereQueryArgs {
  menu?: searchMenu | null;
}
export interface GetPowerByIdQueryArgs {
  id?: string | null;
}
export interface GetPowerPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  power?: searchPower | null;
}
export interface GetPowerCountQueryArgs {
  power?: searchPower | null;
}
export interface GetPowerWhereQueryArgs {
  power?: searchPower | null;
}
export interface GetProfileByIdQueryArgs {
  id?: string | null;
}
export interface GetProfilePageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  profile?: searchProfile | null;
}
export interface GetProfileCountQueryArgs {
  profile?: searchProfile | null;
}
export interface GetProfileWhereQueryArgs {
  profile?: searchProfile | null;
}
export interface GetProfileAggregateQueryArgs {
  profile?: Json[] | null;
}
export interface GetAdvertByIdQueryArgs {
  id?: string | null;
}
export interface GetAdvertPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  advert?: searchAdvert | null;
}
export interface GetAdvertCountQueryArgs {
  advert?: searchAdvert | null;
}
export interface GetAdvertWhereQueryArgs {
  advert?: searchAdvert | null;
}
export interface GetPlayerByIdQueryArgs {
  id?: string | null;
}
export interface GetPlayerPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  where?: string | null;
  order?: string | null;
}
export interface GetPlayerCountQueryArgs {
  where?: string | null;
}
export interface GetPlayerWhereQueryArgs {
  where?: string | null;
  order?: string | null;
}
export interface GetCardLogPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  cardLog?: searchCardLog | null;
}
export interface GetCardLogCountQueryArgs {
  cardLog?: searchCardLog | null;
}
export interface GetCardLogWhereQueryArgs {
  cardLog?: searchCardLog | null;
}
export interface GetDealerByIdQueryArgs {
  id?: string | null;
}
export interface GetDealerPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  where?: string | null;
  order?: string | null;
}
export interface GetDealerCountQueryArgs {
  where?: string | null;
}
export interface GetDealerWhereQueryArgs {
  where?: string | null;
  order?: string | null;
}
export interface GetVersionByIdQueryArgs {
  id?: string | null;
}
export interface GetNewsByIdQueryArgs {
  id?: string | null;
}
export interface GetNoticeByIdQueryArgs {
  id?: string | null;
}
export interface GetTipByIdQueryArgs {
  id?: string | null;
}
export interface GetOrderPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  where?: string | null;
  order?: string | null;
}
export interface GetOrderCountQueryArgs {
  where?: string | null;
}
export interface GetOrderCardCostQueryArgs {
  where?: string | null;
}
export interface GetCardRecordPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  where?: string | null;
  order?: string | null;
}
export interface GetCardRecordCountQueryArgs {
  where?: string | null;
}
export interface GetCardRecordWhereQueryArgs {
  where: string;
  order?: string | null;
}
export interface GetCardRecordStatisticeQueryArgs {
  where: string;
  order?: string | null;
}
export interface GetBusinessByIdQueryArgs {
  id?: string | null;
}
export interface GetBusinessPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  business?: searchBusiness | null;
}
export interface GetBusinessCountQueryArgs {
  business?: searchBusiness | null;
}
export interface GetBusinessWhereQueryArgs {
  business?: searchBusiness | null;
}
export interface GetGoodsTypeByIdQueryArgs {
  id?: string | null;
}
export interface GetGoodsTypePageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  goodsType?: searchGoodsType | null;
}
export interface GetGoodsTypeCountQueryArgs {
  goodsType?: searchGoodsType | null;
}
export interface GetGoodsTypeWhereQueryArgs {
  goodsType?: searchGoodsType | null;
}
export interface GetGoodsByIdQueryArgs {
  id?: string | null;
}
export interface GetGoodsPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  goods?: searchGoods | null;
}
export interface GetGoodsCountQueryArgs {
  goods?: searchGoods | null;
}
export interface GetGoodsWhereQueryArgs {
  goods?: searchGoods | null;
}
export interface GetTransactionByIdQueryArgs {
  id?: string | null;
}
export interface GetTransactionPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  transaction?: searchTransactionType | null;
}
export interface GetTransactionCountQueryArgs {
  transaction?: searchTransactionType | null;
}
export interface GetTransactionWhereQueryArgs {
  transaction?: searchTransactionType | null;
}
export interface GetAnswerByIdQueryArgs {
  id?: string | null;
}
export interface GetAnswerPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  answer?: searchAnswer | null;
}
export interface GetAnswerCountQueryArgs {
  answer?: searchAnswer | null;
}
export interface GetAnswerWhereQueryArgs {
  answer?: searchAnswer | null;
}
export interface GetAdvertmByIdQueryArgs {
  id?: string | null;
}
export interface GetAdvertmPageQueryArgs {
  pageIndex?: number | null;
  pageSize?: number | null;
  advertm?: searchAdvertm | null;
}
export interface GetAdvertmCountQueryArgs {
  advertm?: searchAdvertm | null;
}
export interface GetAdvertmWhereQueryArgs {
  advertm?: searchAdvertm | null;
}
export interface PowersRoleArgs {
  limit?: number | null;
}
export interface SaveUserMutationArgs {
  user?: inputUser | null;
}
export interface DeleteUserMutationArgs {
  id?: string | null;
}
export interface SaveRoleMutationArgs {
  role?: inputRole | null;
}
export interface DeleteRoleMutationArgs {
  id?: string | null;
}
export interface AddRolePowerMutationArgs {
  rolePower?: inputRolePower | null;
}
export interface DelPowerbyRoleIdMutationArgs {
  roleId?: string | null;
}
export interface DelPowerbyIdMutationArgs {
  id?: string | null;
}
export interface DelAllPowerbyIdMutationArgs {
  roleId?: string | null;
  id?: string[] | null;
}
export interface AddAllRolePowerMutationArgs {
  rolePower?: inputRolePower[] | null;
}
export interface SaveMenuMutationArgs {
  menu?: inputMenu | null;
}
export interface UpdateMenuMutationArgs {
  id?: string | null;
  menu?: inputMenu | null;
}
export interface DeleteMenuMutationArgs {
  id?: string | null;
}
export interface SavePowerMutationArgs {
  power?: inputPower | null;
}
export interface DeletePowerMutationArgs {
  id?: string | null;
}
export interface AddAllPowerMutationArgs {
  power?: inputPower[] | null;
}
export interface DelAllPowerMutationArgs {
  power?: searchPower | null;
}
export interface SaveProfileMutationArgs {
  profile?: inputProfile | null;
}
export interface DeleteProfileMutationArgs {
  id?: string | null;
}
export interface SingleUploadMutationArgs {
  file: Upload;
}
export interface MultipleUploadMutationArgs {
  files: Upload[];
}
export interface DeleFileMutationArgs {
  id?: string | null;
}
export interface SaveAdvertMutationArgs {
  advert?: inputAdvert | null;
}
export interface DeleteAdvertMutationArgs {
  id?: string | null;
}
export interface UpdatePlayerCardMutationArgs {
  id?: string | null;
  cardNum?: number | null;
}
export interface SaveCardLogMutationArgs {
  cardLog?: inputCardLog | null;
}
export interface DeleteCardLogMutationArgs {
  id?: string | null;
}
export interface SaveDealerMutationArgs {
  dealer?: inputDealer | null;
}
export interface DeleteDealerMutationArgs {
  id?: string | null;
}
export interface UpdateVersionMutationArgs {
  id?: string | null;
  version?: inputVersion | null;
}
export interface UpdateNewsMutationArgs {
  id?: string | null;
  news?: inputNews | null;
}
export interface UpdateNoticeMutationArgs {
  id?: string | null;
  notice?: inputNotice | null;
}
export interface UpdateTipMutationArgs {
  id?: string | null;
  tip?: inputTip | null;
}
export interface SaveBusinessMutationArgs {
  business?: inputBusiness | null;
}
export interface DeleteBusinessMutationArgs {
  id?: string | null;
}
export interface SaveGoodsTypeMutationArgs {
  goodsType?: inputGoodsType | null;
}
export interface DeleteGoodsTypeMutationArgs {
  id?: string | null;
}
export interface SaveGoodsMutationArgs {
  goods?: inputGoods | null;
}
export interface DeleteGoodsMutationArgs {
  id?: string | null;
}
export interface SaveTransactionMutationArgs {
  transaction?: inputTransaction | null;
}
export interface DeleteTransactionMutationArgs {
  id?: string | null;
}
export interface SaveAnswerMutationArgs {
  answer?: inputAnswer | null;
}
export interface DeleteAnswerMutationArgs {
  id?: string | null;
}
export interface SaveAdvertmMutationArgs {
  advertm?: inputAdvertm | null;
}
export interface DeleteAdvertmMutationArgs {
  id?: string | null;
}

export enum Operation {
  SHOW = "SHOW",
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE"
}
