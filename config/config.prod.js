
module.exports = () => {
  const config = exports = {};

  config.sequelize = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'mysql',
    dialect: 'mysql',
    define: {
      underscored: false, // 统一用驼峰命名..好记
    },
  };


  return config;
};
