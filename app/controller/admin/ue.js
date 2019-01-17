'use strict';

const BaseController = require('./base');
// const path = require('path');
// const { rename, unlink } = require('fs');
// const { promisify } = require('util');
// const renameAsnyc = promisify(rename);
// const unlinkAsnyc = promisify(unlink);

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

  async handleAction() {
    const { action } = this.ctx.query;
    // if (action === 'uploadimage') {
    //   const { file } = ctx.req;
    //   const path = await saveBuffer('blog', file);
    //   ctx.body = {
    //     url: path,
    //     state: 'SUCCESS',
    //   };
    // } else {
    //   ctx.body = { code: 0 };
    // }
  }

}

module.exports = UEditorController;
