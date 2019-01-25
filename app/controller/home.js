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
  async zzsq() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'zzsq' },
      raw: true,
    });
    await this.ctx.render('/zzsq', {
      result,
    });
  }

  async lyhz() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'lyhz' },
      raw: true,
    });
    await this.ctx.render('/lyhz', {
      result,
    });
  }

  async test() {
    const { Static, Role, User, UserRole  } = this.ctx.model;
    await Static.create({ title: 'about' });
    await Static.create({ title: 'customer' });
    await Static.create({ title: 'zzsq' });
    await Static.create({ title: 'lyhz' });

    const role = await Role.create({ title: '管理员' });
    await Role.create({ title: '普通用户' });
    const password = await this.ctx.service.tools.md5('123');
    const user = await User.create({ username: 'admin', password, isSuper: 1 });
    await User.create({ username: 'user1', password, isSuper: 0 });
    await UserRole.create({ rid: 1, uid: 1 });
    await UserRole.create({ rid: 2, uid: 2 });
  }
}

module.exports = HomeController;
