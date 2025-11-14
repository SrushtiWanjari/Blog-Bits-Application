import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaFeatherAlt,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaPlusCircle,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt
} from 'react-icons/fa'

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <motion.nav
      className="navbar shadow-md backdrop-blur-lg bg-white/70 sticky top-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="brand flex items-center gap-2 text-xl font-semibold">
        <FaFeatherAlt size={22} className="text-blue-600" />
        <Link to="/" className="hover:text-blue-600 transition">Blog Bits</Link>
      </div>

      <div className="links flex items-center gap-4">
        <Link className="nav-item" to="/">
          <FaHome /> Home
        </Link>

        <Link className="nav-item" to="/about">
          <FaInfoCircle /> About
        </Link>

        <Link className="nav-item" to="/contact">
          <FaEnvelope /> Contact
        </Link>

        {user ? (
          <>
            <Link className="nav-item" to="/create">
              <FaPlusCircle /> Create
            </Link>

            <button className="logout-btn" onClick={logout}>
              <FaSignOutAlt /> Logout
            </button>
          </>
        ) : (
          <>
            <Link className="nav-item" to="/login">
              <FaSignInAlt /> Login
            </Link>

            <Link className="nav-item" to="/register">
              <FaUserPlus /> Register
            </Link>
          </>
        )}
      </div>
    </motion.nav>
  )
}
