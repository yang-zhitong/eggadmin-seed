'use strict';

const BaseController = require('./base');
const path = require('path');
const { rename, unlink } = require('fs');
const { promisify } = require('util');
const renameAsnyc = promisify(rename);
const unlinkAsnyc = promisify(unlink);


class UEditorController extends BaseController {
  // constructor(ctx) {
  //   super(ctx);
  // }
  async index() {
    const { action } = this.ctx.query;
    if (action === 'config') {
      this.ctx.response.type = 'json';
      return this.ctx.redirect('/public/plugins/ueditor/nodejs/config.json');
    }
  }

  async imageUp() {
    const file = this.ctx.request.files[0];
    console.log(file);
    let relativePath;
    if (file) {
      const basename = path.basename(file.filepath).replace(/-/g, '').slice(-13);
      relativePath = path.join('\\public\\news', basename);
      const newpath = path.join(this.config.baseDir, 'app', relativePath);
      await renameAsnyc(file.filepath, newpath);
      this.ctx.body = {
        name: basename,
        originalName: file.filename,
        size: 11598,
        state: 'SUCCESS',
        type: '.png',
        url: relativePath,
      };
    }
  }

  /*
    name:"15478871295557.png"
    originalName:"logo.png"
    size:21450
    state:"SUCCESS"
    type:".png"
    url:"upload/20190119/15478871295557.png"
  */
  async handleAction() {
    const { action } = this.ctx.query;
    if (!action) {
      return this.fail('no action');
    }
    if (action === 'uploadimage') {
      const file = this.ctx.request.files[0];
      console.log(file);
      let relativePath;
      if (file) {
        const basename = path.basename(file.filepath).replace(/-/g, '').slice(-13);
        relativePath = path.join('/public/news', basename);
        const newpath = path.join(this.config.baseDir, 'app', relativePath);
        await renameAsnyc(file.filepath, newpath);
      }
      this.ctx.body = {
        url: relativePath,
        state: 'SUCCESS',
      };
    }
  }

}

module.exports = UEditorController;
