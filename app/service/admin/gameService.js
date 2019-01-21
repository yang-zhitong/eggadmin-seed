const Service = require('egg').Service;
const { Op } = require('sequelize');

class GameService extends Service {
  // 全部游戏管理
  async index(offset) {
    const limit = this.config.pageSize;
    const result = await this.app.model.Game.findAndCountAll({
      raw: true,
      limit,
      offset: (offset - 1) * limit,
      order: [[ 'createdAt', 'DESC' ]],
    });
    return result;
  }

  // 新加一个, 好像名字重复也没事
  async addOne(data) {
    const crateData = Object.assign({}, data);
    const result = await this.app.model.Game.create(crateData);
    return result;
  }

  // 根据id 查询一个
  async findOne(id) {
    const result = await this.app.model.Game.findOne({
      where: {
        id,
      },
    });
    return result;
  }

  // 编辑一个的基本信息
  async editOne(id, data) {
    const crateData = Object.assign({}, data);
    const result = await this.app.model.Game.update(crateData, { where: { id } });
    return result;
  }


  // 根据id 删除一个角色
  async deleteOne(id) {
    const result = await this.app.model.Game.destroy({
      where: {
        id,
      },
    });
    return result;
  }

  // 找到所有要可见的, 有 top 和 left两种
  // key sortPCLeft sortMBLeft sortTop
  async findSorted(key) {
    const $gt = Op.gt;
    const where = {
      [key]: {
        [$gt]: 0,
      },
    };
    // // 只有左侧列表区分类型
    // if (key === 'sortLeft') {
    //   where.type = type === 'pc' ? 1 : 2;
    // }
    const result = await this.app.model.Game.findAll({
      where,
      raw: true,
      order: [[ key, 'DESC' ], [ 'createdAt', 'DESC' ]],
    });
    return result;
  }

  // 根据id 把一个任务变成顶部可见或
  // key 只会为 sortLeft  sortTop show = 0 || 1
  async show(id, key, show) {
    const [ result ] = await this.app.model.Game.update({
      [key]: show,
    }, {
      where: {
        id,
      },
    });
    return result;
  }

}

module.exports = GameService;
