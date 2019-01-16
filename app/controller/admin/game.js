'use strict';

const BaseController = require('./base');
const path = require('path');
const { rename, unlink } = require('fs');
const { promisify } = require('util');
const renameAsnyc = promisify(rename);
const unlinkAsnyc = promisify(unlink);

class GameController extends BaseController {

  constructor(ctx) {
    super(ctx);
    const { type } = this.ctx.params;
    const data = {};
    if (type === 'mb') {
      data.type = 'mb';
      data.text = '手游';
    } else {
      this.ctx.params.type = 'pc';
      data.type = 'pc';
      data.text = '端游';
    }
    ctx.locals.gameType = data;
  }

  async index() {
    const { type } = this.ctx.params;
    const offset = this.ctx.request.query.page ? Number(this.ctx.request.query.page) : 1;
    const { rows: gameList, count } = await this.ctx.service.admin.gameService.index(offset, type);
    await this.render('/admin/game/index', {
      gameList,
      count,
      nowPage: offset,
      pageRange: this.pageRange(count),
    });
  }

  async add() {
    await this.render('/admin/game/edit');
  }
  async edit() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('');
    const queryGame = await this.ctx.service.admin.gameService.findOne(id);
    await this.render('/admin/game/edit', {
      queryGame,
    });
  }

  // post 增加游戏
  async doAdd() {
    const { type } = this.ctx.params;
    const { name, des, href } = this.ctx.request.body;
    try {
      const file = this.ctx.request.files[0];
      let relativePath;
      // 可能没上传文件
      if (file) {
        const basename = path.basename(file.filepath).replace(/-/g, '').slice(-13);
        relativePath = path.join('/public/upload', basename);
        const newpath = path.join(this.config.baseDir, 'app', relativePath);
        await renameAsnyc(file.filepath, newpath);
      }
      await this.ctx.service.admin.gameService.addOne({
        name, href, type, des,
        img: relativePath,
      });
      this.successRender('添加成功', `/admin/game/${type}`);
    } catch (error) {
      this.failRender(JSON.stringify(error), `/admin/game/${type}/add`);
    }
  }
  // 编辑的时候最好把原来的图片删掉
  async doEdit() {
    const { type, id } = this.ctx.params;
    const { name, des, href } = this.ctx.request.body;
    try {
      const file = this.ctx.request.files[0];
      let relativePath;
      if (file) {
        const basename = path.basename(file.filepath).replace(/-/g, '').slice(-13);
        relativePath = path.join('/public/upload', basename);
        const newpath = path.join(this.config.baseDir, 'app', relativePath);
        await renameAsnyc(file.filepath, newpath);
        const { img: oldImg = '' } = await this.ctx.service.admin.gameService.findOne(id);
        if (oldImg) {
          const oldpath = path.join(this.config.baseDir, 'app', oldImg);
          await unlinkAsnyc(oldpath).catch(e => e);
        }
      }
      await this.ctx.service.admin.gameService.editOne({
        id, name, href, type, des,
        img: relativePath,
      });
      this.successRender('编辑成功', `/admin/game/${type}`);
    } catch (error) {
      this.failRender(JSON.stringify(error), '/admin/game/add');
    }
  }

  // 删除用户
  async delete() {
    const { type, id } = this.ctx.params;
    if (!id) {
      return this.failRender('删除失败', `/admin/game/${type}`);
    }
    const result = await this.ctx.service.admin.gameService.deleteOne(id);
    if (result) {
      this.successRender('删除成功', `/admin/game/${type}`);
    } else {
      this.failRender('删除失败', `/admin/game/${type}`);
    }
  }

  // 只修改表里sortTop或sortLeft字段
  // /admin/game/pc/top/14/show
  async show() {
    const { show } = this.ctx.query;
    const isShow = Number(show);
    if (!(isShow === 1 || isShow === 0)) {
      return this.fail('错误');
    }
    const { id, position } = this.ctx.params;
    if (!(position === 'top' || position === 'left')) {
      return this.fail('错误');
    }
    const key = position === 'top' ? 'sortTop' : 'sortLeft';
    const result = await this.ctx.service.admin.gameService.show(id, key, show);
    if (result) {
      this.success({ result });
    } else {
      this.fail('请重试');
    }
  }

  // 列表页 把有sorttop 和 sortleft 的都搜索出来并列表
  async sort() {
    const { type, position } = this.ctx.params;
    if (!(position === 'top' || position === 'left')) {
      return this.fail('错误');
    }
    const key = position === 'top' ? 'sortTop' : 'sortLeft';
    const sortList = await this.ctx.service.admin.gameService.findSorted(type, key);

    await this.render('/admin/game/sort', {
      sortList,
      key,
      position,
    });
  }

  // 接收一个数字即给这个id的游戏排序到这个位置上
  async doSort() {
    const { id, type, position } = this.ctx.params;
    if (!(position === 'top' || position === 'left')) {
      return this.fail('错误');
    }
    const { sort } = this.ctx.request.body;
    const key = position === 'top' ? 'sortTop' : 'sortLeft';
    const result = await this.ctx.service.admin.gameService.show(id, key, sort);
    this.success(result);
  }
}

module.exports = GameController;
