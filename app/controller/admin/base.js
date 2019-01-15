'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  constructor(ctx) {
    super(ctx);
    ctx.locals.userInfo = this.ctx.session.user;
    ctx.locals.userMenu = [
      { name: 'PC端游', url: '/admin/game/pc' },
      { name: '手机游戏', url: '/admin/game/mb' },
      { name: '用户管理', url: '/admin/manage' },
      { name: '角色管理', url: '/admin/role' },
      // { name: '菜单管理', url: '/admin/access' },
    ]; // 菜单栏
  }

  /**
   * 可能存在的后期扩展, 渲染模板使用共用方法
   *
   * @param {any} viewPath 模版地址
   * @param {any} viewData 模版所需要的数据
   * @return {promise} 返回
   * @memberof BaseController
   */
  render(viewPath, viewData) {
    return this.ctx.render(viewPath, viewData);
  }

  success(data) {
    const dataKey = typeof data === 'string' ? 'msg' : 'data';
    this.ctx.body = {
      code: 1,
      [dataKey]: data,
    };
  }
  fail(data) {
    const dataKey = typeof data === 'string' ? 'msg' : 'data';
    this.ctx.body = {
      code: -1,
      [dataKey]: data,
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
  // async index() {
  //   await this.ctx.render('/admin/index.html');
  // }

  // // 图片验证码
  // async captcha() {
  //   const result = await this.ctx.service.tools.svgCaptcha();
  //   this.ctx.response.type = 'image/svg+xml';
  //   this.ctx.body = result.data;
  // }

  // // 获取现在时间
  // async getTime() {
  //   const d = new Date();
  //   return d.getTime();
  // }
}

module.exports = BaseController;
