const Controller = require('egg').Controller;

class SysTablePrivController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    console.log(this.ctx.service);
    console.log(this.ctx.service.sysTablePriv);
    console.log(this.ctx.service.sysTablePriv.list);
    console.log(this.ctx.service.sysTablePriv.find);
    ctx.body = await ctx.service.sysTablePriv.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.sysTablePriv.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const sysTablePriv = await ctx.service.sysTablePriv.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = sysTablePriv;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.sysTablePriv.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.sysTablePriv.del(id);
    ctx.status = 200;
  }
}

module.exports = SysTablePrivController;
