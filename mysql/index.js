const Sequelize = require('sequelize');
const md5 = require('md5');
const isPro = process.env.NODE_ENV === 'production';

let sequelize;
if (isPro) {
  console.log('生产环境');
  console.log(process.env.DB_NAME);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASS);
  sequelize = new Sequelize(
    process.env.DB_NAME, // 数据库名
    process.env.DB_USER, // 用户名
    process.env.DB_PASS, // 用户密码
    {
      dialect: 'mysql', // 数据库使用mysql
      host: '127.0.0.1', // 数据库服务器ip
      // host: `${process.env.PROJECT_NAME}_mysql`, // 数据库服务器ip
      port: 3306, // 数据库服务器端口
    }
  );
} else {
  sequelize = new Sequelize(
    'shen_tu', // 数据库名
    'root', // 用户名
    '123456', // 用户密码
    {
      dialect: 'mysql', // 数据库使用mysql
      host: '127.0.0.1', // 数据库服务器ip
      port: 3306, // 数据库服务器端口
    }
  );
}

const {
  STRING,
  INTEGER,
  TEXT,
} = Sequelize;

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


const Game = sequelize.define('game', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  sortTop: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
  sortPCLeft: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
  sortMBLeft: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
  name: STRING(30), // 名字
  additionName: STRING(30), // 名字附加描述, 只给在顶部比较多的空间展示
  des: STRING(255), // 描述
  href: STRING(255), // 官网地址
  openTime: STRING, // 开服时间
  img: STRING(255), // 缩略图地址
  imgMobile: STRING(255), // 手机缩略图地址
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

const friendship = sequelize.define('friendship', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: STRING,
  href: STRING,
  sort: INTEGER,
}, {
  freezeTableName: true, // 也可以手动定义tableName
});

const pics = sequelize.define('pics', {
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: STRING, // 图片描述
  img: STRING, // 图片地址
  type: INTEGER, // 1 游戏截图 2 玩家照片
  sort: INTEGER,
}, {
  freezeTableName: true, // 也可以手动定义tableName
});

sequelize.sync().then(async () => {
  // console.log('生产环境');
  await Static.create({ title: 'about' });
  await Static.create({ title: 'customer' });
  await Static.create({ title: 'zzsq' });
  await Static.create({ title: 'lyhz' });

  const role = await Role.create({ title: '管理员' });
  await Role.create({ title: '普通用户' });

  const password = await md5('123');
  const user = await User.create({ username: 'admin', password, isSuper: 1 });
  await User.create({ username: 'user1', password, isSuper: 0 });

  await UserRole.create({ rid: 1, uid: 1 });
  await UserRole.create({ rid: 2, uid: 2 });
  process.exit(0);
});
