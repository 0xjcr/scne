"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPosts = exports.Users = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
exports.Users = index_1.default.define("Users", {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    member: {
        type: sequelize_1.DataTypes.STRING,
    },
    endorsed: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    reviewCount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    press: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    ig: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type: sequelize_1.DataTypes.STRING,
    },
    photo: {
        type: sequelize_1.DataTypes.STRING,
    },
    scene0: {
        type: sequelize_1.DataTypes.STRING,
    },
    scene1: {
        type: sequelize_1.DataTypes.STRING,
    },
    scene2: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.UserPosts = index_1.default.define("UserPosts", {
    content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    event: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    comment: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    scene: {
        type: sequelize_1.DataTypes.STRING,
    },
    postPhoto: {
        type: sequelize_1.DataTypes.STRING,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: exports.Users,
            key: "id",
        },
    },
});
exports.Users.hasMany(exports.UserPosts, {
    as: "posts",
    foreignKey: "userId",
    onDelete: "CASCADE",
});
exports.UserPosts.belongsTo(exports.Users, {
    foreignKey: "userId",
    as: "user",
    onDelete: "CASCADE",
});
