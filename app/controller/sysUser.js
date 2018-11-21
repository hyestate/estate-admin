const Controller = require('egg').Controller;

class SysUserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    console.log(this.ctx.service);
    console.log(this.ctx.service.sysUser);
    console.log(this.ctx.service.sysUser.list);
    console.log(this.ctx.service.sysUser.find);
    ctx.body = await ctx.service.sysUser.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.sysUser.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const sysUser = await ctx.service.sysUser.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = sysUser;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.sysUser.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.sysUser.del(id);
    ctx.status = 200;
  }
}

module.exports = SysUserController;
