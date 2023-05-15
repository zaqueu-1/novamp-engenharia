import React from 'react'

function Hero() {
  return (
    <>
      <div className='hero-bg'>
        <div className="hero-scrolling"></div>
      </div>
      <div data-aos={"fade-up"} data-aos-duration={"1200"} className='hero-container'>
        <div className="hero">
          <div className="hero-texts">
            <h1 className='hero-title'>Nova MP</h1>
            <p className='hero-subtitle'>Engenharia</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
