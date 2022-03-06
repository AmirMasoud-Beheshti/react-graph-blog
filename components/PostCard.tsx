import React from 'react'
import dayjs from 'dayjs'
import { TPostDetails } from '../pages'
import Link from 'next/link'
export type TPhoto = {
  url:string
}
export type TAuthor ={
  bio:string
  id: string
  name: string
  photo: TPhoto
}


export interface PostCardProps {
  post: TPostDetails
}

function PostCard(props: PostCardProps) {
  const { post } = props
  console.log(post);
  return (
    <div>
      <div>{post.title}</div>
      <div>{post.excerpt}</div>
      <div>{post.author.name}</div>
      <div>{post.author.bio}</div>
      <div>{dayjs(post.createdAt).format('MMM DD, YYYY')}</div>
      <div><img src={`${post.author.photo?.url}`} alt="" /></div>
      <Link href={`/post/${post.slug}`}><span>Continue Reading</span></Link>
    </div>
  )
}

export default PostCard
