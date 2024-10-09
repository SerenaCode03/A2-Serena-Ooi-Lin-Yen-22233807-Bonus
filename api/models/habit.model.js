module.exports = (sequelize, Sequelize) => {
    const Habit = sequelize.define("habit", {
        habit_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        habit_desc: {
            type: Sequelize.STRING
        },
        habit_status:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users',
                key: 'user_id',
            }
        },
        category_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'categories',
                key: 'category_id',
            }
        }
    });
  
    return Habit;
};