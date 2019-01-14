'use strict';

const BaseController = require('./base');

class LoginController extends BaseController {
  async index() {
    await this.render('/admin/login');
  }

  /*
    $.post('/admin/login', {
      username: 'admin',
      password: '123',
    }, (data) => console.log(data));
  */
  // post登陆
  async doLogin() {
    const { username, password } = this.ctx.request.body;
    const md5pawd = await this.ctx.service.tools.md5(password);
    const result = await this.ctx.service.admin.authService.doLogin(username, md5pawd);
    if (result) {
      this.ctx.session.user = result;
      return this.ctx.redirect('/admin');
    }
    return this.fail('fail');
    // 如果有验证码, 还要把session里的验证码取出来对比一遍
    //  if(captcha.toLocaleLowerCase() === this.ctx.session.captcha.toLocaleLowerCase()){
  }

  async logout() {
    this.ctx.session.user = null;
    await this.ctx.redirect('/admin/login');
  }
}

module.exports = LoginController;
