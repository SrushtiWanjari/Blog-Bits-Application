import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRocket, FaShieldAlt, FaTools, FaUsers, FaFeather } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <motion.section
      className="content-card max-w-3xl mx-auto p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center mb-3">✨ About <span className="highlight">Blog Bits</span></h2>
      
      <p className="muted text-center mb-6">
        Blog Bits is a creative minimal blogging space built using the <b>MERN Stack</b>.  
        It’s fast, smooth, distraction-free and crafted for storytellers, learners, and creators.
      </p>

      <hr className="divider mb-6" />

      <h3 className="section-title">💡 Our Mission</h3>
      <p className="mb-5">
        Empower everyone to share their thoughts, memories, and knowledge in 
        a clean, modern and delightful writing environment.
      </p>

      <h3 className="section-title">🚀 What This Platform Offers</h3>

      <ul className="feature-list mb-6">
        <li><FaFeather />  Minimal & distraction-free editor</li>
        <li><FaRocket />  Fast & smooth user experience</li>
        <li><FaShieldAlt />  Secure login with JWT authentication</li>
        <li><FaTools />  Create, view, & manage posts easily</li>
        <li><FaUsers />  A space to share ideas & inspire others</li>
      </ul>

      <blockquote className="quote-box my-6">
        “Every story matters — share yours with the world.” 🌍
      </blockquote>

      <h3 className="section-title">❤️ Made With Love</h3>
      <p className="mb-6">
        Designed with passion for creativity, learning, and self-expression.  
        Whether you're a writer, student, traveller, or dreamer — this place is yours.
      </p>

      <div className="text-center mt-6">
        <Link to="/contact">
          <motion.button
            className="btn w-auto flex items-center justify-center gap-2"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
          >
            <FaHeart /> Contact / Feedback
          </motion.button>
        </Link>
      </div>
    </motion.section>
  );
}
