module.exports = app => {
    const Modeles = require("../../controllers/modele.controller.js");

    var router = require("express").Router();

    // Create a new Model
    router.post("/", Modeles.create);

    // Retrieve all Models
    router.get("/", Modeles.findAll);

    // Retrieve a single Model with id
    router.get("/:id", Modeles.findOne);

    // Update a Model with id
    router.put("/:id", Modeles.update);

    // Delete a Model with id
    router.delete("/:id", Modeles.delete);

    // Delete all Models
    router.delete("/", Modeles.deleteAll);

    app.use('/api/modeles', router);
};