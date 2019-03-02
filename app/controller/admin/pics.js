'use strict';

const BaseController = require('./base');
const path = require('path');
const { unlink } = require('fs');
const { promisify } = require('util');
const unlinkAsnyc = promisify(unlink);

class RoleController extends BaseController {

  async index() {
    const offset = this.ctx.request.query.page ? Number(this.ctx.request.query.page) : 1;
    const limit = this.config.pageSize;
    const { rows: list, count } = await this.app.model.Pics.findAndCountAll({
      raw: true,
      limit,
      offset: (offset - 1) * limit,
      order: [[ 'createdAt', 'DESC' ]],
    });

    await this.render('/admin/pics/index', {
      list,
      count,
      nowPage: offset,
      pageRange: this.pageRange(count),
    });
  }

  // 新增或者编辑图片页面
  async editPics() {
    const { id } = this.ctx.params;
    let queryItem;
    if (+id > 0) {
      queryItem = await this.ctx.model.Pics.findOne({
        where: { id },
        raw: true,
      });
    }
    await this.render('/admin/pics/edit', {
      queryItem,
    });
  }

  async handleDelete(id) {
    if (id) {
      const { img } = await this.ctx.model.Pics.findOne({
        where: { id },
        raw: true,
      });
      if (img) {
        const oldpath = path.join(this.config.baseDir, 'app', img);
        await unlinkAsnyc(oldpath).catch(e => e);
      }
    }
  }

  async doEditPics() {
    const { id } = this.ctx.params;
    const { title, type } = this.ctx.request.body;
    if (!type) {
      return this.failRender('没有添加类型', '/admin/pics/edit');
    }
    try {
      const file = this.ctx.request.files.find(file => file.field === 'pic');
      // 拿到上传的图片地址
      const img = await this.handleImg(file, id);
      if (img) {
        // 如果传了图片, 就把之前一张删掉, 没有img会返回undefined
        await this.handleDelete(id);
      }
      if (+id > 0) {
        await this.app.model.Pics.update(
          { title, img, type },
          { where: { id } });
        this.successRender('编辑成功', '/admin/pics');
      } else {
        await this.app.model.Pics.create({ title, img, type });
        this.successRender('新增成功', '/admin/pics');
      }
    } catch (error) {
      const postfix = id ? `/${id}` : '';
      this.failRender(JSON.stringify(error), `/admin/pics/edit${postfix}`);
    }
  }

  async deletePics() {
    const { id } = this.ctx.params;
    await this.handleDelete(id);
    await this.app.model.Friendship.destroy({ where: { id } });
    this.successRender('删除成功', '/admin/pics');
  }

}
module.exports = RoleController;
