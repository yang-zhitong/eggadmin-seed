'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const { rename } = require('fs');
const { promisify } = require('util');
const renameAsnyc = promisify(rename);

class BaseController extends Controller {
  constructor(ctx) {
    super(ctx);
    ctx.locals.userInfo = this.ctx.session.user;

    ctx.locals.userMenu = [
      { name: '游戏', url: '/admin/game' },
      // { name: '手游', url: '/admin/game/mb' },
      { name: '游戏首页排序', children: [
        { name: '顶部', url: '/admin/sort/top' },
        { name: '左侧端游', url: '/admin/sort/pcleft' },
        { name: '左侧手游', url: '/admin/sort/mbleft' },
      ] },
      { name: '新闻', url: '/admin/new' },
      { name: '几个静态页面', children: [
        { name: '关于我们', url: '/admin/about' },
        { name: '客服中心', url: '/admin/customer' },
        { name: '资质授权', url: '/admin/zzsq' },
        { name: '联运合作', url: '/admin/lyhz' },
      ] },
      { name: '友情链接', url: '/admin/friend' },
      { name: '游戏/玩家图片', url: '/admin/pics' },
      // { name: '网站刷新', url: '/admin/menu' },
    ]; // 菜单栏
    if (ctx.locals.userInfo.isSuper) {
      ctx.locals.userMenu.push({ name: '静态页图片管理', url: '/admin/ue/images' });
      ctx.locals.userMenu.push({ name: '用户管理', url: '/admin/manage' });
    }
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

  successRender(msg, url) {
    this.ctx.session.redirectTip = { code: 1, msg };
    return this.ctx.redirect(url);
  }

  failRender(msg, url) {
    this.ctx.session.redirectTip = { code: -1, msg };
    return this.ctx.redirect(url);
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

  pageRange(count, size = this.config.pageSize) {
    const page = Math.ceil(count / size);
    return page;
  }

  async handleImg(file) {
    let relativePath;
    if (file) {
      const basename = path.basename(file.filepath).replace(/-/g, '').slice(-13);
      relativePath = path.join('/public/upload', basename);
      const newpath = path.join(this.config.baseDir, 'app', relativePath);
      await renameAsnyc(file.filepath, newpath);
    }
    return relativePath;
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
