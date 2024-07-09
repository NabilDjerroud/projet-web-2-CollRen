const db = require("../models");
const Image = db.images;
const Op = db.Sequelize.Op;

// Créer et enregistrer de nouvelles images
exports.create = (req, res) => {
    console.log("estou no create image");
    console.log("req. body", req.body);
    console.log("req.files",req.files);

    // Mappage des données des fichiers pour les stocker dans la base de données
    const imagesData = req.files.map(file => ({
        voiture_id: req.query.voiture_id,
        filename: file.filename,
        chemin: file.filename // Enregistrer uniquement le nom du fichier avec l'extension
    }));

    // Enregistrer les données des images dans la base de données
    Image.bulkCreate(imagesData)
        .then(data => {
            res.status(200).json({ message: 'Images téléchargées et enregistrées avec succès !', data });
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la création de l'image."
            });
        });
};

// Mettre à jour l'image principale
exports.updateEstPrincipale = async (req, res) => {
    const { id } = req.params;
    const { est_principale } = req.body;

    try {
        const image = await Image.findByPk(id);
        if (!image) {
            return res.status(404).send({ message: "Image non trouvée" });
        }

        if (est_principale) {
            // Mettre est_principale à false pour toutes les autres images du même voiture_id
            await Image.update({ est_principale: false }, {
                where: {
                    voiture_id: image.voiture_id,
                    id: { [Op.ne]: id }
                }
            });
        }

        // Mettre à jour l'image sélectionnée
        image.est_principale = est_principale;
        await image.save();

        res.status(200).send({ message: "Image mise à jour avec succès" });
    } catch (error) {
        res.status(500).send({
            message: "Erreur lors de la mise à jour de l'image avec l'id=" + id
        });
    }
};

// Mettre à jour une image
exports.update = (req, res) => {
    const id = req.params.id;

    Image.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "L'image a été mise à jour avec succès."
                });
            } else {
                res.send({
                    message: `Impossible de mettre à jour l'image avec l'id=${id}. Peut-être que l'image n'a pas été trouvée ou que req.body est vide !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erreur lors de la mise à jour de l'image avec l'id=" + id
            });
        });
};

// Trouver toutes les images
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Image.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur est survenue lors de la récupération des images."
            });
        });
};

// Trouver une image par son id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Image.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Impossible de trouver l'image avec l'id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Erreur lors de la récupération de l'image avec l'id=" + id
            });
        });
};

// Supprimer une image par son id
exports.delete = (req, res) => {
    const id = req.params.id;

    Image.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "L'image a été supprimée avec succès !"
                });
            } else {
                res.send({
                    message: `Impossible de supprimer l'image avec l'id=${id}. Peut-être que l'image n'a pas été trouvée !`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Impossible de supprimer l'image avec l'id=" + id
            });
        });
};

// Supprimer toutes les images
exports.deleteAll = (req, res) => {
    Image.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} images ont été supprimées avec succès !` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Une erreur est survenue lors de la suppression de toutes les images."
            });
        });
};