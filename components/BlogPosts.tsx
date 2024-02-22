
import React from 'react'
import AllPosts from '@/utils/AllPosts'
import Link from "next/link"

const BlogPosts = async () => {

  const posts = await AllPosts()

  return (

    <div className='wrapper'>
      {
        posts.map((post)=>{

          const newIntro = `${post.bait.slice(0, 100)}...`
          const iniIntro = post.bait

          return (
            <div key={post._id}>
            <Link className='titles'  href={`/product/${post.slug}`}>
            <h4>{post.name}</h4>
            </Link>
            {iniIntro.length < 100 ? <p className='baitt'>{iniIntro}</p> : <p className='baitt'>{newIntro}</p>}
            <br/>
            <hr/>
            <br />
            </div>
          )
        })
      }
    </div>
  )
}

export default BlogPosts