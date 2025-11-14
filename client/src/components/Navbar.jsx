import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaFeatherAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Navbar({ user, setUser }){
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }
  return (
    <motion.nav className="navbar" initial={{ y: -20, opacity: 0 }} animate={{ y:0, opacity:1 }}>
      <div className="brand">
        <FaFeatherAlt size={20} />
        <Link to="/">Timeless Blog</Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <>
            <Link to="/create">Create</Link>
            <button className="btn-ghost" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </motion.nav>
  )
}
