import { UserPosts, Users } from "../models/users";
import { BizPosts, Bizs } from "../models/businesses";
import { Request, Response } from "express";

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

    // Associate the post with a biz
    // if (req.body.bizId) {
    //   const biz = await Bizs.findByPk(req.body.bizId);
    //   if (biz) {
    //     await post.setBiz(biz);
    //   }
    // }

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// class PostType extends Model implements PostTypeAttributes

type PostType = {
  id: number;
  content: string;
  event: boolean;
  comment: string;
  scene: string;
  postPhoto: string;
  userId: number;
  createdAt: number;
  updatedAt: number;
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
    })) as unknown as PostType[]; //sequalise and typescript don't get on so the alternative to typecasting was to refactor to ES6 classes.

    const bizPosts = (await BizPosts.findAll({
      include: [
        {
          model: Bizs,
          as: "biz",
        },
      ],
    })) as unknown as PostType[];

    // Combine UserPosts and BizPosts using the spread operator
    const allPosts = [...userPosts, ...bizPosts];

    allPosts.sort((a, b) => b.createdAt - a.createdAt);

    res.status(200).json(allPosts);
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
  }
};
