'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const friendship = app.model.define('friendship', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING,
    href: STRING,
    sort: INTEGER,
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  return friendship;
};
