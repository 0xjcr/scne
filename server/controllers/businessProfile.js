const bizModels = require("../models/businesses");
const { Users } = require("../models/users");

const { Bizs } = require("../models/businesses");
const bcrypt = require("bcrypt");
const session = require("express-session");

const returnSafeBiz = (profile) => {
  const {
    name,
    city,
    postcode,
    address,
    phone,
    scene,
    ig,
    email,
    password,
    photo,
    bio,
  } = profile;
  const userWithoutPassword = {
    name,
    city,
    postcode,
    address,
    phone,
    scene,
    ig,
    email,
    photo,
    bio,
  };
  return userWithoutPassword;
};

// create a business profile
exports.createBusiness = async (req, res) => {
  const {
    name,
    city,
    postcode,
    address,
    phone,
    scene,
    ig,
    email,
    password,
    photo,
    bio,
  } = req.body;

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const business = await Bizs.create({
      name,
      city,
      postcode,
      address,
      phone,
      scene,
      ig,
      email,
      photo,
      bio,
      password: hashedPassword,
    });
    res.status(201).json(returnSafeBiz(business));
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// // modify upvotes -- Doesn't work but could fix
// exports.updateUpvote = async (req, res) => {
//   const { id } = req.params;
//   const { upvotes } = req.body;

//   try {
//     const business = await Bizs.findByPk(id);
//     await business.update({ upvotes });
//     res.status(200).json(business);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// get all businesses
exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Bizs.findAll();
    res.status(200).json(businesses);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// return a single business profile
exports.getBusiness = async (req, res) => {
  const { id } = req.params;

  try {
    const business = await Bizs.findByPk(id);
    res.status(200).json(business);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
