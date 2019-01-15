'use strict';

const BaseController = require('./base');

class ManageController extends BaseController {
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
    if (!rid) return this.fail('增加失败');
    const md5pawd = await this.ctx.service.tools.md5(password);
    const result = await this.ctx.service.admin.authService.addOneUser({
      username, password: md5pawd, rid,
    });
    if (result) {
      this.success({ result });
    } else {
      this.fail('用户名已存在');
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
      this.success({ result });
    } else {
      this.fail('编辑用户失败');
    }
  }

  /*
  $.get('/admin/manage/2/delete'), (data) => console.log(data));
  */
  // 删除用户
  async delete() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('删除错误');
    const result = await this.ctx.service.admin.authService.deleteUser(id);
    if (result) {
      this.success('删除用户成功');
    } else {
      this.fail('删除用户失败');
    }
  }
}

module.exports = ManageController;
