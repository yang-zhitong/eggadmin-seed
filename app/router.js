'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/click', controller.home.click);
  router.get('/mobile', controller.home.mobile);
  router.get('/news', controller.home.news);
  router.get('/news/:id', controller.home.newsDetail);
  router.get('/about', controller.home.about);
  router.get('/customer', controller.home.customer);
  router.get('/lyhz', controller.home.lyhz);
  router.get('/zzsq', controller.home.zzsq);
  // router.get('/test-init', controller.home.test);

  // router.get('/admin/captcha', controller.admin.base.captcha); // 验证码

  router.get('/admin', controller.admin.game.index);
  router.get('/admin/login', controller.login.index); // 登录页
  router.post('/admin/login', controller.login.doLogin); // 登录请求成功跳转
  router.get('/admin/logout', controller.login.logout);

  // 处理百度编辑器ueditor的请求
  router.get('/admin/ue', controller.admin.ue.index);
  router.post('/admin/ue', controller.admin.ue.handleAction);
  router.get('/admin/ue/images', controller.admin.ue.images);
  router.get('/admin/ue/images/del', controller.admin.ue.imageDel);

  // 编辑关于我们与客服中心
  router.get('/admin/about', controller.admin.static.about);
  router.post('/admin/about', controller.admin.static.editAbout);
  router.get('/admin/customer', controller.admin.static.customer);
  router.post('/admin/customer', controller.admin.static.editCustomer);
  router.get('/admin/zzsq', controller.admin.static.zzsq);
  router.post('/admin/zzsq', controller.admin.static.editzzsq);
  router.get('/admin/lyhz', controller.admin.static.lyhz);
  router.post('/admin/lyhz', controller.admin.static.editlyhz);
  router.get('/admin/menu', controller.admin.static.menu);
  router.get('/admin/doRefresh', controller.admin.static.doRefresh);

  // 友情链接
  router.get('/admin/friend', controller.admin.static.friend);
  router.get('/admin/friend/:id', controller.admin.static.editFriend);
  router.post('/admin/friend/:id', controller.admin.static.doEditFriend);
  router.get('/admin/friend/delete/:id', controller.admin.static.deleteFriend);

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
  router.get('/admin/game', controller.admin.game.index);
  router.get('/admin/game/add', controller.admin.game.add);
  router.get('/admin/game/:id/edit', controller.admin.game.edit);
  router.post('/admin/game/add', controller.admin.game.doAdd);
  router.post('/admin/game/:id/edit', controller.admin.game.doEdit);
  router.get('/admin/game/:id/delete', controller.admin.game.delete);
  router.get('/admin/game/:id/show/:position', controller.admin.game.show); // 展示广告在某个位置上

  router.get('/admin/sort/:position', controller.admin.game.sort); // 展示的广告的排序页面, 如果是顶部，其实是没有type的
  router.post('/admin/sort/:position/:id', controller.admin.game.doSort); // 接收传来的顺序

  // 新闻
  router.get('/admin/new', controller.admin.new.index);
  router.get('/admin/new/add', controller.admin.new.add); // 表单页面
  router.get('/admin/new/:id/edit', controller.admin.new.edit); // 表单页面
  router.post('/admin/new/add', controller.admin.new.doAdd); // ok
  router.post('/admin/new/:id/edit', controller.admin.new.doEdit); //
  router.post('/admin/new/:id/sort', controller.admin.new.doSort); //
  router.get('/admin/new/:id/delete', controller.admin.new.delete); //

  // 图片
  router.get('/admin/pics', controller.admin.pics.index);
  router.get('/admin/pics/edit/:id?', controller.admin.pics.editPics);
  router.post('/admin/pics/edit/:id?', controller.admin.pics.doEditPics);
  router.get('/admin/pics/delete/:id', controller.admin.pics.deletePics);
};
