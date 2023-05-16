import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RiWhatsappLine } from 'react-icons/ri'
import { TbBrowserCheck } from 'react-icons/tb'

function index() {
  return (
    <>
        <div className='hero-bg-l'>
            <div className="hero-scrolling-l"></div>
        </div>
        <div className='links-page'>
            <Image className='links-logo' src='/images/logo-cc.png' width='200' height='150' />

            <div className='links-container'>   
                <a className='link-l' href='https://wa.me/5524981288319' target='_blank'>
                    <RiWhatsappLine className='wp-icon-l'/>
                    Fale conosco | WhatsApp
                </a>
                <Link className='link-l' href='/'>
                    <TbBrowserCheck className='wp-icon-l'/>
                    Site Oficial
                </Link>
            </div>
        </div>
        <div className="links-footer">
            <p>Nova MP Engenharia  ©2023 Todos os Direitos Reservados</p>
        </div>
    </>
  )
}

export default index
