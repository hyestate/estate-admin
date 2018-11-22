const Service = require('egg').Service;

class SysRole extends Service {

    async list({ offset = 0, limit = 10 }) {
        return this.ctx.model.SysRole.findAndCountAll({
          offset,
		  limit,
          order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
        });
      }
    async find(id) {
        const sysRole = await this.ctx.model.SysRole.findById(id);
        if (!sysRole) {
            this.ctx.throw(404, 'sysRole not found');
        }
		return sysRole;
    }
    async create(sysRole) {
        return this.ctx.model.SysRole.create(sysRole);
    }

    async update({ id, updates }) {
        const sysRole = await this.ctx.model.SysRole.findById(id);
        if (!sysRole) {
            this.ctx.throw(404, 'sysRole not found');
        }
        return sysRole.update(updates);
    }

    async del(id) {
        const sysRole = await this.ctx.model.SysRole.findById(id);
        if (!sysRole) {
            this.ctx.throw(404, 'sysRole not found');
        }
        return sysRole.destroy();
    }
}

module.exports = SysRole;