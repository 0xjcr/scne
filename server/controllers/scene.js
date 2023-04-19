const sequelize = require('../models/scenes');
const Scenes = sequelize.models.Scenes;

// admin create a scene
exports.createScene = async (req, res) => {
    const { name, city } = req.body;
  
    try {
      const scenes = await Scenes.create({ name, city });
      res.status(201).json(scenes);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// get all reviews
exports.getAllScenes = async (req, res) => {
    try {
      const scenes = await Scenes.findAll();
      res.status(200).json(scenes);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };  

  