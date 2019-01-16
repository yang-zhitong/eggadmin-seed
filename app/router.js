'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // router.get('/admin/captcha', controller.admin.base.captcha); // 验证码

  router.get('/admin', controller.admin.game.index);
  router.get('/admin/login', controller.login.index); // 登录页
  router.post('/admin/login', controller.login.doLogin); // 登录请求成功跳转
  router.get('/admin/logout', controller.login.logout);

  // 用户
  router.get('/admin/manage', controller.admin.manage.index);
  router.get('/admin/manage/add', controller.admin.manage.add); // 表单页面
  router.get('/admin/manage/:id/edit', controller.admin.manage.edit); // 表单页面
  router.post('/admin/manage/add', controller.admin.manage.doAdd); // ok
  router.post('/admin/manage/:id/edit', controller.admin.manage.doEdit); //
  router.get('/admin/manage/:id/delete', controller.admin.manage.delete); //

  // 角色
  router.get('/admin/role', controller.admin.role.index);
  router.get('/admin/role/add', controller.admin.role.add); // 表单页面
  router.get('/admin/role/:id/edit', controller.admin.role.edit); // 表单页面
  router.post('/admin/role/add', controller.admin.role.doAdd); // ok
  router.post('/admin/role/:id/edit', controller.admin.role.doEdit); //
  router.get('/admin/role/:id/delete', controller.admin.role.delete); //

  // 权限管理

  // 游戏
  router.get('/admin/game/:type', controller.admin.game.index);
  router.get('/admin/game/:type/add', controller.admin.game.add);
  router.get('/admin/game/:type/:id/edit', controller.admin.game.edit);
  router.post('/admin/game/:type/add', controller.admin.game.doAdd);
  router.post('/admin/game/:type/:id/edit', controller.admin.game.doEdit);
  router.get('/admin/game/:type/:id/delete', controller.admin.game.delete);

  router.get('/admin/game/:type/:position/sort', controller.admin.game.sort); // 游戏出现在首页上
  router.post('/admin/game/:type/:position/:id/sort', controller.admin.game.doSort); // 游戏出现在首页上
  router.get('/admin/game/:type/:position/:id/show', controller.admin.game.show); // 游戏出现在首页上

  // 新闻
  router.get('/admin/news', controller.admin.new.index);
  router.get('/admin/news/add', controller.admin.new.add); // 表单页面
  router.get('/admin/news/:id/edit', controller.admin.new.edit); // 表单页面
  router.post('/admin/news/add', controller.admin.new.doAdd); // ok
  router.post('/admin/news/:id/edit', controller.admin.new.doEdit); //
  router.post('/admin/news/:id/sort', controller.admin.new.doSort); //
  router.get('/admin/news/:id/delete', controller.admin.new.delete); //
};
