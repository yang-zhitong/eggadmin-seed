# 一个基于docker的egg, mysql, nginx(todo)的后台小项目模板

面对不确定的服务器环境和nginx, node, mysql版本, 还是要用docker来简单部署的

按如下步骤配置好自己的项目, 到服务器上用`docker-compose up -d`起来就可以了

### 本地开发前配置mysql

1. 下载docker镜像 `docker pull mysql:5.7`

2. 启动mysql服务并运行初始化sql(如创建database)

`docker run -p 3306:3306 --name mysql -v ${PWD}/mysql:/docker-entrypoint-initdb.d -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7`

当然, 这里需要先有一份初始化的sql如 `mysql/init.sql` 文件

`CREATE DATABASE IF NOT EXISTS `shen_tu` DEFAULT CHARSET utf8 COLLATE utf8_general_ci;`

本地小项目测试, 目前感觉不是很需要把数据暴露到宿主机

3. 进入数据库观察结果是否正确

4. 如果不正确, 请去掉-d观察错误log

### 再次开发

启动之前停止的mysql服务 `docker start mysql`

### 表定义与测试数据添加

开发时数据库定义写在mysql/index.js中

可以方便的添加测试数据

只需要 `node mysql/index.js` 即可

todo: 定义一份模型, 现在在app的model里写一遍, 又在初始化的时候定义(复制)一遍

### 开始开发

`npm run dev`

### 完成开发

1. 把开发好的数据库表结构导出给部署用

`docker exec -it mysql mysqldump --opt -d -uroot -p123456 talbe_name >./mysql/init.sql`

2. 创建.env写环境变量

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
