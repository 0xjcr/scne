import { Bizs } from "../models/businesses";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { BizType } from "../Types/types";

const returnSafeBiz = (profile: any) => {
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
export const createBusiness = async (req: Request, res: Response) => {
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
    res.status(400).json({ message: (err as Error).message });
  }
};

// modify upvotes -
export const updateUpvote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { upvotes } = req.body;
  try {
    const data = await Bizs.findByPk(id);

    if (!data) {
      throw new Error("no profile found");
    }

    await data.update({ upvotes });

    res.status(200);
    res.json(data);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

// get all businesses
export const getAllBusinesses = async (req: Request, res: Response) => {
  try {
    const businesses = await Bizs.findAll();
    res.status(200).json(businesses);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

// return a single business profile
export const getBusiness = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const business = await Bizs.findByPk(id);
    res.status(200).json(business);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
