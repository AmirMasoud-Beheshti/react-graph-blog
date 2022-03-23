import React, { useState, useEffect } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'
function PostWidget(props) {
  const { slug, categories } = props
  const [recentPost, setRecentPost] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((res) => setRecentPost(res))
    } else {
      getRecentPosts().then((res) => setRecentPost(res))
    }
  }, [slug])
  console.log(recentPost)

  return <div>PostWidget</div>
}

export default PostWidget
