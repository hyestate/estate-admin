module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const NewHouses = app.model.define('t_new_houses', {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: STRING(50),
    });

    return NewHouses;
}