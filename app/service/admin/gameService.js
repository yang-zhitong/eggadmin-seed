const Service = require('egg').Service;
const { Op } = require('sequelize');

class GameService extends Service {
  // 全部游戏管理
  async index(offset, type) {
    const limit = 20;
    const result = await this.app.model.Game.findAndCountAll({
      where: { type: type === 'pc' ? 1 : 2 },
      raw: true,
      limit,
      offset: (offset - 1) * limit,
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

  // 根据id 把一个任务变成顶部可见或
  //
  async show(id, position) {
    const result = await this.app.model.Game.update({
      [position]: 1,
      where: {
        id,
      },
    });
    return result;
  }

}

module.exports = GameService;
