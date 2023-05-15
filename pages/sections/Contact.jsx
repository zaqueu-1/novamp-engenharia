import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

function Contact() {
  return (
    <div className='contact-container'>
      <h1 data-aos={"fade-left"} data-aos-duration={"1200"} className='contact-title'>Contato</h1>
      <p data-aos={"fade-right"} data-aos-duration={"1500"}>Precisa de um orçamento? Fale conosco!</p>

    <div data-aos={"fade-up"} data-aos-duration={"1800"} className="contact-wrapper">
        <a className='contact-wp' href='https://wa.me/5524981288319' target='_blank'>
              <RiWhatsappLine className='wp-icon-c'/>
              (24) 98128-8319
        </a>
        
        <a className='contact-ig' href='https://instagram.com/novampengenharia' target='_blank'>
            Instagram: <u>@novampengenharia</u>
            <BsInstagram className='ig-icon-c'/>
        </a> 
    </div>

    </div>
  )
}

export default Contact
