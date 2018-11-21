'use strict';

module.exports = app => {
  app.router.get('/', app.controller.home.render);
  app.router.get('/foo', app.controller.foo.render);

  app.resources('users', '/users', app.controller.user);
  app.resources('sysUsers', '/sysUsers', app.controller.sysUser);
};
