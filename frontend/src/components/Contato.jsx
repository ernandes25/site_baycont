import React, { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaClock, FaPaperPlane } from 'react-icons/fa'
import { TELEFONE, WHATSAPP, EMAIL, INSTAGRAM, INSTAGRAM_NOME, CIDADE, whatsappCom } from '../dados'

const VAZIO = { nome: '', telefone: '', mensagem: '' }

const Contato = () => {
  const [dados, setDados] = useState(VAZIO)
  const [enviado, setEnviado] = useState(false)

  const mudar = (evento) => setDados({ ...dados, [evento.target.name]: evento.target.value })

  // O formulário não grava nada: monta a mensagem e abre o WhatsApp da Baycont.
  const enviar = (evento) => {
    evento.preventDefault()
    const texto = [
      'Olá! Vim pelo site da Baycont.',
      `Nome: ${dados.nome}`,
      dados.telefone ? `Telefone: ${dados.telefone}` : '',
      '',
      dados.mensagem,
    ].filter((linha, indice) => linha !== '' || indice === 3).join('\n')
    window.open(whatsappCom(texto), '_blank', 'noopener')
    setEnviado(true)
    setDados(VAZIO)
  }

  return (
    <section id="contato" className="secao">
      <div className="container">
        <div className="secao-cabecalho">
          <p className="sobretitulo">Contato</p>
          <h2>Fale com a Baycont</h2>
          <p>Estamos prontos para atender você e a sua empresa.</p>
        </div>

        <div className="contato-grade">
          <div className="contato-canais">
            <a className="canal canal-destaque" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <span className="icone-caixa"><FaWhatsapp /></span>
              <span><small>WhatsApp</small><strong>{TELEFONE}</strong></span>
            </a>
            <a className="canal" href={`mailto:${EMAIL}`}>
              <span className="icone-caixa"><FaEnvelope /></span>
              <span><small>E-mail</small><strong>{EMAIL}</strong></span>
            </a>
            <a className="canal" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <span className="icone-caixa"><FaInstagram /></span>
              <span><small>Instagram</small><strong>{INSTAGRAM_NOME}</strong></span>
            </a>
            <div className="canal">
              <span className="icone-caixa"><FaMapMarkerAlt /></span>
              <span><small>Localização</small><strong>{CIDADE}</strong></span>
            </div>
            <div className="canal">
              <span className="icone-caixa"><FaClock /></span>
              <span><small>Horário de atendimento</small><strong>Segunda a sexta, das 8h às 18h · Sábado, das 8h às 12h</strong></span>
            </div>
          </div>

          <form className="cartao formulario" onSubmit={enviar}>
            <h3>Envie sua mensagem</h3>
            <p className="formulario-ajuda">Ao enviar, abrimos o WhatsApp com a sua mensagem pronta.</p>
            <label>
              Nome *
              <input name="nome" value={dados.nome} onChange={mudar} required placeholder="Seu nome" autoComplete="name" />
            </label>
            <label>
              Telefone
              <input name="telefone" value={dados.telefone} onChange={mudar} placeholder="(00) 00000-0000" autoComplete="tel" type="tel" />
            </label>
            <label>
              Mensagem *
              <textarea name="mensagem" value={dados.mensagem} onChange={mudar} required rows="4" placeholder="Como podemos ajudar?" />
            </label>
            {enviado && <p className="formulario-ok" role="status">Abrimos o WhatsApp com a sua mensagem. Se não abriu, toque no número ao lado.</p>}
            <button type="submit" className="botao botao-principal"><FaPaperPlane /> Enviar pelo WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato
