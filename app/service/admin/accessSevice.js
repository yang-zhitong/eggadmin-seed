'use strict';

const Service = require('egg').Service;

class AccessSeviceService extends Service {
  // 查询所有权限
  async findAccess(offset) {
    const result = await this.app.model.Access.findAndCountAll({
      include: {
        model: this.app.model.Access,
      },
      where: {
        moduleId: '0',
      },
      limit: 4,
      offset: (offset - 1) * 4,
      order: [[ 'addTime', 'DESC' ]],
    });
    return result;


    // let result = await this.app.model.Access.findAndCountAll();
    // return result;
  }
  // 根据传值查询
  async findByVal(val) {
    const result = await this.app.model.Access.findAll({
      where: val,
    });
    return result;
  }
  // 根据传值查询一个数据
  async getOneResult(val) {
    const result = await this.app.model.Access.findOne({
      where: val,
    });
    return result;
  }

  // 添加一个权限
  async addOneAccess({ moduleName, url }) {
    let result = await this.app.model.Access.findOne({
      where: { moduleName },
    });
    if (!result) {
      result = await this.app.model.Access.create({
        moduleName, url,
      });
    } else {
      result = false;
    }
    return result;
  }

  // 编辑一个权限, 并更新权限与角色表
  async updateOneById({ id, moduleName, url, ridArr }) {
    console.log(`service--id------->${id}`);
    await this.app.model.Access.update(
      { url, moduleName },
      { where: { id } });
    // await this.app.model.RoleAccess.update(
    //   { url, moduleName },
    //   { where: { id } });
  }

  // 删除一个权限
  async deleteOne(id) {
    return await this.app.model.Access.destroy({
      where: { id },
    });
  }

}

module.exports = AccessSeviceService;
