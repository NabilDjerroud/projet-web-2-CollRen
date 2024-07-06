module.exports = app => {
    const images = require("../../controllers/image.controller.js");
    const express = require("express");
    const router = express.Router();
    const upload = require('../../config/multerConfig.js');

    // Create a new Image
    router.post('/', upload.array('voiture_imgs', 15), images.create);

    // Retrieve all Images
    router.get("/", images.findAll);

    // Retrieve a single Image with id
    router.get("/:id", images.findOne);

    // Update an Image with id
    router.put("/:id", images.update);

    // Delete an Image with id
    router.delete("/:id", images.delete);

    // Delete all Images
    router.delete("/", images.deleteAll);

    app.use('/api/images', router);
};
