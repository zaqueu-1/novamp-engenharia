import React from 'react'
import { FaTools } from 'react-icons/fa'

function Services() {

  const services = ['Pinturas', 'Reformas', 'Elétrica residencial, predial e industrial',
    'Impermeabilização', 'Drenagem', 'Sistemas de Incêndio', 'Contenção',
    'Projetos3D', 'Projetos arquitetônicos', 'Projetos de estruturas metálicas', 'Projetos fotovoltaicos',
    'Legalizações', 'Consultorias', 'Regularização de imóveis']

  return (
    <div className='services-container'>
      <h1 data-aos={"fade-up"} data-aos-duration={"1200"} className='services-title'>Serviços</h1>
      <div className='services'>
        <div className="services-wrapper">
          {services.map((service, index) => (
            <div data-aos={"fade-left"} data-aos-duration={"1500"}  key={index} className='service'>
              <FaTools className='service-icon' />
              <h3>{service}</h3>
            </div>
          ))}
        </div>
        <div data-aos={"fade-up"} data-aos-duration={"1200"} className="carousel">
          <div className="inner">
            <video src='/images/video.mp4' height='400' width='300' autoplay muted controls />
            <video src='/images/video2.mp4' height='400' width='300' autoplay muted controls />
            <video src='/images/video3.mp4' height='400' width='300' autoplay muted controls />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Services
