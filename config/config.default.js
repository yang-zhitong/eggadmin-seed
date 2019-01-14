'use strict';

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
  };


  return config;
};
