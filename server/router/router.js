const router = require('express').Router();

const userController = require('../controllers/userProfile');
const businessController = require('../controllers/businessProfile');
const scenesController = require('../controllers/scene');
const reviewsController = require('../controllers/reviews');
const postsController = require('../controllers/posts');



// user routes
router.post('/join', userController.createProfile);
router.post('/', userController.login);
router.post('/logout', userController.logout);
router.put('/editprofile/:id', userController.updateProfile);
router.put('/editprofile/:id', userController.updateProfile);
router.delete('/editprofile/:id', userController.deleteProfile);
router.get('/profile/:id', userController.getProfile);
router.get('/community',userController.getAllProfiles);

// business routes
router.post('/joinbiz', businessController.createBusiness);
router.put('/editinfo/:id', businessController.updateBusiness);
router.put('/list/:id', businessController.updateUpvote);
//?? another put route to handle upvotes on the top page??
router.delete('/editinfo/:id', businessController.deleteBusiness);
router.get('/list', businessController.getAllBusinesses);
router.get('/biz/:id', businessController.getBusiness);

// review routes
router.post('/biz/:id/review', reviewsController.createReview);
router.get('/biz/:id/review', reviewsController.getAllReviews);

// scene routes
router.post('/adminScene', scenesController.createScene); 
router.get('/', scenesController.getAllScenes);
router.delete('/adminScene/:id', scenesController.deleteScene);

//posts routes
router.get('/find', postsController.getAllPosts);
router.post('/user', postsController.createUserPost); 
router.post('/biz', postsController.createBizPost); 
router.delete('/user', postsController.deletePost);
router.get('/find', postsController.getAllPosts);
router.delete('/biz', postsController.deletePost);

module.exports = router;
