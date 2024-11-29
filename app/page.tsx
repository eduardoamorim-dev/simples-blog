'use client'

import { useState, useEffect } from 'react'
import PostList from '../components/PostList'
import AddPostForm from '../components/AddPostForm'

interface Post {
  id: number
  title: string
  body: string
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [nextId, setNextId] = useState(1)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => response.json())
      .then(data => {
        setPosts(data)
        setNextId(Math.max(...data.map((post: Post) => post.id)) + 1)
      })
  }, [])

  const addPost = async (title: string, body: string) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const newPost = await response.json()
    // Use o nextId para garantir uma chave única
    const postWithUniqueId = { ...newPost, id: nextId }
    setPosts([postWithUniqueId, ...posts])
    setNextId(nextId + 1)
  }

  const deletePost = async (id: number) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
    setPosts(posts.filter(post => post.id !== id))
  }

  const editPost = async (id: number, newTitle: string, newBody: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title: newTitle,
        body: newBody,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    const updatedPost = await response.json()
    setPosts(posts.map(post => post.id === id ? { ...updatedPost, id } : post))
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-black">Blog Posts</h1>
      <AddPostForm onAddPost={addPost} />
      <PostList posts={posts} onDeletePost={deletePost} onEditPost={editPost} />
    </main>
  )
}

