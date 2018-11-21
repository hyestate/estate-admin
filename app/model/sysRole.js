module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const SysRole = app.model.define('sys_roles', {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
            type:STRING(50),
            unique:true,
        },
    });

    return SysRole;
}