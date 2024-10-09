const db = require("../models");
const Habits = db.habits;
const Op = db.Sequelize.Op;

// Create habit
exports.create = (req, res) => {
    const habit = {
        habit_desc: req.body.habit_desc,
        habit_status: req.body.habit_status,
        user_id: parseInt(req.params.user_id),
        category_id: parseInt(req.params.category_id)
    };

    Habits.create(habit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred"
            });
        });
};

// Get all habits
exports.findAll = (req, res) => {

    Habits.findAll({
        where: {
            category_id: parseInt(req.params.category_id),
            user_id: parseInt(req.params.user_id)
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one habit by id
exports.findOne = (req, res) => {
    Habits.findOne({
        where: {
            user_id: req.params.user_id,
            habit_id: req.params.habit_id,
            category_id: req.params.category_id
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Update one habit by id
exports.update = (req, res) => {
    const habit_id = req.params.habit_id;

    Habits.update(req.body, {
        where: { habit_id: habit_id, user_id: req.params.user_id, category_id: req.params.category_id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Habit was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Habit`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Habit with id=" + habit_id
        });
    });
};

// Delete one habit by id
exports.delete = (req, res) => {
    const habit_id = req.params.habit_id;

    Habits.destroy({
        where: { habit_id: habit_id, user_id: req.params.user_id, category_id: req.params.category_id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Habit was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Habit`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Habit with id=" + habit_id
        });
    });
};