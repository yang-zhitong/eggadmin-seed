# sequelize-project



## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org

### 配置mysql

1. 下载docker镜像 `docker pull mysql:5.6`

2. 启动

```sh
docker run -p 3306:3306 --name mymysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
```

3. `docker container exec -it mymysql /bin/sh`

4.  `mysql -uroot -p`

5. `CREATE DATABASE IF NOT EXISTS aaa  DEFAULT CHARSET utf8 COLLATE utf8_general_ci;`

6. ctrl + p + q 退出docker


### 初始化

```
npm run sql:init
```

会运行 database里面index.js, 进行drop表再创建表

在这里面已经创建好了一个admin用户, 开始写路由吧

todo: 引入定义好的模型, 现在是在model里写一遍, 又在database里复制过去一遍

### 后面数据库增加字段

1. 进入docker `docker exec -it aaa sh`

2. 进入mysql `mysql -u root -p`

3. 输入密码后

4. 使用某一个数据库`use aaa;`

5. 比如给表bbb增加一个整型testKey字段 `alter table bbb add testKey ini;`

### 上线前

1. docker run -p 3306:3306 --name mysql -v ./data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7

2. 创建数据库

3. 启动web服务, 创建数据 docker-compose up


`docker exec -it mysql mysqldump --opt -d -uroot -p123456 talbe_name >./sql/init.sql`

networks:
  default:
    name: ${PROJECT_NAME}-network
    driver: bridge


  node:
    image: node:alpine
    restart: always
    container_name: ${PROJECT_NAME}_node
    environment:
      PORT: ${PORT}
      DB_NAME: ${DB_NAME}
      DB_PASS: ${DB_PASS}
    ports:
      - ${PORT}:7001
    volumes:
      - '.:/data'
    working_dir: /data
    command: sh -c "yarn && npm run sql:init"
    depends_on:
      - mysql

  mysql: 
    image: mysql:5.7
    restart: always
    hostname: ${PROJECT_NAME}_mysql
    container_name: ${PROJECT_NAME}_mysql
    env_file:
      - ./.env
    ports:
      - 3306:3306 
    volumes:
      - './data:/var/lib/mysql'
      - './sql:/docker-entrypoint-initdb.d'