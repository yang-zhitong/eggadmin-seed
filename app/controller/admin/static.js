'use strict';

const BaseController = require('./base');

class StaticServer extends BaseController {
  // constructor(ctx) {
  //   super(ctx);
  // }

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
}

module.exports = StaticServer;
