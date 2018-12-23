const Service = require('egg').Service;

class Common extends Service {

    async list({tableName} ) {
        let tableDesc = await this.app.model.query(`select * from '${tableName}'`,{ type: 'SELECT'})
      }
    async find({tableName,id}) {
        const Common = await this.app.model.query(`select * from '${tableName} where id='${id}'`,{ type: 'SELECT'})
        if (!Common) {
            this.ctx.throw(404, 'Common not found');
        }
		return Common;
    }
    async create(Common) {
        return undefined;
    }

    async update({ id, updates }) {
        return undefined
    }

    async del(id) {
        return undefined
    }
}

module.exports = Common;