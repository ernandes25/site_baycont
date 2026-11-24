import React from 'react'
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { TELEFONE, WHATSAPP, EMAIL, INSTAGRAM, CIDADE, AREA_DO_CLIENTE } from '../dados'

const Footer = () => (
  <footer className="rodape">
    <div className="container rodape-grade">
      <div>
        <img src="/assets/logo-baycont-branco.png" alt="Baycont" className="rodape-logo" width="150" height="88" />
        <p>Contabilidade Digital e Assessoria Empresarial. Soluções inteligentes para o sucesso do seu negócio.</p>
        <div className="rodape-redes">
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href={`mailto:${EMAIL}`} aria-label="E-mail"><FaEnvelope /></a>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
      <div>
        <h4>Navegação</h4>
        <ul>
          <li><a href="#quem-somos">Quem somos</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href={AREA_DO_CLIENTE} target="_blank" rel="noopener noreferrer">Área do Cliente</a></li>
        </ul>
      </div>
      <div>
        <h4>Serviços</h4>
        <ul>
          <li>Abertura de empresa</li>
          <li>Alteração contratual</li>
          <li>Contabilidade digital</li>
          <li>Escrita fiscal</li>
          <li>Departamento pessoal</li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <ul className="rodape-contato">
          <li><FaWhatsapp /> <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{TELEFONE}</a></li>
          <li><FaEnvelope /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><FaMapMarkerAlt /> {CIDADE}</li>
        </ul>
      </div>
    </div>
    <div className="rodape-base">
      <div className="container rodape-base-linha">
        <p>© {new Date().getFullYear()} Baycont - Contabilidade Digital e Assessoria Empresarial. Todos os direitos reservados.</p>
        <p className="rodape-autor">
          Desenvolvido por <strong>Baysoftware</strong>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
