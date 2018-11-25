const Service = require('egg').Service;

class SysUser extends Service {

    async list({attributes, offset = 0, limit = 10, order= [[ 'created_at', 'desc' ], [ 'id', 'desc' ]]} ) {
        if(attributes==null){
            return this.ctx.model.SysUser.findAndCountAll({
                offset,
                limit,
                order,
            });
        }else{
            return this.ctx.model.SysUser.findAndCountAll({
                attributes,
                offset,
                limit,
                order,
            });
        }
      }
    async find(id) {
        const sysUser = await this.ctx.model.SysUser.findById(id);
        if (!sysUser) {
            this.ctx.throw(404, 'sysUser not found');
        }
		return sysUser;
    }
    async create(sysUser) {
        return this.ctx.model.SysUser.create(sysUser);
    }

    async update({ id, updates }) {
        const sysUser = await this.ctx.model.SysUser.findById(id);
        if (!sysUser) {
            this.ctx.throw(404, 'sysUser not found');
        }
        return sysUser.update(updates);
    }

    async del(id) {
        const sysUser = await this.ctx.model.SysUser.findById(id);
        if (!sysUser) {
            this.ctx.throw(404, 'sysUser not found');
        }
        return sysUser.destroy();
    }
}

module.exports = SysUser;