const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

// Create user
exports.create = (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    Users.create(user)
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

// Get all users
exports.findAll = (req, res) => {

    Users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred"
            });
        });
};

// Get one user by id
exports.findOne = (req, res) => {
    const user_id = req.params.user_id;

    Users.findByPk(user_id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + user_id
            });
        }
    );
};

// Update one user by id
exports.update = (req, res) => {
    const user_id = req.params.user_id;

    Users.update(req.body, {
        where: { user_id: user_id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "User was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update User`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating User with id=" + user_id
        });
    });
};

// Delete one user by id
exports.delete = (req, res) => {
    const user_id = req.params.user_id;

    Users.destroy({
        where: { user_id: user_id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "User was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete User`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + user_id
        });
    });
};