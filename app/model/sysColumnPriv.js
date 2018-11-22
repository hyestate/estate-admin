module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const SysColumnPriv = app.model.define('sys_column_privs', {
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
        columnName: {
            type:STRING(50),
        },
        columnPriv:{
            type:STRING(50),
        }
    });

    return SysColumnPriv;
}