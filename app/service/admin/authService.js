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
    const limit = 20;
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
          [ Sequelize.col('userRole.rid'), 'roleId' ],
          [ Sequelize.col('userRole->role.title'), 'roleName' ],
        ],
      },
      raw: true,
      limit,
      offset: (offset - 1) * limit,
    });
    return result;
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
          [ Sequelize.col('userRole.rid'), 'roleId' ],
          [ Sequelize.col('userRole->role.title'), 'roleName' ],
        ],
      },
      raw: true,
    });
    return result;
  }

  // // 通过username 插叙一个用户
  // async getUserByUserName(username, opt) {
  //   const result = await this.app.model.User.findOne({
  //     where: {
  //       username,
  //     },
  //   });
  //   return result;
  // }


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
        isSuper: +rid === 1 ? 1 : 0,
      });
      await this.app.model.UserRole.create({
        uid,
        rid,
      });
      return true;
    }
    return false;

  }

  // 更新一个用户的信息
  // todo 因为角色被删除, 所以用户和角色的绑定关系也被删掉了
  async updateOneUser({ id, username, password, rid }) {
    console.log(`roleId====>${rid}`);
    const result = await this.app.model.User.update({
      username,
      password,
      isSuper: +rid === 1 ? 1 : 0,
    }, {
      where: { id },
    });
    // 创建或更新
    await this.app.model.UserRole.upsert({
      rid,
      uid: id,
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

}

module.exports = AuthService;
