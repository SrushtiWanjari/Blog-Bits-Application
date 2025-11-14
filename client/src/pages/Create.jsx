import React, { useState } from 'react'
import axios from 'axios'

export default function Create({ user }){
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    if(!token) return alert('Please login first')
    try {
      await axios.post(import.meta.env.VITE_API_URL + '/api/posts', { title, body }, {
        headers: { Authorization: 'Bearer ' + token }
      })
      alert('Post created')
      setTitle(''); setBody('')
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.message || 'Error creating post')
    }
  }

  return (
    <section className="content-card max-w-lg mx-auto">
      <h2>Create Post</h2>
      <form onSubmit={submit} className="form">
        <label>Title<input value={title} onChange={e=>setTitle(e.target.value)} required /></label>
        <label>Body<textarea rows="6" value={body} onChange={e=>setBody(e.target.value)} required /></label>
        <div><button className="btn">Publish</button></div>
      </form>
    </section>
  )
}
