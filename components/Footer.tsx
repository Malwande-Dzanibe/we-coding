
import React from 'react'
import Link from 'next/link'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className='footer'>
        <p className='p-f2'>Keep Coding</p> &copy; {year} | <Link href={"/about"} className='link-footer'><p className='p-f'>About</p></Link> 
    </div>
  )
}

export default Footer