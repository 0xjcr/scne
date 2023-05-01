const router = require("express").Router();
import {
  createProfile,
  login,
  logout,
  updateProfile,
  getProfile,
  getAllProfiles,
} from "../controllers/userProfile";
import {
  createBusiness,
  getAllBusinesses,
  getBusiness,
} from "../controllers/businessProfile";
import { getAllPosts, createUserPost } from "../controllers/posts";

// user routes
router.post("/join", createProfile);
router.post("/", login);
router.post("/logout", logout);
router.put("/editprofile/:id", updateProfile);
router.get("/profile/:id", getProfile);
router.get("/community", getAllProfiles);

// business routes
router.post("/joinbiz", createBusiness);
router.get("/list", getAllBusinesses);
router.get("/biz/:id", getBusiness);

//posts routes
router.get("/feed", getAllPosts);
router.post("/addpost", createUserPost);

export default router;
