"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BizPosts = exports.Bizs = void 0;
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
exports.Bizs = index_1.default.define("Bizs", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    reviewCount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    upvotes: {
        type: sequelize_1.DataTypes.INTEGER,
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
    scene: {
        type: sequelize_1.DataTypes.STRING,
    },
    bio: {
        type: sequelize_1.DataTypes.STRING,
    },
    photo: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.BizPosts = index_1.default.define("BizPosts", {
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
    bizId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: exports.Bizs,
            key: "id",
        },
    },
});
exports.Bizs.hasMany(exports.BizPosts, {
    as: "bizPosts",
    foreignKey: "bizId",
    onDelete: "CASCADE",
});
exports.BizPosts.belongsTo(exports.Bizs, {
    foreignKey: "bizId",
    as: "biz",
    onDelete: "CASCADE",
});
// export default {
//   Bizs,
//   BizPosts,
// };
