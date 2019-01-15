const Sequelize = require('sequelize');
const md5 = require('md5');

const sequelize = new Sequelize(
  'gameadmin_dev', // 数据库名
  'root', // 用户名
  '123456', // 用户密码
  {
    dialect: 'mysql', // 数据库使用mysql
    host: 'localhost', // 数据库服务器ip
    port: 3306, // 数据库服务器端口
  }
);

const {
  STRING,
  INTEGER,
} = Sequelize;

const User = sequelize.define('user', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: STRING(255),
  password: STRING(255),
  isSuper: INTEGER,
}, {
  freezeTableName: true, // 也可以手动定义tableName
});

const Role = sequelize.define('role', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: STRING(255),
    allowNull: true,
  },
  description: {
    type: STRING(255),
    allowNull: true,
  },
}, {
  freezeTableName: true, // 也可以手动定义tableName
});

const UserRole = sequelize.define('userRole', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  uid: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  rid: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'role',
      key: 'id',
    },
  },
}, {
  tableName: 'user_role', // 也可以手动定义tableName
});

const Game = sequelize.define('game', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  type: INTEGER, // type 1 端游 type 2 手游
  show: INTEGER, // 1 展示 0 不展示
  sortTop: INTEGER, // 从小到大进行排序, 1即第一位显示
  sortLeft: INTEGER, // 从小到大进行排序, 1即第一位显示
  name: STRING(30), // 名字
  des: STRING(255), // 描述
  href: STRING(255), // 官网地址
  img: STRING(255), // 缩略图地址
}, {
  freezeTableName: true, // 也可以手动定义tableName
});

sequelize.sync({
  force: true,
}).then(async result => {
  const role = await Role.create({ title: '管理员' });
  console.log('生成了一个role');
  console.log(JSON.stringify(role));
  const password = await md5('123');
  const user = await User.create({ username: 'admin', password, isSuper: '1' });
  console.log('生成了一个user admin 密码 123');
  console.log(JSON.stringify(user));
  await UserRole.create({ rid: 1, uid: 1 });
  console.log('完成 请用ctrl + c 结束');
});

