const db = require("../models");
const constructeurModel = require("../models/constructeur.model");
const Modele = db.modeles;
const Constructeur = db.constructeurs;

const Op = db.Sequelize.Op;

// Create and Save a new Model
exports.create = (req, res) => {

    // Save Model in the database
    Modele.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Modele."
            });
        });
};

// Retrieve all Models from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    console.log(condition);

    Modele.findAll({ include: [{ model: Constructeur }] })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving models."
            });
        });
};

// Find a single Model with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Modele.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Model with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Model with id=" + id
            });
        });
};

// Update a Model by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Modele.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Model was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Model with id=${id}. Maybe Model was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Model with id=" + id
            });
        });
};

// Delete a Model with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Modele.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Model was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Model with id=${id}. Maybe Model was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Model with id=" + id
            });
        });
};

// Delete all Models from the database.
exports.deleteAll = (req, res) => {
    Modele.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Models were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all models."
            });
        });
};