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
  TEXT,
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
  // type: INTEGER, // type 1 端游 type 2 手游
  sortTop: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
  sortPCLeft: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
  sortMBLeft: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
  name: STRING(30), // 名字
  additionName: STRING(30), // 名字附加描述, 只给在顶部比较多的空间展示
  des: STRING(255), // 描述
  href: STRING(255), // 官网地址
  openTime: STRING, // 开服时间
  img: STRING(255), // 缩略图地址
  iconPC: INTEGER, // 是否展示这个图标
  iconAD: INTEGER, // 是否展示这个图标
  iconIOS: INTEGER, // 是否展示这个图标
  hot: INTEGER, // 人气
}, {
  freezeTableName: true, // 也可以手动定义tableName
});

const New = sequelize.define('new', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  type: STRING(255), // 新闻自己编辑的类型, 用于分类筛选
  sort: { type: INTEGER, defaultValue: 0 }, // 这里是置顶, 数字越大即置顶
  title: STRING, // 名字
  href: STRING, // 下载地址
  content: TEXT, // 描述
}, {
  freezeTableName: true, // 也可以手动定义tableName
});

const Static = sequelize.define('static', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: STRING,
  content: TEXT, // 描述
}, {
  freezeTableName: true, // 也可以手动定义tableName
});


sequelize.sync({
  force: true,
}).then(async result => {
  await Static.create({ title: 'about' });
  await Static.create({ title: 'customer' });
  await Static.create({ title: 'zzsq' });
  await Static.create({ title: 'lyhz' });

  const role = await Role.create({ title: '管理员' });
  await Role.create({ title: '普通用户' });
  console.log('生成了一个role');
  console.log(JSON.stringify(role));
  const password = await md5('123');
  const user = await User.create({ username: 'admin', password, isSuper: 1 });
  await User.create({ username: 'user1', password, isSuper: 0 });
  console.log('生成了一个user admin 密码 123');
  console.log(JSON.stringify(user));
  await UserRole.create({ rid: 1, uid: 1 });
  await UserRole.create({ rid: 2, uid: 2 });

  let index = 0;
  console.log('正在增加一些测试用的翻页数据');
  while (++index < 10) {
    await new Promise(res => setTimeout(res, 2000));
    await Game.create({
      type: 1,
      name: '游戏名' + index,
      additionName: '[附加]' + index,
      hot: index,
      openTime: `预计明天${index}开放`,
      des: '游戏描述游戏描述游戏描述游戏描述游戏描述' + index,
      href: '下载地址下载地址下载' + index,
    });
    await New.create({
      title: '新闻标题标题标题标题标题' + index,
      type: '公告',
    });
  }
  console.log('完成 请用ctrl + c 结束');
});

