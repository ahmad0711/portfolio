import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/muhammad-ahmad-972a28117/'> <BsLinkedin/>  </a>
        <a href="https://web.facebook.com/ahmad.ch.714655/"> <BsFacebook/> </a>
        <a href="https://github.com/ahmad0711"> <BsGithub/> </a>
    </div>
  )
}

export default HeaderSocial