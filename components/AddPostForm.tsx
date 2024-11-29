'use client'

import { useState } from 'react'

interface AddPostFormProps {
  onAddPost: (title: string, body: string) => Promise<void>
}

export default function AddPostForm({ onAddPost }: AddPostFormProps) {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !body.trim()) return

    await onAddPost(title, body)
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <div>
        <label htmlFor="post-title" className="block text-sm font-medium  text-black">Título do post</label>
        <input
          id="post-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded px-2 py-1 mt-1 text-black"
          required
        />
      </div>
      <div>
        <label htmlFor="post-body" className="block text-sm font-medium text-black">Conteúdo do post</label>
        <textarea
          id="post-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full border rounded px-2 py-1 mt-1 text-black"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-1 rounded">
        Adicionar Post
      </button>
    </form>
  )
}

