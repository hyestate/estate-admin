const Service = require('egg').Service;

class User extends Service {

    async list({attributes, offset = 0, limit = 10, order= [[ 'created_at', 'desc' ], [ 'id', 'desc' ]]} ) {
        if(attributes==null){
            return this.ctx.model.User.findAndCountAll({
                offset,
                limit,
                order,
            });
        }else{
            return this.ctx.model.User.findAndCountAll({
                attributes,
                offset,
                limit,
                order,
            });
        }
      }
    async find(id) {
        const user = await this.ctx.model.User.findById(id);
        if (!user) {
            this.ctx.throw(404, 'user not found');
        }
		return user;
    }
    async create(user) {
        return this.ctx.model.User.create(user);
    }

    async update({ id, updates }) {
        const user = await this.ctx.model.User.findById(id);
        if (!user) {
            this.ctx.throw(404, 'user not found');
        }
        return user.update(updates);
    }

    async del(id) {
        const user = await this.ctx.model.User.findById(id);
        if (!user) {
            this.ctx.throw(404, 'user not found');
        }
        return user.destroy();
    }
}

module.exports = User;