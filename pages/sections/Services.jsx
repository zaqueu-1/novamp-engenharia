import React from 'react'
import { FaTools } from 'react-icons/fa'

function Services() {

  const services = ['Pinturas', 'Reformas', 'Projetos3D', 'Elétrica residencial, predial e industrial',
  'Projetos arquitetônicos', 'Legalizações', 'Projetos de estruturas metálicas', 'Consultorias', 'Impermeabilização', 
  'Drenagem', 'Sistemas de Incêndio', 'Contenção', 'Regularização de imóveis', 'Projetos fotovoltaicos']
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
    </div>
  )
}

export default Services
