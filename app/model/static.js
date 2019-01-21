'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const Static = app.model.define('static', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    content: TEXT, // 描述
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  return Static;
};
