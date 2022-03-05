import React from 'react'

export type TPost = {
  title: string
  excerpt: string
}

export interface PostCardProps {
  post: TPost
}

function PostCard(props: PostCardProps) {
  const { post } = props
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard
