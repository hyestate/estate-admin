const Controller = require('egg').Controller;

class SysRoleController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    console.log(this.ctx.service);
    console.log(this.ctx.service.sysRole);
    console.log(this.ctx.service.sysRole.list);
    console.log(this.ctx.service.sysRole.find);
    ctx.body = await ctx.service.sysRole.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.sysRole.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const sysRole = await ctx.service.sysRole.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = sysRole;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.sysRole.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.sysRole.del(id);
    ctx.status = 200;
  }
}

module.exports = SysRoleController;
