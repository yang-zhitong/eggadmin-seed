'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Game = app.model.define('game', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: INTEGER, // type 1 端游 type 2 手游
    show: INTEGER, // 1 展示 0 不展示
    sortTop: INTEGER, // 从小到大进行排序, 1即第一位显示
    sortLeft: INTEGER, // 从小到大进行排序, 1即第一位显示
    name: STRING(30), // 名字
    des: STRING(255), // 描述
    href: STRING(255), // 官网地址
    img: STRING(255), // 缩略图地址
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  return Game;
};
