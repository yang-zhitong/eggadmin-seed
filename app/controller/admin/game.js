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
    } else if (type === 'pc') {
      data.type = 'pc';
      data.text = '端游';
    } else {
      return this.notFound();
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
    });
  }

  async add() {
    await this.ctx.render('/admin/game/edit');
  }
  async edit() {
    const { type, id } = this.ctx.params;
    if (!id) return this.fail('');
    const queryGame = await this.ctx.service.admin.gameService.findOne(id);
    await this.ctx.render('/admin/game/edit', {
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
      this.success({ relativePath, name, des, href });
    } catch (error) {
      this.fail(error);
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
        const { img: oldImg } = await this.ctx.service.admin.gameService.findOne(id);
        const oldpath = path.join(this.config.baseDir, 'app', oldImg);
        await unlinkAsnyc(oldpath);
      }
      await this.ctx.service.admin.gameService.editOne({
        id, name, href, type, des,
        img: relativePath,
      });
      this.success({ relativePath, name, des, href });
    } catch (error) {
      this.fail(error);
    }
  }

  // 删除用户
  async delete() {
    const { id } = this.ctx.params;
    if (!id) return this.fail('删除错误');
    const result = await this.ctx.service.admin.gameService.deleteOne(id);
    if (result) {
      this.success('删除成功');
    } else {
      this.fail('删除失败');
    }
  }

  // 只修改表里sortTop或sortLeft字段
  async show() {
    const { id, position } = this.ctx.params;
    let key;
    if (position === 'top') {
      key = 'sortTop';
    } else if (position === 'left') {
      key = 'sortLeft';
    } else {
      return this.fail('错误');
    }
    const result = await this.ctx.service.admin.gameService.show(id, key);
  }
}

module.exports = GameController;
