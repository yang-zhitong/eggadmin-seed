'use strict';

const BaseController = require('./base');

class AccessController extends BaseController {
  // 获取权限列表
  async index() {
    const offset = Number(this.ctx.request.query.page ? this.ctx.request.query.page : 1);
    const result = await this.ctx.service.admin.accessSevice.findAccess(offset);
    await this.ctx.render('/admin/access/index', {
      result,
    });
  }
  // 添加权限
  async add() {
    const val = { moduleId: '0' };
    const moduleList = await this.ctx.service.admin.accessSevice.findByVal(val);
    await this.ctx.render('/admin/access/add', {
      moduleList,
    });
  }
  /*
  $.post('/admin/access/add', {
    moduleName: '菜单1',
    url: '/a',
    description: 'aa',
  }, (data) => console.log(data));
  */
  async doAdd() {
    const { moduleName, url, description } = this.ctx.request.body;
    const result = await this.ctx.service.admin.accessSevice.addOneAccess({
      moduleName,
      url,
      description,
    });
    if (result) {
      this.success(result);
    } else {
      this.fail('添加权限模块失败');
    }
  }

  // 编辑一个权限
  async edit() {
    const id = this.ctx.request.query.id ? decodeURIComponent(this.ctx.request.query.id) : '';
    const result = await this.ctx.service.admin.accessSevice.getOneResult({ id });
    const val = { moduleId: '0' };
    const moduleList = await this.ctx.service.admin.accessSevice.findByVal(val);
    await this.ctx.render('/admin/access/edit', {
      result,
      moduleList,
    });
  }
  async doEdit() {
    const formdata = this.ctx.request.body;
    console.log(JSON.stringify(formdata));
    const id = decodeURIComponent(formdata.id);
    let moduleName = decodeURIComponent(formdata.moduleName),
      type = decodeURIComponent(formdata.type),
      actionName = decodeURIComponent(formdata.actionName),
      url = decodeURIComponent(formdata.url),
      moduleId = decodeURIComponent(formdata.moduleId),
      sort = decodeURIComponent(formdata.sort),
      description = decodeURIComponent(formdata.description);
    const result = await this.ctx.service.admin.accessSevice.updateOneById(id, type, actionName, url, moduleId, sort, description);
    console.log(result);
    if (result) {
      this.ctx.body = {
        code: 1,
        data: null,
        message: '编辑成功',
      };
    } else {
      this.ctx.body = {
        code: 0,
        data: null,
        message: '编辑失败',
      };
    }
  }
  // 删除一个权限
  async delete() {
    const id = this.ctx.request.query.id;
    const result = await this.ctx.service.admin.accessSevice.deleteOne(id);
    console.log(result);
    if (Number(result) === 1) {
      this.ctx.body = {
        code: 1,
        data: null,
        message: '删除成功',
      };
    } else {
      this.ctx.body = {
        code: 0,
        data: null,
        message: '删除失败',
      };
    }
  }


}

module.exports = AccessController;
