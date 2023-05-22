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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPosts = exports.createUserPost = void 0;
const users_1 = require("../models/users");
const businesses_1 = require("../models/businesses");
//create a post
const createUserPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield users_1.UserPosts.create({
            content: req.body.content,
            event: req.body.event,
            comment: req.body.comment,
            scene: req.body.scene,
            postPhoto: req.body.postPhoto,
            userId: req.body.userId,
        });
        res.status(201).json(post);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.createUserPost = createUserPost;
// get all Posts
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userPosts = (yield users_1.UserPosts.findAll({
            include: [
                {
                    model: users_1.Users,
                    as: "user",
                },
            ],
        })); //sequalise and typescript don't get on so the alternative to typecasting was to refactor to ES6 classes.
        const bizPosts = (yield businesses_1.BizPosts.findAll({
            include: [
                {
                    model: businesses_1.Bizs,
                    as: "biz",
                },
            ],
        }));
        // Combine UserPosts and BizPosts using the spread operator
        const allPosts = [...userPosts, ...bizPosts];
        allPosts.sort((a, b) => b.createdAt - a.createdAt);
        res.status(200).json(allPosts);
    }
    catch (err) {
        if (err instanceof Error)
            res.status(400).json({ message: err.message });
    }
});
exports.getAllPosts = getAllPosts;
