'use strict';

const BaseController = require('./base');

class RoleController extends BaseController {
  // 获取角色列表
  async index() {
    const roleList = await this.ctx.service.admin.roleService.index();
    await this.ctx.render('/admin/role/index', {
      roleList,
    });
  }
  // 新加角色
  async add() {
    await this.ctx.render('/admin/role/edit');
  }
  // 编辑角色信息页面
  async edit() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('');
    const queryRole = await this.ctx.service.admin.roleService.getOneRole(id);
    await this.ctx.render('/admin/role/edit', {
      queryRole,
    });
  }

  async doAdd() {
    const { title, description } = this.ctx.request.body;
    const result = await this.ctx.service.admin.roleService.addOneRole({
      title,
      description,
    });
    if (result) {
      this.success({ result });
    } else {
      this.fail('角色已经存在');
    }
  }

  async doEdit() {
    const { id } = this.ctx.params;
    const { title, description } = this.ctx.request.body;
    const [ result ] = await this.ctx.service.admin.roleService.editRole({
      id, title, description,
    });
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
    const { id } = this.ctx.params;
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
