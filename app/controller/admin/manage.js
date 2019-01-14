'use strict';

const BaseController = require('./base');

class ManageController extends BaseController {
  async index() {
    // let offset = this.ctx.request.query.page?Number(this.ctx.request.query.page) : 1;
    // let result = await this.ctx.service.admin.authService.getUserList(offset);
    // console.log(JSON.stringify(result))
    await this.render('/admin/manage/index');
  }

  async add() {
    // 查询角色列表
    const roleList = await this.ctx.service.admin.roleService.usedRole();
    await this.ctx.render('/admin/manage/add', {
      roleList,
    });
  }
  /*
  $.post('/admin/manage/add', {
    username: 'admin',
    password: '123',
    rid: 1,
  }, (data) => console.log(data));
  */
  // post 增加用户
  async doAdd() {
    const { username, password, rid } = this.ctx.request.body;

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

  // 编辑用户
  async edit() {
    const id = this.ctx.request.query.id;
    const result = await this.ctx.service.admin.authService.findUser(id);
    const roleList = await this.ctx.service.admin.roleService.usedRole();
    await this.ctx.render('/admin/manage/edit', {
      result,
      roleList,
    });
  }

  /*
  $.post('/admin/manage/edit', {
    id: 2,
    username: 'admin',
    password: '123',
    rid: 1,
  }, (data) => console.log(data));
  */
  async doEdit() {
    const { id, username, password, rid } = this.ctx.request.body;
    const md5pawd = await this.ctx.service.tools.md5(password);
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
  $.get('/admin/manage/delete?id=4'), (data) => console.log(data));
  */
  // 删除用户
  async delete() {
    const { id } = this.ctx.request.query;
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
