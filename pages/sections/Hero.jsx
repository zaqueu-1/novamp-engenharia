import React from 'react'

function Hero() {
  return (
    <>
      <div className='hero-bg'>
        <div className="hero-scrolling"></div>
      </div>
      <div className='hero-container'>
        <div className="hero">
          <div className="hero-texts">
            <h1 className='hero-title'>Nova <span style={{color:'#6568B9'}}>MP</span></h1>
            <p className='hero-subtitle'>Engenharia</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
