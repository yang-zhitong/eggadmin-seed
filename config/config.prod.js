
module.exports = () => {
  const config = exports = {};

  config.sequelize = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'shen_tu',
    host: process.env.DB_HOST || '0.0.0.0',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    define: {
      underscored: false, // 统一用驼峰命名..好记
    },
  };


  return config;
};
