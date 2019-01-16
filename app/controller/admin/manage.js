'use strict';

const BaseController = require('./base');

class ManageController extends BaseController {

  constructor(ctx) {
    super(ctx);
    const { isSuper } = this.ctx.session.user;
    if (isSuper !== 1) {
      return this.ctx.redirect('/admin');
    }
  }

  async index() {
    const offset = this.ctx.request.query.page ? Number(this.ctx.request.query.page) : 1;
    const { count, rows: userList } = await this.ctx.service.admin.authService.getUserList(offset);
    await this.render('/admin/manage/index', {
      userList,
      count,
    });
  }

  async add() {
    const roleList = await this.ctx.service.admin.roleService.index();
    await this.ctx.render('/admin/manage/edit', {
      roleList,
    });
  }

  async edit() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('');
    const queryUser = await this.ctx.service.admin.authService.findUser(id);

    const roleList = await this.ctx.service.admin.roleService.index();
    await this.ctx.render('/admin/manage/edit', {
      queryUser,
      roleList,
    });
  }

  // post 增加用户
  async doAdd() {
    const { username, password, rid } = this.ctx.request.body;
    if (!rid) {
      return this.failRender('用户需要一个角色', '/admin/manage/add');
    }
    const md5pawd = await this.ctx.service.tools.md5(password);
    const result = await this.ctx.service.admin.authService.addOneUser({
      username, password: md5pawd, rid,
    });
    if (result) {
      this.successRender('添加成功', '/admin/manage');
    } else {
      this.failRender('用户名重复', '/admin/manage/add');
    }
  }

  async doEdit() {
    const { id } = this.ctx.params;
    const { username, password, rid } = this.ctx.request.body;
    const md5pawd = password ? await this.ctx.service.tools.md5(password) : undefined;
    const result = await this.ctx.service.admin.authService.updateOneUser({
      id, username, password: md5pawd, rid,
    });
    if (result) {
      this.successRender('更新成功', '/admin/manage');
    } else {
      this.failRender('更新失败', `/admin/manage/${id}/edit`);
    }
  }

  /*
  $.get('/admin/manage/2/delete'), (data) => console.log(data));
  */
  // 删除用户
  async delete() {
    const { id } = this.ctx.params;
    if (!id) {
      return this.failRender('删除失败', '/admin/manage');
    }
    const result = await this.ctx.service.admin.authService.deleteUser(id);
    if (result) {
      this.successRender('删除成功', '/admin/manage');
    } else {
      this.failRender('删除失败', '/admin/manage');
    }
  }
}

module.exports = ManageController;
