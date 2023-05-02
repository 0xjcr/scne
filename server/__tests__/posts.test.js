const usersModels = require("../models/users");
const bizsModels = require("../models/businesses");
const { UserPosts, Users } = usersModels;
const { BizPosts, Bizs } = bizsModels;
const { createUserPost } = require("../controllers/posts");
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
