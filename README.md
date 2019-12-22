# 一个基于docker的egg, mysql, nginx(todo)的后台小项目模板

面对不确定的服务器环境和nginx, node, mysql版本, 还是要用docker来简单部署的

按如下步骤配置好自己的项目, 到服务器上用`docker-compose up -d`起来就可以了

## 本地开发

1. 本地启动数据库, 端口3306, root 密码123456  具体配置信息在config中

2. 数据库名默认 shen_tu

3. npm 安装依赖, yarn 也可以

4. 命令行初始化数据库 `npm run sql:init` 

5. 启动开发 `npm run dev`


## 完成开发

1. 把开发好的数据库表结构导出给部署用

`docker exec -it mysql mysqldump --opt -d -uroot -p123456 talbe_name >./mysql/init.sql`

2. 创建.env写环境变量(已经写好了)

```js
PROJECT_NAME=xxxxx
EGG_SERVER_ENV=prod
NODE_ENV=production
PORT=7001
DB_NAME=db_name
DB_USER=root
DB_PASS=123456
DB_HOST=mysql
MYSQL_ROOT_PASSWORD=123456
```

3. 写好compose.yml配置

```yml
version: '3.5'
services:
  node:
    image: node:alpine
    restart: always
    container_name: ${PROJECT_NAME}_node
    env_file:
      - ./.env
    ports:
      - ${PORT}:7001
    volumes:
      - '.:/data'
    working_dir: /data
    command: sh -c "npm run docker"
    depends_on:
      - ${DB_HOST}    
  mysql: 
    image: mysql:5.7
    restart: always
    container_name: ${PROJECT_NAME}_mysql
    env_file:
      - ./.env
    ports:
      - 3306:3306 
    volumes:
      - './data:/var/lib/mysql'
      - './sql:/docker-entrypoint-initdb.d'
```

4. 代码里增加对应的prod环境配置, 即使用环境变量里的host, 密码等

5. 放到服务器上, 启动

`docker-compose up -d` 

## todo

1. 开放一个新端口与测试数据库, 一个命令同步线上数据库数据进行测试
