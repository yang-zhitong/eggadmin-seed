'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // router.get('/admin/captcha', controller.admin.base.captcha); // 验证码

  router.get('/admin', controller.admin.manage.index);
  router.get('/admin/login', controller.admin.login.index); // 登录页
  router.post('/admin/login', controller.admin.login.doLogin); // 登录请求成功跳转
  router.get('/admin/logout', controller.admin.login.logout);

  // 用户
  router.get('/admin/manage', controller.admin.manage.index);
  router.get('/admin/manage/add', controller.admin.manage.add);
  router.post('/admin/manage/add', controller.admin.manage.doAdd); // ok
  router.get('/admin/manage/edit', controller.admin.manage.edit);
  router.post('/admin/manage/edit', controller.admin.manage.doEdit); //
  router.get('/admin/manage/delete', controller.admin.manage.delete); //

  // 角色
  router.get('/admin/role', controller.admin.role.index);
  router.get('/admin/role/add', controller.admin.role.add);
  router.post('/admin/role/add', controller.admin.role.doAdd); //
  router.get('/admin/role/edit', controller.admin.role.edit);
  router.post('/admin/role/edit', controller.admin.role.doEdit); //
  router.get('/admin/role/delete', controller.admin.role.delete); //

  // 权限管理
  router.get('/admin/access', controller.admin.access.index);
  router.get('/admin/access/add', controller.admin.access.add);
  router.post('/admin/access/add', controller.admin.access.doAdd);
  router.get('/admin/access/edit', controller.admin.access.edit);
  router.post('/admin/access/edit', controller.admin.access.doEdit);
  router.get('/admin/access/delete', controller.admin.access.delete);
};
