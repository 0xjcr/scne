"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userProfile_1 = require("../controllers/userProfile");
const businessProfile_1 = require("../controllers/businessProfile");
const posts_1 = require("../controllers/posts");
const router = (0, express_1.Router)();
// user routes
router.post("/join", userProfile_1.createProfile);
router.post("/", userProfile_1.login);
router.post("/logout", userProfile_1.logout);
router.put("/editprofile/:id", userProfile_1.updateProfile);
router.get("/profile/:id", userProfile_1.getProfile);
router.get("/community", userProfile_1.getAllProfiles);
// business routes
router.post("/joinbiz", businessProfile_1.createBusiness);
router.get("/list", businessProfile_1.getAllBusinesses);
router.put("/list/:id", businessProfile_1.updateUpvote);
router.get("/biz/:id", businessProfile_1.getBusiness);
//posts routes
router.get("/feed", posts_1.getAllPosts);
router.post("/addpost", posts_1.createUserPost);
exports.default = router;
