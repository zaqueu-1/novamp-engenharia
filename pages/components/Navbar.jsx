import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { RiWhatsappLine } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

function Navbar({scroll}) {

  const [color, setColor] = useState(false)

  const changeColor = () => {
    if(window.scrollY >= 50) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor)
  })



  return (
    <div className={color ? 'navbar-bg' : 'navbar'}>
        <div className="logo-wrapper">
            <Image className='minilogo' src="/images/logo2.png" width='70' height='60' alt="Logo Novamp Engenharia" />
        </div>
        <div className={color ? 'nav-links-bg' : 'nav-links'}>
          <a className='nav-link' onClick={() => scroll('hero')}>Home</a>
          <a className='nav-link' onClick={() => scroll('about')}>Sobre</a>
          <a className='nav-link' onClick={() => scroll('services')}>Serviços</a>
          <a className='nav-link' onClick={() => scroll('contact')}>Contato</a>
        </div>
        <div className={color ? 'social-media-bg' : 'social-media'}>
          <a className='wp' href='https://wa.me/5524981288319' target='_blank'>
              <RiWhatsappLine className='wp-icon'/>
          </a>
          
          <a className='ig' href='https://instagram.com/novampengenharia' target='_blank'>
              <BsInstagram className='ig-icon'/>
          </a> 
        </div>
    </div>
  )
}

export default Navbar
