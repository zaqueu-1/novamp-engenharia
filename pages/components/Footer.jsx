import React from 'react'
import Image from 'next/image'
import { RiWhatsappLine } from 'react-icons/ri'

function Footer({scroll}) {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <Image src="/images/logo.png" width='90' height='80' alt="Logo Novamp Engenharia" />
            <div className="footer-innertext">
                <p>Nova <span style={{color:"#6568B9"}}>MP</span></p>
                <span id='footer-span' style={{color:"#6568B9"}}>Engenharia</span>
            </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-contact">
            <p className='footer-title'>FALE CONOSCO</p>
            <a className='footer-wp' href='https://wa.me/5524981288319' target='_blank'>
              <RiWhatsappLine className='wp-icon-f'/>
              (24) 98128-8319
            </a>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-menu">
            <>
                <li><a className='footer-link' onClick={() => scroll('hero')}>Home</a></li>
                <li><a className='footer-link' onClick={() => scroll('about')}>Sobre</a></li>
                <li><a className='footer-link' onClick={() => scroll('services')}>Serviços</a></li>
                <li><a className='footer-link' onClick={() => scroll('contact')}>Contato</a></li>
            </>
        </div>

    </div>
  )
}

export default Footer
