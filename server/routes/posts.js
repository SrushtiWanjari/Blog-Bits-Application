import express from 'express';
import Post from '../models/Post.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create post (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body, author: req.user.id });
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Get all posts (public)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;
