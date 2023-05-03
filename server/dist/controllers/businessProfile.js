"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBusiness = exports.getAllBusinesses = exports.updateUpvote = exports.createBusiness = void 0;
const businesses_1 = require("../models/businesses");
const bcrypt_1 = __importDefault(require("bcrypt"));
const returnSafeBiz = (profile) => {
    const { name, city, postcode, address, phone, scene, ig, email, password, photo, bio, } = profile;
    const userWithoutPassword = {
        name,
        city,
        postcode,
        address,
        phone,
        scene,
        ig,
        email,
        photo,
        bio,
    };
    return userWithoutPassword;
};
// create a business profile
const createBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, city, postcode, address, phone, scene, ig, email, password, photo, bio, } = req.body;
    // Hash the password
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(password, salt);
    try {
        const business = yield businesses_1.Bizs.create({
            name,
            city,
            postcode,
            address,
            phone,
            scene,
            ig,
            email,
            photo,
            bio,
            password: hashedPassword,
        });
        res.status(201).json(returnSafeBiz(business));
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createBusiness = createBusiness;
// modify upvotes -
const updateUpvote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { upvotes } = req.body;
    try {
        const data = yield businesses_1.Bizs.findByPk(id);
        if (!data) {
            throw new Error("no profile found");
        }
        yield data.update({ upvotes });
        res.status(200);
        res.json(data);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.updateUpvote = updateUpvote;
// get all businesses
const getAllBusinesses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield businesses_1.Bizs.findAll();
        res.status(200).json(businesses);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getAllBusinesses = getAllBusinesses;
// return a single business profile
const getBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const business = yield businesses_1.Bizs.findByPk(id);
        res.status(200).json(business);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getBusiness = getBusiness;
