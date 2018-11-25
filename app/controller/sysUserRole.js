const Controller = require('egg').Controller;

class SysUserRoleController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    console.log(this.ctx.service);
    console.log(this.ctx.service.sysUserRole);
    console.log(this.ctx.service.sysUserRole.list);
    console.log(this.ctx.service.sysUserRole.find);
    ctx.body = await ctx.service.sysUserRole.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.sysUserRole.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const sysUserRole = await ctx.service.sysUserRole.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = sysUserRole;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.sysUserRole.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.sysUserRole.del(id);
    ctx.status = 200;
  }
}

module.exports = SysUserRoleController;
