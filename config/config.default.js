'use strict';

exports.keys = 'my secret keys';

exports.sequelize = {
    dialect: 'mysql',
    database: 'estate',
    host: 'localhost',
    port: '3306',
    username: 'estate',
    password: 'estate_passwd'
}

exports.view = {
    mapping: {'.html': 'ejs'}
}