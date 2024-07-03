const { Model } = require("sequelize");
const db = require("../models");
const Voiture = db.voitures;
const Op = db.Sequelize.Op;
const Modele = db.modeles
const Transmission = db.transmissions
const Corps = db.corps
const Motopropulseur = db.motopropulseurs
const Carburant = db.carburants
const Image = db.images


const Constructeur = require("../models/constructeur.model")

// Create and Save a new Voiture
exports.create = (req, res) => {

    // Save Voiture in the database
    Voiture.create(req.body)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Voiture."
            });
        });
};

// Retrieve all Voitures from the database.
// exports.findAll = (req, res) => {
//     const title = req.query.title;
//     var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

//     console.log("condition ", condition );

//     Voiture.findAll({ where: condition })
//         .then(data => {
//             res.send(data);
//             console.log("data", data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving voitures."
//             });
//         });
// };

exports.findAll = (req, res) => {
    Voiture.findAll()
        .then(data => {
            console.log("data", data); // Verifica os dados retornados
            res.send(data);
        })
        .catch(err => {
            console.error("Erro ao buscar voitures:", err);
            res.status(500).send({
                message: err.message || "Ocorreu um erro ao recuperar os dados de voitures."
            });
        });
};

// Find a single Voiture with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Voiture.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Voiture with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Voiture with id=" + id
            });
        });
};

// Update a Voiture by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Voiture.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Voiture was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Voiture with id=${id}. Maybe Voiture was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Voiture with id=" + id
            });
        });
};

// Delete a Voiture with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Voiture.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Voiture was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Voiture with id=${id}. Maybe Voiture was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Voiture with id=" + id
            });
        });
};

// Delete all Voitures from the database.
exports.deleteAll = (req, res) => {
    Voiture.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Voitures were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all voitures."
            });
        });
};