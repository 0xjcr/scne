const usersModels = require("../models/users");
const bizsModels = require("../models/businesses");
const { UserPosts, Users } = usersModels;
const { BizPosts, Bizs } = bizsModels;

//create a post
exports.createUserPost = async (req, res) => {
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
    if (req.body.bizId) {
      const biz = await Biz.findByPk(req.body.bizId);
      if (biz) {
        await post.setBiz(biz);
      }
    }

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createBizPost = async (req, res) => {
  try {
    const post = await BizPosts.create({
      content: req.body.content,
      event: req.body.event,
      comment: req.body.comment,
      scene: req.body.scene,
      postPhoto: req.body.postPhoto,
      bizId: req.body.bizId,
    });

    // Associate the post with a user
    if (req.body.userId) {
      const user = await Users.findByPk(req.body.userId);
      if (user) {
        await post.setUser(user);
      }
    }

    // Associate the post with a biz
    if (req.body.bizId) {
      const biz = await Bizs.findByPk(req.body.bizId);
      if (biz) {
        await post.setBiz(biz);
      }
    }

    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.body;

  try {
    const postToDelete = await UserPosts.findByPk(id);

    await postToDelete.destroy();
    res.status(204).json({ message: "Post deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// get all Posts
exports.getAllPosts = async (req, res) => {
  try {
    const userPosts = await UserPosts.findAll({
      include: [
        {
          model: Users,
          as: "user",
        },
      ],
    });
    //console.log(userPosts)
    const bizPosts = await BizPosts.findAll({
      include: [
        {
          model: Bizs,
          as: "biz",
        },
      ],
    });

    // Combine UserPosts and BizPosts using the spread operator
    const allPosts = [...userPosts, ...bizPosts];

    allPosts.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

    res.status(200).json(allPosts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
