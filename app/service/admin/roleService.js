'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  // 角色管理
  // async index() {
  //   const result = await this.app.model.Role.findAll();
  //   return result;
  // }

  // 新加一个角色
  async addOneRole({ title, description }) {
    let result = await this.app.model.Role.findOne({
      where: {
        title,
      },
    });
    if (!result) {
      result = await this.app.model.Role.create({
        title, description,
      });
    } else {
      result = false;
    }
    return result;
  }

  // 根据id 查询一个角色
  async getOneRole(id) {
    const result = await this.app.model.Role.findOne({
      where: {
        id,
      },
    });
    return result;
  }

  // 编辑一个角色信息
  async editRole({ id, title, description }) {
    const result = await this.app.model.Role.update({
      title, description,
    }, { where: { id } });
    return result;
  }

  // 查询不被禁用的角色
  async all() {
    const result = await this.app.model.Role.findAll();
    return result;
  }
  // 根据id 删除一个角色
  async deleteOne(id) {
    const result = await this.app.model.Role.destroy({
      where: {
        id,
      },
    });
    return result;
  }
}

module.exports = RoleService;
