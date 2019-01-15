'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: STRING(255), allowNull: true },
    description: { type: STRING(255), allowNull: true },
  }, {
    freezeTableName: true, // 也可以手动定义tableName
  });

  Role.associate = function() {
    app.model.Role.hasOne(app.model.UserRole, { foreignKey: 'id', targetKey: 'rid' });
    app.model.Role.belongsTo(app.model.RoleAccess, { foreignKey: 'id', targetKey: 'rid' });
  };

  return Role;
};
