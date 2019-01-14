'use strict';

const Service = require('egg').Service;
const Sequelize = require('sequelize');
class AuthService extends Service {
  async doLogin(username, password) {
    const result = await this.app.model.User.findOne({
      where: {
        username, password,
      },
    });
    if (result) {
      return result;
    }
    return false;
  }
  // 用户管理
  async getUserList(offset) {
    const model = this.app.model;
    // 多表关联查询数据,并重新命名字段名
    const result = await this.app.model.User.findAndCountAll({
      include: [{
        model: model.UserRole,
        include: [{
          model: model.Role,
          attributes: [],
          raw: true,
        }],
        attributes: [],
        raw: true,
      }],
      attributes: {
        include: [
          [ Sequelize.col('userRole.role_id'), 'roleId' ],
          [ Sequelize.col('userRole->role.title'), 'roleName' ],
        ],
      },
      raw: true,
      limit: 4,
      offset: (offset - 1) * 4,
      order: [[ 'addTime', 'DESC' ]],
    });
    return result;
  }
  // 通过username 插叙一个用户
  async getUserByUserName(username, opt) {
    const result = await this.app.model.User.findOne({
      where: {
        username,
      },
    });
    return result;
  }


  // 新加用户
  async addOneUser({ username, password, rid }) {
    const result = await this.app.model.User.findOne({
      where: {
        username,
      },
    });
    if (result === null) {
      const { id: uid } = await this.app.model.User.create({
        username,
        password,
        isSuper: rid == 1 ? '1' : '0',
      });
      await this.app.model.UserRole.create({
        uid,
        rid,
      });
      return true;
    }
    return false;

  }
  // 查询一个用户
  async findUser(id) {
    const model = this.app.model;
    const result = await this.app.model.User.findOne({
      where: {
        id,
      },
      include: [{
        model: model.UserRole,
        include: [{
          model: model.Role,
          attributes: [],
          raw: true,
        }],
        attributes: [],
        raw: true,
      }],
      attributes: {
        include: [
          [ Sequelize.col('userRole.role_id'), 'roleId' ],
          [ Sequelize.col('userRole->role.title'), 'roleName' ],
        ],
      },
      raw: true,
      order: [[ 'addTime', 'DESC' ]],
    });
    return result;
  }
  // 删除一个用户
  async deleteUser(id) {
    const userRoleRes = await this.app.model.UserRole.destroy({
      where: {
        uid: id,
      },
    });
    const result = await this.app.model.User.destroy({
      where: {
        id,
      },
    });
    return result;
  }

  // 更新一个用户的信息
  // todo rid不存在的情况 因为外键绑定不能更新
  async updateOneUser({ id, username, password, rid }) {
    console.log(`roleId====>${rid}`);
    const result = await this.app.model.User.update({
      username, password, rid,
      isSuper: rid == 1 ? '1' : '0',
    }, {
      where: {
        id,
      },
    });
    await this.app.model.UserRole.update({
      rid,
    }, {
      where: { uid: id },
    });
    return result;
  }


}

module.exports = AuthService;
