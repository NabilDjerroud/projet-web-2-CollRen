// import { DataTypes } from '@sequelize/core';
module.exports = (connex, Sequelize) => {
    const Privilege = connex.define('privilege', {
        type: {
            type: Sequelize.STRING
        }    

    });

    return Privilege
}