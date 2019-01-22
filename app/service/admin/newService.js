const Service = require('egg').Service;
const { Op } = require('sequelize');

class NewService extends Service {
  // 全部新闻
  async index(offset, { type, pageSize } = {}) {
    const limit = pageSize || this.config.pageSize;
    const result = await this.app.model.New.findAndCountAll({
      // where: { type },
      raw: true,
      limit,
      offset: (offset - 1) * limit,
      order: [[ 'sort', 'DESC' ], [ 'createdAt', 'DESC' ]],
    });
    return result;
  }

  // 新加一个, 好像名字重复也没事
  async addOne({ title, content, type, href }) {
    const result = await this.app.model.New.create({
      title, content, type, href
    });
    return result;
  }

  // 根据id 查询一个
  async findOne(id) {
    const result = await this.app.model.New.findOne({
      where: {
        id,
      },
      raw: true,
    });
    return result;
  }

  // 编辑一个的基本信息
  async editOne({ id, title, content, type, href }) {
    const result = await this.app.model.New.update({
      title, content, type, href,
    }, { where: { id } });
    return result;
  }

  // 根据id 删除一个角色
  async deleteOne(id) {
    const result = await this.app.model.New.destroy({
      where: {
        id,
      },
    });
    return result;
  }

  // 选择新闻的顺序
  async sort(id, sort) {
    const [ result ] = await this.app.model.New.update({
      sort,
    }, { where: { id } });
    return result;
  }

}

module.exports = NewService;
