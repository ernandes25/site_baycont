import React from 'react'
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <img src="/assets/Logo 1.png" alt="Baycont Logo" className="footer-logo" />
              <h3>Baycont</h3>
              <p className="footer-description">
                Contabilidade Digital e Assessoria Empresarial. 
                Soluções inteligentes para o sucesso do seu negócio.
              </p>
              <div className="footer-social">
                <a href="https://wa.me/553497249781" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                  <FaWhatsapp />
                </a>
                <a href="mailto:baycontassessoria@gmail.com" title="Email">
                  <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/baycontassessoria?igsh=NzRxNWtnOXltdXBv" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Navegação</h4>
              <ul className="footer-links">
                <li onClick={() => scrollToSection('quem-somos')}>Quem Somos</li>
                <li onClick={() => scrollToSection('servicos')}>Serviços</li>
                <li onClick={() => scrollToSection('noticias')}>Notícias</li>
                <li onClick={() => scrollToSection('contato')}>Contato</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Serviços</h4>
              <ul className="footer-links">
                <li>Abertura de Empresa</li>
                <li>Alteração Contratual</li>
                <li>Assessoria Contábil</li>
                <li>Escrita Fiscal</li>
                <li>Departamento Pessoal</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contato</h4>
              <div className="footer-contact">
                <p>
                  <FaWhatsapp /> (34) 9724-9781
                </p>
                <p>
                  <FaEnvelope /> baycontassessoria@gmail.com
                </p>
                <p>
                  <FaMapMarkerAlt /> Uberlândia - MG
                </p>
              </div>
              <p className="footer-domain">
                <strong>www.baycont.com.br</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} Baycont - Contabilidade Digital e Assessoria Empresarial. 
              Todos os direitos reservados.
            </p>
            <div className="developed-by">
              <p>
                Desenvolvido com <FaHeart className="heart-icon" /> por{' '}
                <strong>Baysoftware Brasil</strong> - Uberlândia, MG
              </p>
              <img src="/assets/logo-baysoft.webp" alt="Baysoftware" className="baysoft-logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
