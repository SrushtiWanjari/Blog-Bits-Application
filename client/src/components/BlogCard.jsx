import React from 'react'
import { motion } from 'framer-motion'
import { FaUserCircle } from 'react-icons/fa'

export default function BlogCard({ post }){
  return (
    <motion.article className="card" whileHover={{ scale: 1.02 }}>
      <header className="card-header">
        <h3>{post.title}</h3>
        <div className="author">
          <FaUserCircle />
          <span>{post.author?.name || 'Anonymous'}</span>
        </div>
      </header>
      <div className="card-body">
        <p>{post.body}</p>
      </div>
      <footer className="card-footer">
        <small>{new Date(post.createdAt).toLocaleString()}</small>
      </footer>
    </motion.article>
  )
}
