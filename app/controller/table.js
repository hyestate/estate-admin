const Controller = require('egg').Controller;
//const sequelize = require('sequelize');

class TableController extends Controller {
  async show() {
    const ctx = this.ctx;
    try{
      let tableNames = await this.app.model.query("show tables",{ type: 'SHOWTABLES'});
      let filtTableNames = [];
      for(let i in tableNames){
        let tableName=tableNames[i]; 
        //if(tableName.substring(0,3)=="sys")
        //  continue;
        filtTableNames.push(tableName);
      }
      console.log(filtTableNames);
      ctx.body = JSON.stringify(filtTableNames);

    }catch(e){
      ctx.body = JSON.stringify({error:e.message});
    }
  };
  
  async desc() {
    const ctx = this.ctx;
    let tableName = ctx.params.table;
    if(tableName==undefined || tableName==""){
      ctx.body = JSON.stringify({error:"参数错误,table不能为空"});
      return;
    }
    try{
      let dbName = "estate";
      let tableDesc = await this.app.model.query(`select column_name,
      column_comment from information_schema.columns where table_schema ='${dbName}' and
      table_name = '${tableName}'`,{ type: 'SELECT'})

      //let tableDesc = await this.app.model.query(`desc ${tableName}`,{ type: 'DESCRIBE'})
      /*
      let columns=[];
      let comments = {};
      tableDesc.forEach(element => {
        columns.push(element.column_name);
        comments[element.column_name] = element.column_comment;
      });
      */
      ctx.body = JSON.stringify(tableDesc);
    }catch(e){
      ctx.body = JSON.stringify({error:e.message});
    }
  };
}

module.exports = TableController;
