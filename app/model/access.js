'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Access = app.model.define('access', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    moduleName: { field: 'module_name', unique: true, type: STRING(255) },
    url: { unique: true, type: STRING(255) },
    description: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  return Access;
};
