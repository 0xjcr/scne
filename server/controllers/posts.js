const sequelize = require('../models/posts');
const { Users, Biz,  } = require('../models');



//create a post
exports.createPost = async (req, res) => {
    try {
      const post = await Posts.create({
        content: req.body.content,
        event: req.body.event,
        comment: req.body.comment,
        scene: req.body.scene
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
        const biz = await Biz.findByPk(req.body.bizId);
        if (biz) {
          await post.setBiz(biz);
        }
      }
  
      res.status(201).json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
exports.deletePost = async (req, res) => {
    const { id } = req.body;
  
    try {
      const postToDelete = await Posts.findByPk(id);
  
      await postToDelete.destroy();
      res.status(204).json({ message: "Post deleted" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

// get all Posts
exports.getAllPosts = async (req, res) => {
    try {
      const allPosts = await Posts.findAll({

        include: [
            { model: Users },
            { model: Biz }
          ]

      });
      res.status(200).json(allPosts);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};