import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useMemo } from 'react'
export type TPosts = {
  title: string
  excerpt: string
}
const posts: TPosts[] = [
  { title: 'React Testing', excerpt: ' Learn React Testing' },
  { title: 'React Tailwind Testing', excerpt: ' Learn React With Tailwind' },
]
const Home: NextPage = () => {
  const renderedPost = useMemo(() => {
    return posts.map((post, index) => (
      <div key={`posts-${index}`}>
        <p>{post.title}</p>
        {post.excerpt}
      </div>
    ))
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Blog React Graph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{renderedPost}</div>
    </div>
  )
}

export default Home
