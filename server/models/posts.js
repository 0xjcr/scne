const {DataTypes } = require('sequelize');
const sequelize = require('./index');

const Posts = sequelize.define('Posts', {
    
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    event: {
        type: DataTypes.BOOLEAN,
    },
    comment: {
        type: DataTypes.BOOLEAN,
    },
    scene: {
        type: DataTypes.STRING,
    }

});

module.exports = sequelize.models.Posts;
module.exports = sequelize;