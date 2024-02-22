
import React from 'react'
import Link from 'next/link'

const Footer = () => {

  const year = new Date().getFullYear()

  // const challengetoStr : any = post.challenge ? post.challenge[0].children[0].text : null  
  // const challengetoStr2 : any = post.challenge2 ? post.challenge2[0].children[0].text : null 

  return (
    <div className='footer'>
        <p className='p-f2'>Keep Coding</p> &copy; {year} | <Link href={"/about"} className='link-footer'><p className='p-f'>About</p></Link> 
    </div>
  )
}

export default Footer