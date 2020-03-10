'use strict';
/**
 * 验证是否登录的中间件
 * egg 中编写中间件说明 https://eggjs.org/zh-cn/basics/middleware.html
 */

module.exports = () => {
  return function auth(ctx, next) {
    // 如果非后台直接跳过
    if (ctx.path.indexOf('admin') === -1) {
      return next();
    }
    // 其他情况判断登录session是否存在
    const { user } = ctx.session;
    // 如果没有session并且是请求登录页面或接口也跳过
    if (ctx.path === '/admin/login') {
      if (user) {
        // console.log(user);
        // 如果是已登录状态进入登录页直接跳转到首页
        return ctx.redirect('/admin');
      }
      return next();
    }

    if (user) {
      // 如果存在延长有效期
      ctx.session.save();
      return next();
    }

    return ctx.redirect('/admin/login');
  };
};
