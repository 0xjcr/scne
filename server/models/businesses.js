const {DataTypes } = require('sequelize');
const sequelize = require('./index');

const Businesses = sequelize.define('Businesses', {
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reviewCount: {
        type: DataTypes.INTEGER,
    },
    upvotes: {
        type: DataTypes.INTEGER,
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
    scene_id: {
        type: DataTypes.STRING,
    }

});

module.exports = sequelize.models.Businesses;
module.exports = sequelize;