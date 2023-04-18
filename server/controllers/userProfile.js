const sequelize = require('../models/users');
const Users = sequelize.models.Users;

// create a user profile
exports.createProfile = async (req,res) => {
    const {firstName, lastName, city, ig, email, password, bio } = req.body;
    try {
        const profile = await Users.create({firstName, lastName, city, ig, email, password, bio});
        res.status(201).json(profile);
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
};

// edit a user profile
exports.updateProfile = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, city, ig, email, password, bio } = req.body;
  
    try {
      const profile = await Users.findByPk(id);
      await profile.update({ firstName, lastName, city, ig, email, password, bio });
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
  
  