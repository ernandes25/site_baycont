import React from 'react'
import { FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToContato = () => {
    const element = document.getElementById('contato')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Baycont</h1>
        <h2 className="hero-subtitle">Bayton Assessoria</h2>
        <p className="hero-description">
          Contabilidade Digital e Assessoria Empresarial
        </p>
        <p className="hero-text">
          Soluções contábeis inteligentes para impulsionar seu negócio. 
          Tecnologia, experiência e atendimento personalizado para o sucesso da sua empresa.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToContato}>
            Fale Conosco
          </button>
          <button className="btn btn-secondary" onClick={() => window.open('https://wa.me/553497249781', '_blank')}>
            WhatsApp
          </button>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <FaChartLine />
            <span>Gestão Eficiente</span>
          </div>
          <div className="feature-item">
            <FaHandshake />
            <span>Atendimento Personalizado</span>
          </div>
          <div className="feature-item">
            <FaLightbulb />
            <span>Soluções Inovadoras</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
