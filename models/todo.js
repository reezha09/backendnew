module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define('todos', {
        title: Datatypes.STRING,
        description: DataTypes.STRING
    });

    return Todos;
};