import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'

export default function Home(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL + '/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error(err))
  },[])
  return (
    <section>
      <div className="hero">
        <h1>Welcome to Timeless Blog</h1>
        <p className="muted">Light theme, scrollable content, smooth animations.</p>
      </div>

      <section className="posts-scroll" aria-label="posts">
        {posts.length === 0 ? <p className="muted">No posts yet — be the first to create one!</p> : posts.map(p=> <BlogCard key={p._id} post={p} />)}
      </section>

      <section className="long-content">
        <h2>Deep Dive: Scrollable Content</h2>
        <p>This sample section contains extra content to demonstrate long, scrollable material — articles, lists, code blocks, and more. It's intentionally long so you can test scrolling on desktop and mobile.</p>
        <h3>Article excerpts</h3>
        {Array.from({length:18}).map((_,i)=>(
          <article key={i} style={{marginBottom:12}}>
            <h4>Topic {i+1}</h4>
            <p>Paragraph {i+1} — Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, laborum.</p>
          </article>
        ))}
        <h3>Useful links</h3>
        <ul>
          {Array.from({length:8}).map((_,i)=>(<li key={i}><a href="#" onClick={e=>e.preventDefault()}>Related resource #{i+1}</a></li>))}
        </ul>
      </section>
    </section>
  )
}
