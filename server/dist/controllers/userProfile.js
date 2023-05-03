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
exports.getAllProfiles = exports.getProfile = exports.updateProfile = exports.logout = exports.login = exports.createProfile = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = require("../models/users");
const businesses_1 = require("../models/businesses");
const returnSafeUser = (profile) => {
    const { firstName, lastName, city, ig, email, password, bio } = profile;
    const userWithoutPassword = { firstName, lastName, city, ig, email, bio };
    return userWithoutPassword;
};
// create a user profile
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, city, ig, email, password, bio } = req.body;
    // Hash the password
    const salt = yield bcrypt_1.default.genSalt(10);
    const hashedPassword = yield bcrypt_1.default.hash(password, salt);
    try {
        const profile = yield users_1.Users.create({
            firstName,
            lastName,
            city,
            ig,
            email,
            password: hashedPassword,
            bio,
        });
        res.status(201);
        res.json(returnSafeUser(profile));
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.createProfile = createProfile;
// login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = (yield users_1.Users.findOne({
            where: { email },
        }));
        const bizs = (yield businesses_1.Bizs.findOne({
            where: { email },
        }));
        if (!user && !bizs) {
            res.status(400).json({ message: "Email not found" });
        }
        else if (user) {
            // Check if the passwords match
            const isMatch = yield bcrypt_1.default.compare(password, user.password);
            if (isMatch) {
                req.session["user"] = user;
                res.status(200).json({ message: "Logged in successfully", user });
            }
            else {
                res.status(400).json({ message: "Invalid password" });
            }
        }
        else if (bizs) {
            // Check if the passwords match
            const isMatch = yield bcrypt_1.default.compare(password, bizs.password);
            if (isMatch) {
                req.session["bizs"] = bizs;
                res.status(200).json({ message: "Logged in successfully", bizs });
            }
            else {
                res.status(400).json({ message: "Invalid password" });
            }
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.login = login;
//logout
const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ message: "Error logging out" });
        }
        else {
            res.status(200).json({ message: "Logged out successfully" });
        }
    });
};
exports.logout = logout;
// edit a user profile
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { photo, bio, ig, member, scene0, scene1, scene2, endorsed } = req.body;
    try {
        const profile = yield users_1.Users.findByPk(id);
        if (!profile)
            throw new Error("no profile found");
        yield profile.update({
            photo,
            bio,
            ig,
            member,
            scene0,
            scene1,
            scene2,
            endorsed,
        });
        res.status(200).json(profile);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.updateProfile = updateProfile;
// retrieve a user profile
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const profile = yield users_1.Users.findByPk(id);
        res.status(200).json(profile);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getProfile = getProfile;
// retrieve all user profiles
const getAllProfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield users_1.Users.findAll();
        res.status(200).json(profiles);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
exports.getAllProfiles = getAllProfiles;
