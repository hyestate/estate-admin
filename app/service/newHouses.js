const Service = require('egg').Service;

class NewHouses extends Service {

    async list({attributes, offset = 0, limit = 10, order= [[ 'created_at', 'desc' ], [ 'id', 'desc' ]]} ) {
        if(attributes==null){
            return this.ctx.model.NewHouses.findAndCountAll({
                offset,
                limit,
                order,
            });
        }else{
            return this.ctx.model.NewHouses.findAndCountAll({
                attributes,
                offset,
                limit,
                order,
            });
        }
      }
    async find(id) {
        const newHouses = await this.ctx.model.NewHouses.findById(id);
        if (!newHouses) {
            this.ctx.throw(404, 'newHouses not found');
        }
		return newHouses;
    }
    async create(newHouses) {
        return this.ctx.model.NewHouses.create(newHouses);
    }

    async update({ id, updates }) {
        const newHouses = await this.ctx.model.NewHouses.findById(id);
        if (!newHouses) {
            this.ctx.throw(404, 'newHouses not found');
        }
        return newHouses.update(updates);
    }

    async del(id) {
        const newHouses = await this.ctx.model.NewHouses.findById(id);
        if (!newHouses) {
            this.ctx.throw(404, 'newHouses not found');
        }
        return newHouses.destroy();
    }
}

module.exports = NewHouses;