module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const SysTablePriv = app.model.define('sys_table_privs', {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        roleid: {
            type:INTEGER,
        },
        tableName: {
            type:STRING(50),
        },
        tablePriv:{
            type:STRING(50),
        },
        columnPriv:{
            type:STRING(50),
        }
    });

    return SysTablePriv;
}