import express from "express";
import router from "../router/router";
import supertest from "supertest";
import sequelize from "../models";
import { PostType } from "../Types/types";
import { UserPosts } from "../models/users";



describe("/addpost endpoint", () => {
  const app = express();
  app.use(express.json());
  app.use(router);
  const request = supertest(app);

  beforeAll(async () => {
    await sequelize.sync();
  });

  // afterEach(async () => {
  //   try {
  //     await UserPosts.destroy({ where: {}, truncate: true, cascade: true });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  it("should save a post to the database", async () => {
    const post: PostType = {
      // id : 1,
      content: "Test Post",
      event: true,
      comment: false,
      scene: "coffee",
      postPhoto:"posted",
      userId:1,
      // createdAt:12,
      // updatedAt:13

    };

    await request.post("/addpost").send(post);

     const result = (await (UserPosts.findAll() as unknown)) as PostType[];
    // expect(result[0].id).toBe(1);
    expect(result[0].content).toEqual("Test Post");
    expect(result[0].event).toEqual(true);
    expect(result[0].comment).toEqual(false);
    expect(result[0].scene).toEqual("coffee");
    expect(result[0].postPhoto).toEqual("posted");
    expect(result[0].userId).toEqual(1);
    // expect(result[0].createdAt).toEqual(12);
    // expect(result[0].updatedAt).toEqual(13);
  });
  // it("should return 201 if post is created", async () => {
  //   const post: PostType = {
  //     // id : 1,
  //     content: "Test Post",
  //     event: true,
  //     comment: false,
  //     scene: "coffee",
  //     postPhoto:"posted",
  //     userId:1,
  //     // createdAt:12,
  //     // updatedAt:13
  //   };

  //   const res = await request.post("/addpost").send(post);
  //   expect(res.status).toBe(201);
  // });
});
