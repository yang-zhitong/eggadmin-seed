'use strict';

const BaseController = require('./base');

class StaticServer extends BaseController {
  // constructor(ctx) {
  //   super(ctx);
  // }

  async menu() {
    await this.render('/admin/static/menu');
  }

  async doRefresh() {
    this.config.staticVersion = Math.floor(Date.now() / 1000);
    this.successRender('编辑成功', '/admin/menu');
  }

  async about() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'about' },
      raw: true,
    });
    await this.render('/admin/static/about', {
      result,
    });
  }
  async editAbout() {
    const { editorValue } = this.ctx.request.body;
    await this.app.model.Static.update(
      { content: editorValue },
      { where: { title: 'about' } });
    this.successRender('编辑成功', '/admin/about');
  }

  async customer() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'customer' },
      raw: true,
    });
    await this.render('/admin/static/customer', {
      result,
    });
  }
  async editCustomer() {
    const { editorValue } = this.ctx.request.body;
    await this.app.model.Static.update(
      { content: editorValue },
      { where: { title: 'customer' } });
    this.successRender('编辑成功', '/admin/customer');
  }

  async zzsq() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'zzsq' },
      raw: true,
    });
    await this.render('/admin/static/zzsq', {
      result,
    });
  }
  async editzzsq() {
    const { editorValue } = this.ctx.request.body;
    await this.app.model.Static.update(
      { content: editorValue },
      { where: { title: 'zzsq' } });
    this.successRender('编辑成功', '/admin/zzsq');
  }
  async lyhz() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'lyhz' },
      raw: true,
    });
    await this.render('/admin/static/lyhz', {
      result,
    });
  }
  async editlyhz() {
    const { editorValue } = this.ctx.request.body;
    await this.app.model.Static.update(
      { content: editorValue },
      { where: { title: 'lyhz' } });
    this.successRender('编辑成功', '/admin/lyhz');
  }

  async friend() {
    const list = await this.ctx.model.Friendship.findAll();
    await this.render('/admin/friend/index', {
      list,
    });
  }

  async editFriend() {
    const { id } = this.ctx.params;
    let queryItem;
    if (+id > 0) {
      queryItem = await this.ctx.model.Friendship.findOne({
        where: { id },
        raw: true,
      });
    }
    await this.render('/admin/friend/edit', {
      queryItem,
    });
  }

  async doEditFriend() {
    const { id } = this.ctx.params;
    const { title, href } = this.ctx.request.body;
    if (+id > 0) {
      await this.app.model.Friendship.update(
        { title, href },
        { where: { id } });
      this.successRender('编辑成功', '/admin/friend');
    } else {
      await this.app.model.Friendship.create({ title, href });
      this.successRender('新增成功', '/admin/friend');
    }
  }
  async deleteFriend() {
    const { id } = this.ctx.params;
    await this.app.model.Friendship.destroy({ where: { id } });
    this.successRender('删除成功', '/admin/friend');
  }
}

module.exports = StaticServer;
