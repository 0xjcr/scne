const sequelize = require('../models/businesses');
const Businesses = sequelize.models.Businesses;

// create a business profile
exports.createBusiness = async (req, res) => {
    const { name, city, postcode, address, phone, scene_id, ig, email, password } = req.body;
    try {
        const business = await Businesses.create({ name, city, postcode, address, phone, scene_id, ig, email, password });
        res.status(201).json(business);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};

// modify a business profile
exports.updateBusiness = async (req, res) => {
    const { id } = req.params;
    const { name, city, postcode, address, phone, scene_id, ig, email, password } = req.body;
  
    try {
      const business = await Businesses.findByPk(id);
      await business.update({ name, city, postcode, address, phone, scene_id, ig, email, password });
      res.status(200).json(business);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// get all businesses
exports.getAllBusinesses = async (req, res) => {
    try {
      const businesses = await Businesses.findAll();
      res.status(200).json(businesses);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

// return a single business profile
 exports.getBusiness = async (req, res) => {
    const { id } = req.params;
  
    try {
      const business = await Businesses.findByPk(id);
      res.status(200).json(business);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };  

// delete a business 
exports.deleteBusiness = async (req, res) => {
    const { id } = req.params;
  
    try {
      const business = await Businesses.findByPk(id);
      await business.destroy();
      res.status(204).json({ message: "Business deleted" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };