import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (uses MONGODB_URL from .env)
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/blog-mern';
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));

  console.log('MONGODB connected');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
