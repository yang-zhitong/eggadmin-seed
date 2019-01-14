'use strict';

const BaseController = require('./base');

class RoleController extends BaseController {
  // 获取角色列表
  async index() {
    const offset = this.ctx.request.query.page ? Number(this.ctx.request.query.page) : 1;
    const result = await this.ctx.service.admin.roleService.index(offset);
    await this.ctx.render('/admin/role/index', {
      result,
    });
  }

  // 新加角色
  async add() {
    await this.ctx.render('/admin/role/add');
  }

  /*
  $.post('/admin/role/add', {
    title: '管理员',
  }, (data) => console.log(data));
  */
  // post 新加角色
  async doAdd() {
    const { title } = this.ctx.request.body;
    const result = await this.ctx.service.admin.roleService.addOneRole({
      title,
    });
    if (result) {
      this.success({ result });
    } else {
      this.fail('角色已经存在');
    }
  }

  // 编辑角色信息页面
  async edit() {
    const id = this.ctx.request.query.id;
    const result = await this.ctx.service.admin.roleService.getOneRole(id);
    await this.ctx.render('/admin/role/edit', {
      result,
    });

  }

  /*
    $.post('/admin/role/edit', {
      id: 1,
      title: '管理员1',
    }, (data) => console.log(data));
  */
  async doEdit() {
    const { id, title, description } = this.ctx.request.body;
    const [ result ] = await this.ctx.service.admin.roleService.editRole({
      id, title, description,
    });
    console.log('编辑角色', result);
    if (result) {
      this.success({ result });
    } else {
      this.fail('编辑角色失败');
    }
  }

  /*
    $.get('/admin/role/delete?id=2', (data) => console.log(data));
  */
  // 根据id 删除角色
  async delete() {
    const { id } = this.ctx.request.query;
    if (!id) return this.fail('错误');
    const result = await this.ctx.service.admin.roleService.deleteOne(id);
    if (result) {
      this.success({ result });
    } else {
      this.fail('删除角色失败');
    }

  }

}

module.exports = RoleController;
