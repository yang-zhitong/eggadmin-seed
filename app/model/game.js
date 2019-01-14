'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Game = app.model.define('game', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: INTEGER,
    name: STRING(30),
    des: STRING(255),
    href: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  return Game;
};