import React from 'react'
import Image from 'next/image'
import { RiWhatsappLine } from 'react-icons/ri'

function Footer({scroll}) {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <Image src="/images/logo2.png" width='90' height='80' alt="Logo Novamp Engenharia" />
        </div>

        <div className="footer-catch">
          <p>Nova MP Engenharia  ©2023 Todos os Direitos Reservados</p>
        </div>

        <div className="footer-contact">
            <p className='footer-title'>FALE CONOSCO</p>
            <a className='footer-wp' href='https://wa.me/5524981288319' target='_blank'>
              <RiWhatsappLine className='wp-icon-f'/>
              (24) 98128-8319
            </a>
        </div>
    </div>
  )
}

export default Footer
