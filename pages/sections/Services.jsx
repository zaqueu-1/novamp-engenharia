import React from 'react'
import { FaTools } from 'react-icons/fa'

function Services() {

  const services = ['Pinturas', 'Reformas', 'Elétrica residencial, predial e industrial',
    'Impermeabilização', 'Drenagem', 'Sistemas de Incêndio', 'Contenção',
    'Projetos3D', 'Projetos arquitetônicos', 'Projetos de estruturas metálicas', 'Projetos fotovoltaicos',
    'Legalizações', 'Consultorias', 'Regularização de imóveis']

    const videos = ['v1.mp4', 'v2.mp4', 'v3.mp4', 'v4.mp4', 'v5.mp4', 'v6.mp4', 'v8.mp4', 'v9.mp4', ]

  return (
    <div className='services-container'>
      <h1 className='services-title'>SERVIÇOS</h1>
      <span className='services-divider'></span>
      <div className='services'>
        {services.map((service, index) => (
          <div key={index} className='service'>
            <FaTools className='service-icon' />
            <h3>{service}</h3>
          </div>
        ))}
      </div>

      <div className='photos-divider' />

      <div className="videos-container">
      {videos.map((video, index) => (
          <div key={index} className='video-wrapper'>
            <video className='video' src={`/images/${video}`} controls />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
