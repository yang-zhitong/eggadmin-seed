'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const [ mbLeft, pcLeft, pcTop, { rows: newList }] = await Promise.all([
      this.ctx.service.admin.gameService.findSorted('mb', 'sortLeft'),
      this.ctx.service.admin.gameService.findSorted('pc', 'sortLeft'),
      this.ctx.service.admin.gameService.findSorted('pc', 'sortTop'),
      this.ctx.service.admin.newService.index(1, { pageSize: 7 }),
    ]);
    await this.ctx.render('/index.html', {
      mbLeft,
      pcLeft,
      pcTop,
      newList,
    });
  }
}

module.exports = HomeController;
