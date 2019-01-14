'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const UserRole = app.model.define('userRole', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uid: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    rid: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id',
      },
    },
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'user_role', // 也可以手动定义tableName
  });

  UserRole.associate = function() {
    app.model.UserRole.hasOne(app.model.User, { foreignKey: 'id', targetKey: 'uid' });
    app.model.UserRole.belongsTo(app.model.Role, { foreignKey: 'rid', targetKey: 'id' });
  };

  return UserRole;
};
