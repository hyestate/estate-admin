module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const SysUserRole = app.model.define('sys_user_roles', {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userid:{
            type:INTEGER,
            unique:"uk_userid_roleid",
        },
        roleid:{
            type:INTEGER,
            unique:"uk_userid_roleid",
        },
    });

    return SysUserRole;
}