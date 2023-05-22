import { UserPosts, Users } from "../models/users";
import { BizPosts, Bizs } from "../models/businesses";
import { Request, Response } from "express";
import { PostType, sequelAddition } from "../Types/types";

//create a post
export const createUserPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const post = await UserPosts.create({
      content: req.body.content,
      event: req.body.event,
      comment: req.body.comment,
      scene: req.body.scene,
      postPhoto: req.body.postPhoto,
      userId: req.body.userId,
    });

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// get all Posts
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const userPosts = (await UserPosts.findAll({
      include: [
        {
          model: Users,
          as: "user",
        },
      ],
    })) as unknown as (PostType & sequelAddition)[]; //sequalise and typescript don't get on so the alternative to typecasting was to refactor to ES6 classes.

    const bizPosts = (await BizPosts.findAll({
      include: [
        {
          model: Bizs,
          as: "biz",
        },
      ],
    })) as unknown as (PostType & sequelAddition)[];

    // Combine UserPosts and BizPosts using the spread operator
    const allPosts = [...userPosts, ...bizPosts];

    allPosts.sort((a, b) => b.createdAt - a.createdAt);

    res.status(200).json(allPosts);
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
  }
};
