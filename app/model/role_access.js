'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const RoleAccess = app.model.define('roleAccess', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    aid: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'access',
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
    tableName: 'role_access', // 也可以手动定义tableName
  });

  RoleAccess.associate = function() {
    app.model.RoleAccess.hasOne(app.model.Role, { foreignKey: 'id', targetKey: 'rid' });
    app.model.RoleAccess.belongsTo(app.model.Access, { foreignKey: 'aid', targetKey: 'id' });
  };

  return RoleAccess;
};
