const bcrypt = require('bcrypt');
const session = require('express-session');

const sequelize = require('../models/users');
const Users = sequelize.models.Users;

// create a user profile
exports.createProfile = async (req, res) => {
  const { firstName, lastName, city, ig, email, password, bio,  } = req.body;

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const profile = await Users.create({
      firstName,
      lastName,
      city,
      ig,
      email,
      password: hashedPassword,
      bio,
    });
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// login 
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ message: 'Email not found' });
    } else {
      // Check if the passwords match
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session.user = user;
        res.status(200).json({ message: 'Logged in successfully', user });
      } else {
        res.status(400).json({ message: 'Invalid password' });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//logout
exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).json({ message: 'Error logging out' });
    } else {
      res.status(200).json({ message: 'Logged out successfully' });
    }
  });
};


// edit a user profile
exports.updateProfile = async (req, res) => {
    const { id } = req.params;
    const { photo, bio, ig, member, scene0, scene1, scene2 } = req.body;
  
    try {
      const profile = await Users.findByPk(id);
      await profile.update({ photo, bio, ig, member, scene0, scene1, scene2 });
      res.status(200).json(profile);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
// delete a user profile
// ???how to connect to id from user view in order to delete
exports.deleteProfile = async (req, res) => {
    const { id } = req.body;
  
    try {
      const profile = await Users.findByPk(id);
  
      await profile.destroy();
      res.status(204).json({ message: "Profile deleted" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // retrieve a user profile
  exports.getProfile = async (req, res) => {
    const { id } = req.params;
  
    try {
      const profile = await Users.findByPk(id);
      res.status(200).json(profile);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // retrieve all user profiles
  exports.getAllProfiles = async (req, res) => {
    try {
      const profiles = await Users.findAll();
      res.status(200).json(profiles);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  