'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 role_access 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('role_access', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      aid: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'access',
          key: 'id'
        },
      },
      rid: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'role',
          key: 'id'
        },
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 role_access 表
  down: async queryInterface => {
    await queryInterface.dropTable('role_access');
  },
};