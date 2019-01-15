'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(255),
    password: STRING(255),
    isSuper: INTEGER,
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  User.associate = function() {
    app.model.User.belongsTo(app.model.UserRole, { foreignKey: 'id', targetKey: 'uid' });
  };
  return User;
};
