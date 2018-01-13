# 英德麻将后台

## 主要使用的技术

* Angular 5
* Apollo graphql
* UI angular/material
* ngx-bootstrap

### 项目基本结构

```md
|app
├── admin
│   └── common
│   ├── game
│   └── layouts
│   └── main
│   ├── system
├── common
│   ├── directive
│   └── server
├── component
│   ├── 404
│   ├── crumbs
│   └── dataForm
│   ├── dataModal
│   ├── fileUpload
│   └── fontawesome
│   ├── table
│   └── tree
└── login
```

## 重要的信息

### apollo 查询例子
```js
var sql = gql`query getMenuById($id:String){
                menu:getMenuById(id:$id){ id title }
            }`;
this.apollo.query<{menu:any}>({
    query: sql,
    variables: { id: "efeewshdrtwrdd234" },
    fetchPolicy: "network-only" //不从缓存读取数据
}).subscribe(({ data }) => {console.log(data.menu)}
```

### apollo 添加修改删除例子
```js
var sql = gql`mutation save($menu:inputMenu){
            menu:saveMenu(menu:$menu){ id } }`;
this.apollo.mutate<{menu:any}>({
    mutation: sql,
    variables: { menu: {} },
    update: (proxy, data: any) => {
        //从缓存中读取数据
        var data = proxy.readQuery<{ menus: Array<Menu> }>(gql`query{ 
            getUsers{id name username}
        }`);
        //删除数据
        data.menus = data.menus.filter(p => p.id != id);
        // 写回缓存
        Object.assign(query, { data: data });
        proxy.writeQuery(query);
    }
}).subscribe(({ data }) => {console.log(data.menu)}
```
### test 查询例子
