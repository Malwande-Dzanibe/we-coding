
import Link from 'next/link'
import React from 'react'
import {FaFacebook} from "react-icons/fa"

const NavBar = () => {
  return (
    <div className='nav-wrapper'>
        <Link href={"/"} className='logo-wrapper'>
            <h3 className='logo'>Keep Coding</h3>
        </Link>
        <div className='socials-wrapper'>
          <a href='https://web.facebook.com/profile.php?id=100077502305937' target='_blank'>
              <FaFacebook className='facebook'/>
          </a>
            <Link href={"/admin"}>
                Admin
            </Link>
        </div>
    </div>
  )
}

export default NavBar