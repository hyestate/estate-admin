const Service = require('egg').Service;

class SysTablePriv extends Service {
    async list({ offset = 0, limit = 10 }) {
        return this.ctx.model.SysTablePriv.findAndCountAll({
          offset,
		  limit,
          order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
        });
      }
    async find(id) {
        const sysTablePriv = await this.ctx.model.SysTablePriv.findById(id);
        if (!sysTablePriv) {
            this.ctx.throw(404, 'sysTablePriv not found');
        }
        return sysTablePriv;
    }
    async create(sysTablePriv) {
        return this.ctx.model.SysTablePriv.create(sysTablePriv);
    }

    async update({ id, updates }) {
        const sysTablePriv = await this.ctx.model.SysTablePriv.findById(id);
        if (!sysTablePriv) {
            this.ctx.throw(404, 'sysTablePriv not found');
        }
        return sysTablePriv.update(updates);
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
        const sysTablePriv = await this.ctx.model.SysTablePriv.findById(id);
        if (!sysTablePriv) {
            this.ctx.throw(404, 'sysTablePriv not found');
        }
        return sysTablePriv.destroy();
    }
}

module.exports = SysTablePriv;