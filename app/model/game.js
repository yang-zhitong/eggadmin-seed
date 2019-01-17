'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Game = app.model.define('game', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: INTEGER, // type 1 端游 type 2 手游
    sortTop: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
    sortLeft: { type: INTEGER, defaultValue: 0 }, // 从小到大进行排序, 1即第一位显示
    name: STRING(30), // 名字
    additionName: STRING(30), // 名字附加描述
    des: STRING(255), // 描述
    href: STRING(255), // 官网地址
    openTime: STRING, // 开服时间
    img: STRING(255), // 缩略图地址
    iconPC: INTEGER, // 是否展示这个图标
    iconAD: INTEGER, // 是否展示这个图标
    iconIOS: INTEGER, // 是否展示这个图标
    hot: INTEGER, // 人气
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  return Game;
};
