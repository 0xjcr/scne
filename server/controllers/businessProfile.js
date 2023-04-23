const sequelize = require('../models/businesses');
const Biz = sequelize.models.Biz;
const bcrypt = require('bcrypt');
const session = require('express-session');

// create a business profile
exports.createBusiness = async (req, res) => {
    const { name, city, postcode, address, phone, scene, ig, email, password, photo, bio } = req.body;
    
    // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
    
    try {
        const business = await Biz.create({ name, city, postcode, address, phone, scene, ig, email, photo, bio ,password: hashedPassword });
        res.status(201).json(business);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

// modify a business profile
exports.updateBusiness = async (req, res) => {
    const { id } = req.params;
    const { name, city, postcode, address, phone, scene, ig, email, password, upvotes, reviewCount } = req.body;
  
    try {
      const business = await Biz.findByPk(id);
      await business.update({ name, city, postcode, address, phone, scene, ig, email, password, upvotes, reviewCount }); 
      res.status(200).json(business);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // modify upvotes
  exports.updateUpvote = async (req, res) => {
    const { id } = req.params;
    const { upvotes } = req.body;
  
    try {
      const business = await Biz.findByPk(id);
      await business.update({ upvotes });
      res.status(200).json(business);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
// get all businesses
exports.getAllBusinesses = async (req, res) => {
    try {
      const businesses = await Biz.findAll();
      res.status(200).json(businesses);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// return a single business profile
 exports.getBusiness = async (req, res) => {
    const { id } = req.params;
  
    try {
      const business = await Biz.findByPk(id);
      res.status(200).json(business);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };  

// delete a business 
exports.deleteBusiness = async (req, res) => {
    const { id } = req.params;
  
    try {
      const business = await Biz.findByPk(id);
      await business.destroy();
      res.status(204).json({ message: "Business deleted" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // login 
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
  const user = await Users.findOne({ where: { email } });
   const biz = await Biz.findOne({ where: { email } });
  if (!user && !biz) {
  res.status(400).json({ message: 'Email not found' });
  } else if (user) {
  // Check if the passwords match
  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
  req.session.user = user;
  res.status(200).json({ message: 'Logged in successfully', user });
  } else {
  res.status(400).json({ message: 'Invalid password' });
  }
  } else if (biz) {
  // Check if the passwords match
  const isMatch = await bcrypt.compare(password, biz.password);
  if (isMatch) {
  req.session.biz = biz;
  res.status(200).json({ message: 'Logged in successfully', biz });
  } else {
  res.status(400).json({ message: 'Invalid password' });
  }
  }
  } catch (err) {
  res.status(400).json({ message: err.message });
  }
  };