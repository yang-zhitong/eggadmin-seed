
const path = require('path');
const fs = require('fs');

module.exports = appInfo => {
  const config = exports = {};

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // favicon
  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(__dirname, '../favicon.png')),
  };
  // 端口
  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547274155064_3319';

  // add your config here
  config.middleware = [ 'auth', 'tip' ];

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.njs',
  };

  config.pageSize = 10;

  config.sequelize = {
    username: 'root',
    password: '123456',
    database: 'gameadmin_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      underscored: false, // 统一用驼峰命名..好记
    },
  };

  config.multipart = {
    mode: 'file',
    tmpdir: path.join(__dirname, '../egg-multipart-tmp'),
    fileSize: '2mb',
    whitelist: [
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
      '.gif', // image/gif
      '.bmp', // image/bmp
    ],
  };

  return config;
};
