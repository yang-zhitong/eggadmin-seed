'use strict';
/**
 * egg 中编写中间件说明 https://eggjs.org/zh-cn/basics/middleware.html
 */

module.exports = () => {
  return function auth(ctx, next) {
    const { redirectTip } = ctx.session;
    if (redirectTip) {
      ctx.locals = redirectTip;
      console.log('redirectTip', redirectTip);
      ctx.session.redirectTip = null;
    }
    return next();
  };
};
