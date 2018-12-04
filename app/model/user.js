module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const User = app.model.define('users', {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: STRING(50),
        age: INTEGER(11),
    });

    return User;
}