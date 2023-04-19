const router = require('express').Router();

const userController = require('../controllers/userProfile');
const businessController = require('../controllers/businessProfile');
// const communityController = require('../controllers/community');
// const listController = require('../controllers/list');
const reviewsController = require('../controllers/reviews');
const sessionsController = require('../controllers/sessions');


// user routes
router.post('/join', userController.createProfile);
router.post('/welcome', userController.login);
router.post('/logout', userController.logout);
router.put('/editprofile/:id', userController.updateProfile);
router.delete('/editprofile/:id', userController.deleteProfile);
router.get('/user/:id', userController.getProfile);
router.get('/community',userController.getAllProfiles);

// business routes
router.post('/connect', businessController.createBusiness);
router.put('/editinfo/:id', businessController.updateBusiness);
//?? another put route to handle upvotes on the top page??
router.delete('/editinfo/:id', businessController.deleteBusiness);
router.get('/top', businessController.getAllBusinesses);
router.get('/business/:id', businessController.getBusiness);

// review routes
router.post('/business/:id/review', reviewsController.createReview);
router.get('/business/:id/review', reviewsController.getAllReviews)

// scene routes
// or scenes to be created by admin

// session routes
// router.post('/login', authMiddleware, userController.login);
// router.get('/me', authMiddleware, userController.profile);
// router.get('/logout', authMiddleware, userController.logout);


module.exports = router;
