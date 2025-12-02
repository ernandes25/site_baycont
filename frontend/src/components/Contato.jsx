import React, { useState } from 'react'
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import './Contato.css'

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Criar mensagem formatada para WhatsApp
    const mensagemWhatsApp = `*Nova mensagem do site Baycont*%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone || 'Não informado'}%0A%0A` +
      `*Mensagem:*%0A${formData.mensagem}`

    // Número do WhatsApp (34 9724-9781)
    const numeroWhatsApp = '553497249781'
    
    // Abrir WhatsApp com a mensagem
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`
    
    // Aguardar um pouco para dar feedback visual
    setTimeout(() => {
      window.open(urlWhatsApp, '_blank')
      
      setStatus({
        type: 'success',
        message: 'Redirecionando para o WhatsApp... Se não abrir automaticamente, clique no link acima!'
      })
      
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      })
      
      setIsLoading(false)
    }, 500)
  }

  return (
    <section id="contato" className="section contato">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">
          Estamos prontos para atender você e sua empresa
        </p>

        <div className="contato-wrapper">
          <div className="contato-info">
            <h3>Fale Conosco</h3>
            <p>
              Nossa equipe está pronta para ajudar você com as melhores soluções contábeis.
              Entre em contato através dos nossos canais de atendimento.
            </p>

            <div className="info-items">
              <div className="info-item">
                <FaWhatsapp />
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/553497249781" target="_blank" rel="noopener noreferrer">
                    (34) 9724-9781
                  </a>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope />
                <div>
                  <h4>E-mail</h4>
                  <a href="mailto:baycontassessoria@gmail.com">
                    baycontassessoria@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <FaInstagram />
                <div>
                  <h4>Instagram</h4>
                  <a href="https://www.instagram.com/baycontassessoria?igsh=NzRxNWtnOXltdXBv" target="_blank" rel="noopener noreferrer">
                    @baycontassessoria
                  </a>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <h4>Localização</h4>
                  <p>Uberlândia - MG</p>
                </div>
              </div>
            </div>

            <div className="horario-atendimento">
              <h4>Horário de Atendimento</h4>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>

          <div className="contato-form-wrapper">
            <form className="contato-form" onSubmit={handleSubmit}>
              <h3>Envie sua Mensagem</h3>
              
              <div className="form-group">
                <label htmlFor="nome">Nome Completo *</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? (
                  'Enviando...'
                ) : (
                  <>
                    <FaPaperPlane /> Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
