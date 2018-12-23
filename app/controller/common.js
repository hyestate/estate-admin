const Controller = require('egg').Controller;

class CommonController extends Controller {

    async query() {
        const ctx = this.ctx
        let tableName,where
        if(ctx.request.method=="POST"){
            tableName = ctx.request.body.tableName
            where = ctx.request.body.where
        }else{
            tableName = ctx.query.tableName
            where = ctx.query.where
        }
        if(tableName==undefined){
            ctx.body = {error:-1,msg:"param error"}
            return
        }
        let sql = "select * from "+tableName
        let whereStr = ""
        if(where!=undefined && where!=""){
            where = JSON.parse(where)
            if(where==undefined){
                ctx.body = {error:-1,msg:"param error"}
                return
            }
            for(let arg in where){
                whereStr+=arg+"='"+where[arg]+"' "
            }
            if(whereStr!="")
                whereStr=" where "+whereStr
        }
        sql += whereStr

        
        let values;
        try{
            values = await this.app.model.query(sql,{ type: 'SELECT'})
        }catch(e){
            ctx.body = {error:-1,msg:e.message}
            return;
        }
        ctx.body = {error:0,msg:"ok",rows:values}
      }
      
    async queryById() {
        const ctx = this.ctx
        let tableName = ctx.query.tableName
        let id = ctx.query.id
        let values;
        try{
            values = await this.app.model.query(`select * from ${tableName} where id='${id}'`,{ type: 'SELECT'})
        }catch(e){
            ctx.body = {error:-1,msg:e.message}
            return;
        }
        
        console.log(values)
        ctx.body = {error:0,msg:"ok",row:values[0]}
      }
    async create() {
        const ctx = this.ctx
        let tableName,item
        console.log("common create",ctx.request.body)
        if(ctx.request.method=="POST"){
            tableName = ctx.request.body.tableName
            item = JSON.parse(ctx.request.body.item)
        }else{
            ctx.body = {error:-1,msg:"method must be post"}
            return
        }
        if(tableName==undefined || tableName=="" ||item==undefined){
            ctx.body = {error:-1,msg:"params error"}
            return
        }
        let values=[]
        let feilds=[]
        for(let feild in item){
            feilds.push("`"+feild+"`")
            values.push("'"+item[feild]+"'")
        }
        console.log(feilds,values)
        let feildsStr = feilds.join(",")
        let valuesStr = values.join(",")
        
        let sql = "insert into `"+tableName+"`("+feildsStr+")values("+valuesStr+")"
        
        let newId;
        try{
            newId=await this.app.model.query(sql,{ type: 'INSERT'})
        }catch(e){
            ctx.body = {error:-1,msg:e.message,newId:newId}
            return;
        }
        
        console.log(newId)
        ctx.body = {error:0,msg:"ok",newId:newId}
    }

    async update() {
        const ctx = this.ctx
        let tableName,item,condition
        if(ctx.request.method=="POST"){
            tableName = ctx.request.body.tableName
            item = JSON.parse(ctx.request.body.item)
            condition = JSON.parse(ctx.request.body.condition)
        }else{
            ctx.body = {error:-1,msg:"method must be post"}
            return
        }
        console.log("update",tableName,item,condition,Object.keys(condition))
        if(tableName==undefined || tableName=="" ||condition,Object.keys(item).length==0 || condition,Object.keys(condition).length==0){
            ctx.body = {error:-1,msg:"params error"}
            return
        }
        let itemArr=[]
        for(let feild in item){
            itemArr.push("`"+feild+"`='"+item[feild]+"'")
        }
        let conditionArr = []
        for(let arg in condition){
            conditionArr.push("`"+arg+"`='"+condition[arg]+"'")
        }
        console.log(itemArr,conditionArr)
        let itemStr = itemArr.join(",")
        let conditionStr = conditionArr.join("and")
        
        let sql = "update `"+tableName+"` set "+itemStr+" where "+conditionStr
        console.log(sql)
        let effect
        try{
            effect = await this.app.model.query(sql,{ type: 'UPDATE'})
        }catch(e){
            ctx.body = {error:-1,msg:e.message,effect:effect}
            return;
        }
        
        console.log(effect)
        ctx.body = {error:0,msg:"ok",effect:effect}
    }

    async delete() {
        const ctx = this.ctx
        let tableName = ctx.query.tableName
        let id = ctx.query.id
        
        if(tableName==undefined || id==undefined){
            ctx.body = {error:-1,msg:"param error"}
            return
        }
        let sql = "delete from `"+tableName+"` where id='"+id+"'"
        let rsp
        try{
            rsp=await this.app.model.query(sql,{ type: 'DELETE'})
            console.log("delete rsp:",rsp)
        }catch(e){
            ctx.body = {error:-1,msg:e.message,data:rsp}
            return;
        }
        console.log(rsp)
        ctx.body = {error:0,msg:"ok",data:rsp}
    }
}

module.exports = CommonController;