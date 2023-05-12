import React from 'react'

function Navbar({scroll}) {
  return (
    <div className='navbar'>
        <div className="nav-links">
          <a className='nav-link' onClick={() => scroll('hero')}>Home</a>
          <a className='nav-link' onClick={() => scroll('about')}>Sobre</a>
          <a className='nav-link' onClick={() => scroll('services')}>Serviços</a>
          <a className='nav-link' onClick={() => scroll('contact')}>Contato</a>
        </div>
    </div>
  )
}

export default Navbar
