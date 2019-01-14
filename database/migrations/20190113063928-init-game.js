'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 game 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('game', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      type: INTEGER,
      name: STRING(30),
      des: STRING(255),
      href: STRING(255),
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 game 表
  down: async queryInterface => {
    await queryInterface.dropTable('game');
  },
};