const db = require("../models");
const Categories = db.categories;
const Op = db.Sequelize.Op;

// Create category
exports.create = (req, res) => {
    const category = {
        category_name: req.body.category_name,
        user_id: parseInt(req.params.user_id)
    };

    Categories.create(category)
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

// Get all categories
exports.findAll = (req, res) => {

    Categories.findAll({
        where: {
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

// Get one category by id
exports.findOne = (req, res) => {
    Categories.findOne({
        where: {
            user_id: req.params.user_id,
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

// Update one category by id
exports.update = (req, res) => {
    const category_id = req.params.category_id;

    Categories.update(req.body, {
        where: { category_id: category_id, user_id: req.params.user_id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Category was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Category`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Category with id=" + category_id
        });
    });
};

// Delete one phone by id
exports.delete = (req, res) => {
    const category_id = req.params.category_id;

    Categories.destroy({
        where: { category_id: category_id, user_id: req.params.user_id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Category was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Category`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Category with id=" + category_id
        });
    });
};