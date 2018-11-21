
CREATE TABLE `sys_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

CREATE TABLE `sys_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

CREATE TABLE `sys_user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `roleid` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userid_roleid` (`userid`,`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;


/*
select: 有表级权限不限制,没有表权限使用权限查询出来的字段
    1. 是否有表级权限 sys_tables_priv.tablePriv
    2. 是否有字段级权限 sys_tables_priv.columnPriv
    3. 查询字段级权限的字段
insert: 有表级权限不限制,没有表权限使用权限查询出来的字段对插入对象进行校验
delete: 删除权限只有表级权限
update: 有表级权限不限制,没有表权限使用权限查询出来的字段对插入对象进行校验

新增表级权限
    1. 检查是否有表级权限
    2. 没有记录则insert,有记录则updte tablePriv字段
删除表级权限
    1. updte tablePriv字段
新增字段级权限修改sys_tables_priv和sys_columns_priv
    1. 检查是否有表级权限
    2. 没有记录则insert,有记录则updte columnPriv字段
删除字段级权限修改sys_tables_priv和sys_columns_priv
    1. updte columnPriv字段
*/
CREATE TABLE `sys_tables_priv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleid` int(11) NOT NULL,
  `tableName` varchar(45) NOT NULL,
  `tablePriv` set('Select','Insert','Update','Delete') NOT NULL DEFAULT '',
  `columnPriv` set('Select','Insert','Update') NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `index2` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;


CREATE TABLE `sys_columns_priv` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleid` int(11) NOT NULL,
  `tableName` varchar(45) NOT NULL,
  `columnName` varchar(45) NOT NULL,
  `columnPriv` set('Select','Insert','Update') NOT NULL DEFAULT '',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `index2` (`roleid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



