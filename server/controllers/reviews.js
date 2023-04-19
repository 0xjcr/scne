const sequelize = require('../models/reviews');
const Reviews = sequelize.models.Reviews;

// create a review
exports.createReview = async (req, res) => {
    const { content, press } = req.body;
  
    try {
      const review = await Reviews.create({ content, press });
      res.status(201).json(review);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// get all reviews
exports.getAllReviews = async (req, res) => {
    try {
      const reviews = await Reviews.findAll();
      res.status(200).json(reviews);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };  

  