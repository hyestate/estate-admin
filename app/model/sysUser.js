module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const SysUser = app.model.define('sys_users', {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: STRING(50),
        password: STRING(50),
    });

    return SysUser;
}