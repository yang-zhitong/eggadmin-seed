'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const [ mbLeft, pcLeft, pcTop, { rows: newList }] = await Promise.all([
      this.ctx.service.admin.gameService.findSorted('sortMBLeft'),
      this.ctx.service.admin.gameService.findSorted('sortPCLeft'),
      this.ctx.service.admin.gameService.findSorted('sortTop'),
      this.ctx.service.admin.newService.index(1, { pageSize: 7 }),
    ]);
    await this.ctx.render('/index', {
      mbLeft,
      pcLeft,
      pcTop,
      newList,
    });
  }

  async news() {
    await this.ctx.render('/news', {
    });
  }

  async newsDetail() {
    const { id } = this.ctx.params;
    const queryNew = await this.ctx.service.admin.newService.findOne(id);
    await this.ctx.render('/newsDetail', {
      queryNew,
    });
  }

  async about() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'about' },
      raw: true,
    });
    await this.ctx.render('/about', {
      result,
    });
  }

  async customer() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'customer' },
      raw: true,
    });
    await this.ctx.render('/customer', {
      result,
    });
  }

}

module.exports = HomeController;
