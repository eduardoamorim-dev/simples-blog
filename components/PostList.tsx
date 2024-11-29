'use client'

import PostItem from './PostItem'

interface Post {
  id: number
  title: string
  body: string
}

interface PostListProps {
  posts: Post[]
  onDeletePost: (id: number) => Promise<void>
  onEditPost: (id: number, newTitle: string, newBody: string) => Promise<void>
}

export default function PostList({ posts, onDeletePost, onEditPost }: PostListProps) {
  return (
    <ul className="space-y-4 text-black">
      {posts.map(post => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={onDeletePost}
          onEdit={onEditPost}
        />
      ))}
    </ul>
  )
}

