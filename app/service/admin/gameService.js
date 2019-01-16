const Service = require('egg').Service;
const { Op } = require('sequelize');

class GameService extends Service {
  // 全部游戏管理
  async index(offset, type) {
    const limit = this.config.pageSize;
    const result = await this.app.model.Game.findAndCountAll({
      where: { type: type === 'pc' ? 1 : 2 },
      raw: true,
      limit,
      offset: (offset - 1) * limit,
      order: [[ 'createdAt', 'DESC' ]],
    });
    return result;
  }

  // 新加一个, 好像名字重复也没事
  async addOne({ name, des, href, type, img }) {
    const result = await this.app.model.Game.create({
      name, href, img, des,
      type: type === 'pc' ? 1 : 2,
    });
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
  async editOne({ id, name, des, href, type, img }) {
    const result = await this.app.model.Game.update({
      name, href, img, des,
      type: type === 'pc' ? 1 : 2,
    }, { where: { id } });
    console.log('result---------------');
    console.log(result);
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

  async findSortMax(position) {
    const $gt = Op.gt;
    const result = await this.app.model.Game.count({
      where: {
        [position]: {
          [$gt]: 0,
        },
      },
    });
    return result;
  }

  // 找到所有要可见的, 有 top 和 left两种
  // type pc 1 mb 2 key sortLeft sortTop
  async findSorted(type, key) {
    const $gt = Op.gt;
    const result = await this.app.model.Game.findAll({
      where: {
        type: type === 'pc' ? 1 : 2,
        [key]: {
          [$gt]: 0,
        },
      },
      raw: true,
      order: [[ key ], [ 'createdAt', 'DESC' ]],
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
