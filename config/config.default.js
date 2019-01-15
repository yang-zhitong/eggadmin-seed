
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  config.security = {
    csrf: {
      enable: false,
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547274155064_3319';

  // add your config here
  config.middleware = [ 'auth' ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.njs',
  };

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
    fileSize: '1mb',
    whitelist: [
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
      '.gif', // image/gif
      '.bmp', // image/bmp
    ],
  };

  return config;
};
