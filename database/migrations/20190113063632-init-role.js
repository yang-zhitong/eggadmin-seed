'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('role', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: STRING(255), allowNull: true },
      description: { type: STRING(255), allowNull: true },
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 role 表
  down: async queryInterface => {
    await queryInterface.dropTable('role');
  },
};