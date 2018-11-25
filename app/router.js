'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', app.controller.home.render);
  router.get('/foo', app.controller.foo.render);
  router.get('/showTables', app.controller.table.show);
  router.get('/descTable/:table', app.controller.table.desc);

  app.resources('sysUsers', '/sys_users', app.controller.sysUser);
  app.resources('sysRoles', '/sys_roles', app.controller.sysRole);
  app.resources('sysUserRoles', '/sys_user_roles', app.controller.sysUserRole);
  app.resources('sysTablePrivs', '/sys_table_privs', app.controller.sysTablePriv);
  app.resources('sysColumnPrivs', '/sys_column_privs', app.controller.sysColumnPriv);
};
