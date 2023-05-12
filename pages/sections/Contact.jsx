import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>FALE CONOSCO</h1>
      <span className='contact-divider'></span>

    <div className="contact-wrapper">
      <a className='contact-wp' href='https://wa.me/5524981288319' target='_blank'>
            <RiWhatsappLine className='wp-icon-c'/>
            (24) 98128-8319
        </a>
        
        <a className='contact-ig' href='https://instagram.com/novampengenharia' target='_blank'>
            Instagram: <u>@novampengenharia</u>
            <BsInstagram className='ig-icon-c'/>
        </a> 
    </div>

    <span className='photos-divider'></span>

    </div>
  )
}

export default Contact
