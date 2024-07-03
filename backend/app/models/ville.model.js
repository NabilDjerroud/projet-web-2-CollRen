// import { DataTypes } from '@sequelize/core';
module.exports = (connex, Sequelize) => {
    const Ville = connex.define('ville', {
        nom: {
            type: Sequelize.TEXT('long')
        },
        province_id: {
            type: Sequelize.INTEGER,
            references: {         // provinces hasMany ville n:n
                model: 'provinces',
                key: 'id', 
                allowNull: true
            }
        }

    });

    return Ville
}