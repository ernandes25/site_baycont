import React, { useState, useEffect } from 'react'
import { FaWhatsapp, FaEnvelope, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import { WHATSAPP, EMAIL, INSTAGRAM, AREA_DO_CLIENTE } from '../dados'

const LINKS = [
  { href: '#quem-somos', texto: 'Quem somos' },
  { href: '#servicos', texto: 'Serviços' },
  { href: '#diferenciais', texto: 'Diferenciais' },
  { href: '#links-uteis', texto: 'Links úteis' },
  { href: '#contato', texto: 'Contato' },
]

const Header = () => {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 10)
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header className={`topo ${rolou ? 'topo-rolou' : ''}`}>
      <div className="container topo-linha">
        <a href="#inicio" className="marca" aria-label="Baycont - início">
          <img src="/assets/logo-mark.png" alt="" width="34" height="41" />
          <span>
            <strong>BAYCONT</strong>
            <small>Contabilidade Digital</small>
          </span>
        </a>

        <button
          className="menu-botao"
          aria-label={menuAberto ? 'Fechar o menu' : 'Abrir o menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`menu ${menuAberto ? 'menu-aberto' : ''}`} aria-label="Seções do site">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuAberto(false)}>{link.texto}</a>
              </li>
            ))}
          </ul>
          <div className="menu-icones">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href={`mailto:${EMAIL}`} aria-label="E-mail"><FaEnvelope /></a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          </div>
          <a href={AREA_DO_CLIENTE} target="_blank" rel="noopener noreferrer" className="botao botao-principal botao-pequeno">
            Área do Cliente
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
