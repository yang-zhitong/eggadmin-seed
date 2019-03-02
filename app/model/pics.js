'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Pics = app.model.define('pics', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING, // 图片描述
    img: STRING, // 图片地址
    type: INTEGER, // 1 游戏截图 2 玩家照片
    sort: INTEGER,
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });
  return Pics;
};
