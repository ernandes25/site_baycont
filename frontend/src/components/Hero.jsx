import React from 'react'
import { FaWhatsapp, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { whatsappCom, CIDADE } from '../dados'

const PONTOS = [
  'Atendimento personalizado, de pessoa para pessoa',
  'Contabilidade 100% digital, sem papelada',
  'Gestão fiscal, contábil e de pessoal em um só lugar',
  `Sede em ${CIDADE}`,
]

const Hero = () => (
  <section id="inicio" className="abertura">
    <div className="container abertura-grade">
      <div className="abertura-texto">
        <p className="sobretitulo">Contabilidade Digital e Assessoria Empresarial</p>
        <h1>Baycont Assessoria</h1>
        <p className="abertura-chamada">
          Soluções contábeis inteligentes para impulsionar o seu negócio. Tecnologia, experiência e
          atendimento personalizado para o sucesso da sua empresa.
        </p>
        <div className="abertura-botoes">
          <a
            className="botao botao-principal"
            href={whatsappCom('Olá! Vim pelo site e gostaria de falar com a Baycont.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Falar no WhatsApp
          </a>
          <a className="botao botao-contorno" href="#servicos">
            Conheça os serviços <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="abertura-cartao">
        <img src="/assets/logo-baycont-transparente.png" alt="Baycont" className="abertura-logo" width="240" height="141" />
        <ul>
          {PONTOS.map((ponto) => (
            <li key={ponto}><FaCheckCircle /> {ponto}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Hero
