// import { DataTypes } from '@sequelize/core';
const Modele = require("./modele.model")
module.exports = (connex, Sequelize) => {
    var Constructeur = connex.define('constructeur', {
        type: {
            type: Sequelize.TEXT
        }

    })

    return Constructeur
}