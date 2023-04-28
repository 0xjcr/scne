const usersModels = require("../models/users");
const bizsModels = require("../models/businesses");
const { UserPosts, Users } = usersModels;
const { BizPosts, Bizs } = bizsModels;
const { createUserPost } = require("./posts");
describe("createUserPost function", () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: {
        content: "Test post content",
        event: "Test event",
        comment: "Test comment",
        scene: "Test scene",
        postPhoto: "Test post photo",
        userId: 1,
        bizId: 1,
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    UserPosts.create = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  //   it("creates a post with the provided fields", async () => {
  //     const post = {
  //       content: req.body.content,
  //       event: req.body.event,
  //       comment: req.body.comment,
  //       scene: req.body.scene,
  //       postPhoto: req.body.postPhoto,
  //       userId: req.body.userId,
  //     };
  //     UserPosts.create.mockResolvedValue(post);
  //     await createUserPost(req, res);
  //     expect(UserPosts.create).toHaveBeenCalledWith(post);
  //     expect(res.status).toHaveBeenCalledWith(201);
  //     expect(res.json).toHaveBeenCalledWith(post);
  //   });

  //   it("associates the post with a business if bizId is provided", async () => {
  //     const post = {
  //       content: req.body.content,
  //       event: req.body.event,
  //       comment: req.body.comment,
  //       scene: req.body.scene,
  //       postPhoto: req.body.postPhoto,
  //       userId: req.body.userId,
  //     };
  //     const biz = { id: req.body.bizId };
  //     UserPosts.create.mockResolvedValue(post);
  //     Bizs.findByPk.mockResolvedValue(biz);
  //     const setBizSpy = jest.spyOn(post, "setBiz");
  //     await createUserPost(req, res);
  //     expect(UserPosts.create).toHaveBeenCalledWith(post);
  //     expect(Bizs.findByPk).toHaveBeenCalledWith(req.body.bizId);
  //     expect(setBizSpy).toHaveBeenCalledWith(biz);
  //     expect(res.status).toHaveBeenCalledWith(201);
  //     expect(res.json).toHaveBeenCalledWith(post);
  //   });

  it("returns a 500 error if there is a server error", async () => {
    UserPosts.create.mockRejectedValue(new Error("Test error"));
    await createUserPost(req, res);
    expect(UserPosts.create).toHaveBeenCalledWith({
      content: req.body.content,
      event: req.body.event,
      comment: req.body.comment,
      scene: req.body.scene,
      postPhoto: req.body.postPhoto,
      userId: req.body.userId,
    });
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Server error" });
  });
});
