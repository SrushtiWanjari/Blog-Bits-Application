import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register({ setUser }){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + '/api/auth/register', { name, email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      setUser(res.data.user)
      navigate('/')
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || 'Registration failed')
    }
  }

  return (
    <section className="content-card max-w-md mx-auto">
      <h2>Register</h2>
      <form onSubmit={submit} className="form">
        <label>Name<input value={name} onChange={e=>setName(e.target.value)} required /></label>
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
        <div><button className="btn">Create account</button></div>
      </form>
    </section>
  )
}
