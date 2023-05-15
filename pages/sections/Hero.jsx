import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <>
      <div className='hero-bg'>
        <div className="hero-scrolling"></div>
      </div>
      <div data-aos={"fade-up"} data-aos-duration={"1200"} className='hero-container'>
        <div className="hero">
          <div className="hero-texts">
            <Image className='logo-main' src='/images/name-logo.png' height='300' width='400' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
