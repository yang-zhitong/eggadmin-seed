'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 user_role 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user_role', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      uid: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'user',
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
  // 在执行数据库降级时调用的函数，删除 user_role 表
  down: async queryInterface => {
    await queryInterface.dropTable('user_role');
  },
};