const sequelize = require('../models/posts');
const Posts = sequelize.models.Posts;

//create a post
exports.createPost = async (req, res) => {
    const { content, event, comment, scene } = req.body;
  
    try {
      const newPost = await Posts.create({ content, event, comment, scene });
      res.status(201).json(newPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
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
      const allPosts = await Posts.findAll();
      res.status(200).json(allPosts);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};