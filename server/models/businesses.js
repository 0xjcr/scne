const {DataTypes } = require('sequelize');
const sequelize = require('./index');

const Biz = sequelize.define('Biz', {
    
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
    scene: {
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.STRING,
    },
    photo: {
        type: DataTypes.STRING,
    }

});

module.exports = sequelize.models.Biz;
module.exports = sequelize;