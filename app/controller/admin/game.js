'use strict';

const BaseController = require('./base');

class GameController extends BaseController {
  async index() {
    const { type } = this.ctx.params;
    const offset = this.ctx.request.query.page ? Number(this.ctx.request.query.page) : 1;
    const list = await this.ctx.service.admin.gameService.list(offset, type);
    await this.render('/admin/game/index', {
      list,
    });
  }

  async add() {
    await this.ctx.render('/admin/game/edit');
  }
  async edit() {
    const { type, id } = this.ctx.params;
    if (!id) return this.fail('');
    const game = await this.ctx.service.admin.gameService.findOne(id);
    await this.ctx.render('/admin/game/edit', {
      game,
    });
  }

  // post 增加用户
  async doAdd() {
    // const { type, id } = this.ctx.params;
    const { name, url, sort, show } = this.ctx.request.body;
    const result = await this.ctx.service.admin.gameService.addOne({
      name, url, sort, show,
    });
    if (result) {
      this.success({ result });
    } else {
      this.fail('用户名已存在');
    }
  }
  async doEdit() {
    const { type, id } = this.ctx.params;
    const { name, url, sort, show } = this.ctx.request.body;
    const result = await this.ctx.service.admin.gameService.updateOne({
      id, name, url, sort, show,
    });
    if (result) {
      this.success({ result });
    } else {
      this.fail('用户名已存在');
    }
  }

  // 删除用户
  async delete() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('删除错误');
    const result = await this.ctx.service.admin.gameService.deleteOne(id);
    if (result) {
      this.success('删除成功');
    } else {
      this.fail('删除失败');
    }
  }
}

module.exports = GameController;
