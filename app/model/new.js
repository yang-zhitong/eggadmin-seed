'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT } = app.Sequelize;

  const New = app.model.define('new', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: STRING(255), // 新闻自己编辑的类型, 用于分类筛选
    sort: { type: INTEGER, defaultValue: 0 }, // 这里是置顶, 数字越大即置顶
    title: STRING, // 名字
    href: STRING, // 名字
    content: TEXT, // 描述
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  return New;
};
