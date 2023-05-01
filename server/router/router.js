const router = require("express").Router();
const userController = require("../controllers/userProfile");
const businessController = require("../controllers/businessProfile");
const postsController = require("../controllers/posts");

// user routes
router.post("/join", userController.createProfile);
router.post("/", userController.login);
router.post("/logout", userController.logout);
router.put("/editprofile/:id", userController.updateProfile);
router.get("/profile/:id", userController.getProfile);
router.get("/community", userController.getAllProfiles);

// business routes
router.post("/joinbiz", businessController.createBusiness);
router.get("/list", businessController.getAllBusinesses);
router.get("/biz/:id", businessController.getBusiness);

//posts routes
router.get("/feed", postsController.getAllPosts);
router.post("/addpost", postsController.createUserPost);

module.exports = router;
