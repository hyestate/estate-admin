const Controller = require('egg').Controller;

class SysColumnPrivController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    console.log(this.ctx.service);
    console.log(this.ctx.service.sysColumnPriv);
    console.log(this.ctx.service.sysColumnPriv.list);
    console.log(this.ctx.service.sysColumnPriv.find);
    ctx.body = await ctx.service.sysColumnPriv.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.sysColumnPriv.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const sysColumnPriv = await ctx.service.sysColumnPriv.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = sysColumnPriv;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.sysColumnPriv.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.sysColumnPriv.del(id);
    ctx.status = 200;
  }
}

module.exports = SysColumnPrivController;
