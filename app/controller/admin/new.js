'use strict';

const BaseController = require('./base');
// const path = require('path');
// const { rename, unlink } = require('fs');
// const { promisify } = require('util');
// const renameAsnyc = promisify(rename);
// const unlinkAsnyc = promisify(unlink);

class NewController extends BaseController {
  // constructor(ctx) {
  //   super(ctx);
  // }

  async index() {
    const { page, type } = this.ctx.request.query;
    const offset = page ? +page : 1;
    const { rows: list, count } = await this.ctx.service.admin.newService.index(offset);
    await this.render('/admin/new/index', {
      list,
      nowPage: offset,
      pageRange: this.pageRange(count),
    });
  }

  async add() {
    await this.ctx.render('/admin/new/edit');
  }
  async edit() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('');
    const queryNew = await this.ctx.service.admin.newService.findOne(id);
    await this.ctx.render('/admin/new/edit', {
      queryNew,
    });
  }

  async doAdd() {
    const { title, type, editorValue, href } = this.ctx.request.body;
    const result = await this.ctx.service.admin.newService.addOne({
      title, content: editorValue, type, href,
    });
    if (result) {
      this.successRender('添加成功', '/admin/new');
    } else {
      this.failRender('新增失败', '/admin/new/add');
    }
  }
  async doEdit() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('');
    const { title, editorValue, type, href } = this.ctx.request.body;
    const result = await this.ctx.service.admin.newService.editOne({
      id, title, content: editorValue, type, href,
    });
    if (result) {
      this.successRender('编辑成功', '/admin/new');
    } else {
      this.failRender('更新失败', `/admin/new/${id}/edit`);
    }
  }
  async delete() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('错误');
    const result = await this.ctx.service.admin.newService.deleteOne(id);
    if (result) {
      this.successRender('删除成功', '/admin/new');
    } else {
      this.failRender('删除失败', '/admin/new');
    }
  }

  async doSort() {
    const { id } = this.ctx.params;
    const { sort } = this.ctx.request.body;
    if (!id) return this.fail('错误');
    const result = await this.ctx.service.admin.newService.sort(id, sort);
    if (result) {
      this.success({ result });
    } else {
      this.fail('排序失败');
    }
  }

}

module.exports = NewController;
