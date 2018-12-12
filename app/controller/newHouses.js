const Controller = require('egg').Controller;

class NewHousesController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.helper.parseInt(ctx.query.limit),
      offset: ctx.helper.parseInt(ctx.query.offset),
    };
    let headers = [];
    ctx.body = await ctx.service.newHouses.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.newHouses.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const newHouses = await ctx.service.newHouses.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = newHouses;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.newHouses.update({ id, updates: body });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.newHouses.del(id);
    ctx.status = 200;
  }
}

module.exports = NewHousesController;
