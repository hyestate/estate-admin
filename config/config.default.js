'use strict';

exports.keys = 'my secret keys';

exports.sequelize = {
    dialect: 'mysql',
    database: 'estate',
    //host: 'localhost',
    host: '47.98.153.117',
    port: '3306',
    username: 'estate',
    password: 'estate_passwd'
}

exports.view = {
    mapping: {'.html': 'ejs'}
}