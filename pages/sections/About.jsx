import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='about-container'>
      <h1 className='about-title'>SOBRE NÓS</h1>
      <span className='about-divider'/>
      <p className='about-sub'>Bem-vindo à Nova MP, uma empresa de engenharia que nasceu de uma parceria resultado da junção dos pilares fundamentais da construção civil, a fim de proporcionar a uma experiência completa desde a projeção até execução dos projetos.</p>
      <p className='about-sub'>Com uma <b>equipe especializada e apaixonada pelo que faz</b>, estamos comprometidos em superar as expectativas de nossos clientes, sempre com o máximo de <b>excelência</b>. Nossa equipe é liderada pelos engenheiros Igor e Matheus, que possuem vasta experiência em suas respectivas áreas de atuação. </p>

      <div className="novamp">
        <div className="matheus">
          <Image src='/images/igor1.jpg' width='296' height='272' />
          <p className='mp-sub'>Igor, engenheiro civil, traz consigo um profundo conhecimento em projetos de construção, estruturas e infraestrutura urbana.</p>
        </div>

        <div className="igor">
          <Image src='/images/matheus1.jpg' width='296' height='272' />
          <p className='mp-sub'>Matheus, por sua vez, é engenheiro eletricista e possui expertise em sistemas elétricos, automação e energias renováveis.</p>
        </div>
      </div>

      <p className='about-sub'>Na <b>Nova MP</b>, acreditamos que cada projeto é único e merece uma <b>abordagem personalizada</b>. Trabalhamos em estreita colaboração com nossos clientes para entender suas necessidades e objetivos, buscando sempre as melhores soluções técnicas e econômicas. </p>
      <p className='about-sub'>Nosso compromisso com a <b>qualidade</b>, <b>segurança</b> e <b>sustentabilidade</b> é evidente em cada etapa do processo.</p>
    </div>
  )
}

export default About
