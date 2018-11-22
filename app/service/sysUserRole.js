const Service = require('egg').Service;

class SysUserRole extends Service {

    async list({ offset = 0, limit = 10 }) {
        return this.ctx.model.SysUserRole.findAndCountAll({
          offset,
		  limit,
          order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
        });
      }
    async find(id) {
        const sysUserRole = await this.ctx.model.SysUserRole.findById(id);
        if (!sysUserRole) {
            this.ctx.throw(404, 'sysUserRole not found');
        }
		return sysUserRole;
    }
    async create(sysUserRole) {
        return this.ctx.model.SysUserRole.create(sysUserRole);
    }

    async update({ id, updates }) {
        const sysUserRole = await this.ctx.model.SysUserRole.findById(id);
        if (!sysUserRole) {
            this.ctx.throw(404, 'sysUserRole not found');
        }
        return sysUserRole.update(updates);
    }

    async del(id) {
        const sysUserRole = await this.ctx.model.SysUserRole.findById(id);
        if (!sysUserRole) {
            this.ctx.throw(404, 'sysUserRole not found');
        }
        return sysUserRole.destroy();
    }
}

module.exports = SysUserRole;