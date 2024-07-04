// import { DataTypes } from '@sequelize/core';
module.exports = (connex, Sequelize) => {
    const Province = connex.define('province', {
        nom: {
            type: Sequelize.TEXT('long')
        }

    });

    return Province
}