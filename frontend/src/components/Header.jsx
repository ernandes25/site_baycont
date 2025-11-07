import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaEnvelope, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/assets/Logo 1.png" alt="Baycont Logo" />
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item has-submenu">
              <button onClick={() => toggleSubmenu('quemsomos')}>
                Quem Somos
              </button>
              {activeSubmenu === 'quemsomos' && (
                <ul className="submenu">
                  <li onClick={() => scrollToSection('quem-somos')}>Sobre Nós</li>
                  <li onClick={() => scrollToSection('valores')}>Valores</li>
                  <li onClick={() => scrollToSection('missao')}>Missão</li>
                  <li onClick={() => scrollToSection('visao')}>Visão</li>
                </ul>
              )}
            </li>
            <li className="nav-item" onClick={() => scrollToSection('servicos')}>
              <span>Serviços</span>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('noticias')}>
              <span>Notícias</span>
            </li>
            <li className="nav-item" onClick={() => scrollToSection('contato')}>
              <span>Contato</span>
            </li>
          </ul>

          <div className="header-contact">
            <a href="https://wa.me/5534972497281" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:baycontassessoria@gmail.com" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/baycontassessoria?igsh=NzRxNWtnOXltdXBv" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
          </div>

          <a 
            href="https://www.sciweb.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-area-cliente"
          >
            Área do Cliente
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
