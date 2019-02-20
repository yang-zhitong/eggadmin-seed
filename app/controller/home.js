'use strict';

const Controller = require('egg').Controller;

// 匹配资源的正则
const RE = {
  script: new RegExp('<script[^>]+src="(?=\\/\\w)([^"]+)\\.js', 'gi'), // 匹配 js
  link: new RegExp('<link[^>]+href="(?=\\/\\w)([^"]+)\\.css', 'gi'), // 匹配 css
  img: new RegExp('src\s*=\s*"(.+?)"', 'gi'), // 匹配 img
};

class HomeController extends Controller {

  async render(path, data) {
    const html = await this.ctx.renderView(path, data);
    const replaceHtml = html
      .replace(RE.link, `<link rel="stylesheet" href="$1.css?${this.config.staticVersion}"`)
      .replace(RE.img, `src="$1?${this.config.staticVersion}"`);
    this.ctx.body = replaceHtml;
  }

  async index() {
    const ua = this.ctx.request.headers['user-agent'];
    if (ua.match(/Android/i) || ua.match(/webOS/i) || ua.match(/iPhone/i) || ua.match(/BlackBerry/i) || ua.match(/Windows Phone/i)) {
      return this.mobile();
    }

    const [ mbLeft, pcLeft, pcTop, { rows: newList }] = await Promise.all([
      this.ctx.service.admin.gameService.findSorted('sortMBLeft'),
      this.ctx.service.admin.gameService.findSorted('sortPCLeft'),
      this.ctx.service.admin.gameService.findSorted('sortTop'),
      this.ctx.service.admin.newService.index(1, { pageSize: 7 }),
    ]);
    await this.render('/index.html', {
      mbLeft,
      pcLeft,
      pcTop,
      newList,
    });
  }

  async click() {
    const { id } = this.ctx.query;
    const res = await this.ctx.service.admin.gameService.addHot(id);
    this.ctx.body = res;
  }

  async mobile() {
    const res = await this.ctx.service.admin.gameService.findSorted('sortTop');
    const topThree = res.sort((a, b) => (b.hot - a.hot)).slice(0, 3);
    // const res = [
    //   {openTime: "今日新区：10:00 21:00 []"},
    //   {openTime: "今日新区：12:00 []"},
    //   {openTime: "今日新区：13:00 []"},
    //   {openTime: "今日新区：14:00 []"},
    //   {openTime: "今日新区：15:00 []"},
    //   {openTime: "今日新区：17:00 23:00 []"},
    //   {openTime: "今日新区：19:00 []"}
    // ];
    const now = new Date().getHours();
    res.forEach(game => {
      // 先拿到这个游戏所有的开服时间
      const hours = game.openTime.match(/(\d\d?)(:|：)\d+/g);
      // 循环开服时间, 有可能是都开过的, 有可能是一半开了, 一半没开, 有可能是全都没开
      // 把开服时间变成和现在相差几小时, 如果是开过的, 就变成50
      const gaps = hours.map(hour => {
        const gap = +hour.replace(/(\d\d?)(:|：)\d+/, '$1') - now;
        return gap < 0 ? 50 : gap;
      });
      const minGap = Math.min(...gaps); // 然后判断这个最小的gap
      game.gap = minGap;
      // 如果最小的gap是50, 说明已经开放过了
      // 如果最小的gap还是>=0, 说明还有即将开放的, 如果是
      if (minGap === 50 || minGap === 0) {
        game.openText = '火爆开放';
      } else {
        game.openText = '即将开放';
      }
    });
    res.sort((a, b) => (a.gap - b.gap)); // 升序
    await this.render('/mobile.html', { topThree, res });
  }

  async news() {
    await this.render('/news.html', {
    });
  }

  async newsDetail() {
    const { id } = this.ctx.params;
    const queryNew = await this.ctx.service.admin.newService.findOne(id);
    await this.render('/newsDetail.html', {
      queryNew,
    });
  }

  async about() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'about' },
      raw: true,
    });
    await this.render('/about.html', {
      result,
    });
  }

  async customer() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'customer' },
      raw: true,
    });
    await this.render('/customer.html', {
      result,
    });
  }
  async zzsq() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'zzsq' },
      raw: true,
    });
    await this.render('/zzsq.html', {
      result,
    });
  }

  async lyhz() {
    const result = await this.ctx.model.Static.findOne({
      where: { title: 'lyhz' },
      raw: true,
    });
    await this.render('/lyhz.html', {
      result,
    });
  }

  async test() {
    const { Static, Role, User, UserRole } = this.ctx.model;
    await Static.create({ title: 'about' });
    await Static.create({ title: 'customer' });
    await Static.create({ title: 'zzsq' });
    await Static.create({ title: 'lyhz' });

    const role = await Role.create({ title: '管理员' });
    await Role.create({ title: '普通用户' });
    const password = await this.ctx.service.tools.md5('123');
    const user = await User.create({ username: 'admin', password, isSuper: 1 });
    await User.create({ username: 'user1', password, isSuper: 0 });
    await UserRole.create({ rid: 1, uid: 1 });
    await UserRole.create({ rid: 2, uid: 2 });
  }
}

module.exports = HomeController;
