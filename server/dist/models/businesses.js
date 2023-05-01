"use strict";
const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Bizs = sequelize.define("Bizs", {
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
    },
});
const BizPosts = sequelize.define("BizPosts", {
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
    },
    postPhoto: {
        type: DataTypes.STRING,
    },
    bizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Bizs,
            key: "id",
        },
    },
});
Bizs.hasMany(BizPosts, {
    as: "bizPosts",
    foreignKey: "bizId",
    onDelete: "CASCADE",
});
BizPosts.belongsTo(Bizs, {
    foreignKey: "bizId",
    as: "biz",
    onDelete: "CASCADE",
});
module.exports = {
    Bizs,
    BizPosts,
};
