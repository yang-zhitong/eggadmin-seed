'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    await this.ctx.render('/admin/login');
  }

  // post登陆
  async doLogin() {
    const { username, password } = this.ctx.request.body;
    const md5pawd = await this.ctx.service.tools.md5(password);
    const result = await this.ctx.service.admin.authService.doLogin(username, md5pawd);
    if (result) {
      this.ctx.session.user = result;
      return this.ctx.redirect('/admin');
    }

    return this.ctx.render('/admin/login', {
      code: -1,
      msg: '登录失败, 请重新尝试',
    });
    // 如果有验证码, 还要把session里的验证码取出来对比一遍
    //  if(captcha.toLocaleLowerCase() === this.ctx.session.captcha.toLocaleLowerCase()){
  }

  async logout() {
    this.ctx.session.user = null;
    await this.ctx.redirect('/admin/login');
  }
}

module.exports = LoginController;
