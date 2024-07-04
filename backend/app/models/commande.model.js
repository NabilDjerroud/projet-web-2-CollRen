// import { DataTypes } from '@sequelize/core';
module.exports = (connex, Sequelize) => {
    const Commande = connex.define('commande', {
        date: {
            type: Sequelize.DATEONLY
        },
        prix: {
            type: Sequelize.REAL
        },
        mode_paiement_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'mode_paiements',
                key: 'id', allowNull:true 
            }
        },
        expedition_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'expeditions',
                key: 'id', allowNull: true
            }
        },
        utilisateur_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'utilisateurs',
                key: 'id', allowNull: true
            }
        },
        statut_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'statuts',
                key: 'id', allowNull: true
            }
        },

    })
    return Commande
}