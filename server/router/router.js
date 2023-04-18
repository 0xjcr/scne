const router = require('express').Router();

const userController = require('../controllers/userProfile');
const businessController = require('../controllers/businessProfile');
// const communityController = require('../controllers/community');
const listController = require('../controllers/list');
const reviewsController = require('../controllers/reviews');
const sessionsController = require('../controllers/sessions');

router.post('/join', userController.createProfile);
router.put('/editprofile', userController.updateProfile);
router.delete('/editprofile', userController.deleteProfile);
router.get('/user/:id', userController.getProfile);
router.get('/community',userController.getAllProfiles);

module.exports = router;