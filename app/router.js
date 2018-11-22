'use strict';

module.exports = app => {
  app.router.get('/', app.controller.home.render);
  app.router.get('/foo', app.controller.foo.render);

  app.resources('sysUsers', '/sysUsers', app.controller.sysUser);
  app.resources('sysRoles', '/sysRoles', app.controller.sysRole);
  app.resources('sysUserRoles', '/sysUserRoles', app.controller.sysUserRole);
  app.resources('sysTablePrivs', '/sysTablePrivs', app.controller.sysTablePriv);
  app.resources('sysColumnPrivs', '/sysColumnPrivs', app.controller.sysColumnPriv);
};
