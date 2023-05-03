import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { Users } from "../models/users";
import { Bizs } from "../models/businesses";
import { UserType, BizType } from "../Types/types";

const returnSafeUser = (profile: any) => {
  const { firstName, lastName, city, ig, email, password, bio } = profile;
  const userWithoutPassword = { firstName, lastName, city, ig, email, bio };
  return userWithoutPassword;
};

// create a user profile
export const createProfile = async (req: Request, res: Response) => {
  const { firstName, lastName, city, ig, email, password, bio } = req.body;

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
    res.status(201);
    res.json(returnSafeUser(profile));
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

declare module "express-session" {
  export interface SessionData {
    user: { [key: string]: any };
    bizs: { [key: string]: any };
  }
}

// login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = (await Users.findOne({
      where: { email },
    })) as unknown as UserType;
    const bizs = (await Bizs.findOne({
      where: { email },
    })) as unknown as BizType;
    if (!user && !bizs) {
      res.status(400).json({ message: "Email not found" });
    } else if (user) {
      // Check if the passwords match
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        req.session["user"] = user;
        res.status(200).json({ message: "Logged in successfully", user });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    } else if (bizs) {
      // Check if the passwords match
      const isMatch = await bcrypt.compare(password, bizs.password);
      if (isMatch) {
        req.session["bizs"] = bizs;
        res.status(200).json({ message: "Logged in successfully", bizs });
      } else {
        res.status(400).json({ message: "Invalid password" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

//logout
export const logout = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: "Error logging out" });
    } else {
      res.status(200).json({ message: "Logged out successfully" });
    }
  });
};

// edit a user profile
export const updateProfile = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { photo, bio, ig, member, scene0, scene1, scene2, endorsed } = req.body;

  try {
    const profile = await Users.findByPk(id);
    if (!profile) throw new Error("no profile found");
    await profile.update({
      photo,
      bio,
      ig,
      member,
      scene0,
      scene1,
      scene2,
      endorsed,
    });
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

// retrieve a user profile
export const getProfile = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const profile = await Users.findByPk(id);
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

// retrieve all user profiles
export const getAllProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await Users.findAll();
    res.status(200).json(profiles);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
