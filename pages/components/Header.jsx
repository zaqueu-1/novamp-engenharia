import React from 'react'
import { RiWhatsappLine } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'

function Header() {
  return (
    <div className='header'>
        <a className='wp' href='https://wa.me/5524981288319' target='_blank'>
            <RiWhatsappLine className='wp-icon'/>
            (24) 98128-8319
        </a>
        
        <a className='ig' href='https://instagram.com/novampengenharia' target='_blank'>
            <BsInstagram className='ig-icon'/>
            @novampengenharia
        </a> 
    </div>
  )
}

export default Header
