'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', app.controller.home.render);
  router.get('/foo', app.controller.foo.render);
  router.get('/showTables', app.controller.table.show);
  router.get('/descTable/:table', app.controller.table.desc);

  //查询
  app.get('common', '/common/query', app.controller.common.query);
  app.post('common', '/common/query', app.controller.common.query);
  app.get('common', '/common/queryById', app.controller.common.queryById);
  //新增
  app.post('common', '/common/create', app.controller.common.create);
  //修改
  app.post('common', '/common/update', app.controller.common.update);
  //删除
  app.get('common', '/common/delete', app.controller.common.delete);


  app.resources('users', '/users', app.controller.user);
  app.resources('newHouses', '/t_new_houses', app.controller.newHouses);

  app.resources('sysUsers', '/sys_users', app.controller.sysUser);
  app.resources('sysRoles', '/sys_roles', app.controller.sysRole);
  app.resources('sysUserRoles', '/sys_user_roles', app.controller.sysUserRole);
  app.resources('sysTablePrivs', '/sys_table_privs', app.controller.sysTablePriv);
  app.resources('sysColumnPrivs', '/sys_column_privs', app.controller.sysColumnPriv);
};
