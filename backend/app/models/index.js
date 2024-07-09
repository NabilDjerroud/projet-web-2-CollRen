const dbConfig = require('../config/db.config.js')
const Sequelize = require('sequelize')
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.PORT,
    operatorAliases: false
})

const db = {}
db.Sequelize = Sequelize
db.connex = connex
db.privileges = require('./privilege.model.js')(connex, Sequelize)
db.utilisateurs = require('./utilisateur.model.js')(connex, Sequelize)
db.villes = require('./ville.model.js')(connex, Sequelize)
db.provinces = require('./province.model.js')(connex, Sequelize)
db.statuts = require('./statut.model.js')(connex, Sequelize)
db.expeditions = require('./expedition.model.js')(connex, Sequelize)
db.corps = require('./corp.model.js')(connex, Sequelize)
db.carburants = require('./carburant.model.js')(connex, Sequelize)
db.motopropulseurs = require('./motopropulseur.model.js')(connex, Sequelize)
db.transmissions = require('./transmission.model.js')(connex, Sequelize)
db.constructeurs = require('./constructeur.model.js')(connex, Sequelize)
db.modeles = require('./modele.model.js')(connex, Sequelize)
db.images = require('./image.model.js')(connex, Sequelize)
db.mode_paiements = require('./mode_paiement.model.js')(connex, Sequelize)
db.voitures = require('./voiture.model.js')(connex, Sequelize)
db.commandes = require('./commande.model.js')(connex, Sequelize)
// db.sig = require('./connexion.model.js')(connex, Sequelize)


// Définition des relations
db.modeles.belongsTo(db.constructeurs, { foreignKey: 'constructeur_id' })

db.voitures.belongsTo(db.modeles, { foreignKey: 'modele_id' })

db.constructeurs.hasMany(db.modeles, { foreignKey: 'constructeur_id' })

db.transmissions.hasMany(db.voitures, { foreignKey: 'transmission_id' })
db.voitures.belongsTo(db.transmissions, { foreignKey: 'transmission_id'})

db.voitures.belongsTo(db.corps, { foreignKey: 'corp_id' })

db.voitures.belongsTo(db.motopropulseurs, { foreignKey: 'motopropulseur_id'})

db.voitures.belongsTo(db.carburants, { foreignKey: 'carburant_id'})
db.carburants.hasMany(db.voitures, { foreignKey: 'carburant_id' })

db.images.belongsTo(db.voitures, { foreignKey: 'voiture_id' })
db.voitures.hasMany(db.images, { foreignKey: 'voiture_id' })

db.privileges.hasMany(db.utilisateurs, { foreignKey: 'privilege_id' })
db.utilisateurs.belongsTo(db.privileges, { foreignKey: 'privilege_id'})

// expedition_id , utilisateur_id , statut_id

db.commandes.belongsTo(db.mode_paiements, { foreignKey: 'mode_paiement_id' })
db.mode_paiements.hasMany(db.commandes, { foreignKey: 'mode_paiement_id' })

db.commandes.belongsTo(db.expeditions, { foreignKey: 'expedition_id' })
db.expeditions.hasMany(db.commandes, { foreignKey: 'expedition_id' })

db.commandes.belongsTo(db.utilisateurs, { foreignKey: 'utilisateur_id' })
db.utilisateurs.hasMany(db.commandes, { foreignKey: 'utilisateur_id' })

db.commandes.belongsTo(db.statuts, { foreignKey: 'statut_id' })
db.statuts.hasMany(db.commandes, { foreignKey: 'statut_id' })


db.villes.belongsTo(db.provinces, { foreignKey: 'province_id' })
db.provinces.hasMany(db.villes, { foreignKey: 'province_id' })

// Province.hasMany(models.Ville, { as: 'villes' })
// db.villes.belongsTo(db.provinces, { foreignKey: 'province_Id', as: 'province' })



module.exports = db