import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login({ setUser }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + '/api/auth/login', { email, password })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      setUser(res.data.user)
      navigate('/')
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || 'Login failed')
    }
  }

  return (
    <section className="content-card max-w-md mx-auto">
      <h2>Login</h2>
      <form onSubmit={submit} className="form">
        <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} required /></label>
        <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} required /></label>
        <div><button className="btn">Login</button></div>
      </form>
    </section>
  )
}
