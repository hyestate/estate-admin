const Service = require('egg').Service;

class SysColumnPriv extends Service {
    async list({ offset = 0, limit = 10 }) {
        return this.ctx.model.SysColumnPriv.findAndCountAll({
          offset,
		  limit,
          order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
        });
      }
    async find(id) {
        const sysColumnPriv = await this.ctx.model.SysColumnPriv.findById(id);
        if (!sysColumnPriv) {
            this.ctx.throw(404, 'sysColumnPriv not found');
        }
        return sysColumnPriv;
    }
    async create(sysColumnPriv) {
        return this.ctx.model.SysColumnPriv.create(sysColumnPriv);
    }

    async update({ id, updates }) {
        const sysColumnPriv = await this.ctx.model.SysColumnPriv.findById(id);
        if (!sysColumnPriv) {
            this.ctx.throw(404, 'sysColumnPriv not found');
        }
        return sysColumnPriv.update(updates);
        /*添加权限
        1:Select,2:Insert,4:Update,8:Delete
        增加Update权限
        update estate.sys_tables_priv set tablePriv=tablePriv|4 where id=60;
        删除Update权限
        update estate.sys_tables_priv set tablePriv=tablePriv&~4 where id=60;
        设置Select,Insert,Update权限 1&2&4 1+2+4
        update estate.sys_tables_priv set tablePriv=7 where id=60;
        */
    }

    async del(id) {
        const sysColumnPriv = await this.ctx.model.SysColumnPriv.findById(id);
        if (!sysColumnPriv) {
            this.ctx.throw(404, 'sysColumnPriv not found');
        }
        return sysColumnPriv.destroy();
    }
}

module.exports = SysColumnPriv;