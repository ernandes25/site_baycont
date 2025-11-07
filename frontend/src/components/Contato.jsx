import React, { useState } from 'react'
import axios from 'axios'
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('/api/contato', formData)
      
      if (response.data.success) {
        setStatus({
          type: 'success',
          message: response.data.message
        })
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          mensagem: ''
        })
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Erro ao enviar mensagem. Tente novamente.'
      })
    } finally {
      setIsLoading(false)
    }
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
                  <a href="https://wa.me/5534972497281" target="_blank" rel="noopener noreferrer">
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
