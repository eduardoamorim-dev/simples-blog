'use client'

import { useState } from 'react'

interface Post {
  id: number
  title: string
  body: string
}

interface PostItemProps {
  post: Post
  onDelete: (id: number) => void
  onEdit: (id: number, newTitle: string, newBody: string) => void
}

export default function PostItem({ post, onDelete, onEdit }: PostItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(post.title)
  const [editedBody, setEditedBody] = useState(post.body)

  const handleEdit = () => {
    onEdit(post.id, editedTitle, editedBody)
    setIsEditing(false)
  }

  return (
    <li className="bg-white shadow rounded p-4">
      {isEditing ? (
        <div className="space-y-2">
          <div>
            <label htmlFor={`edit-title-${post.id}`} className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id={`edit-title-${post.id}`}
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </div>
          <div>
            <label htmlFor={`edit-body-${post.id}`} className="block text-sm font-medium text-gray-700">Content</label>
            <textarea
              id={`edit-body-${post.id}`}
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              className="w-full border rounded px-2 py-1 mt-1"
            />
          </div>
          <div>
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-1 rounded mr-2" aria-label="Save changes">Save</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-1 rounded" aria-label="Cancel editing">Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="mb-4">{post.body}</p>
          <div>
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-1 rounded mr-2" aria-label={`Edit post: ${post.title}`}>Edit</button>
            <button onClick={() => onDelete(post.id)} className="bg-red-500 text-white px-4 py-1 rounded" aria-label={`Delete post: ${post.title}`}>Delete</button>
          </div>
        </div>
      )}
    </li>
  )
}

