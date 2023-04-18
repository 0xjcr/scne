const {DataTypes } = require('sequelize');
const sequelize = require('./index');

const Users = sequelize.define('Users', {
    
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    member: {
        type: DataTypes.BOOLEAN,
    },
    endorsed: {
        type: DataTypes.INTEGER,
    },
    reviewCount: {
        type: DataTypes.INTEGER,
    },
    press: {
        type: DataTypes.BOOLEAN,
    },
    ig: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: DataTypes.STRING,
    }

});

module.exports = sequelize.models.Users;
module.exports = sequelize;