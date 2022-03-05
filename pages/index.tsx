import type { NextPage } from 'next'
import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'
import { useMemo } from 'react'
import { getPosts } from '../services'
export type TPosts = {
  title: string
  excerpt: string
}

const Home: NextPage = (props) => {
  const { posts } = props
  console.log(posts.node);
  
  const renderedPost = useMemo(() => {
    return posts.map((post, index) => (
      <PostCard post={post.node} key={`posts-${index}`} />
    ))
  }, [])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Blog React Graph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{renderedPost}</div>
      <div>
        <div>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return { props: { posts } }
}
