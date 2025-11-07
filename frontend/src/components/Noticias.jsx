import React, { useEffect, useState } from 'react'
import { FaNewspaper, FaExternalLinkAlt } from 'react-icons/fa'
import './Noticias.css'

const Noticias = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const noticias = [
    {
      title: 'Jovem Advocacia: prazo para responder ao Censo da OAB entra na reta final',
      url: 'https://www.portalcontnews.com.br/jovem-advocacia-prazo-para-responder-ao-censo-da-oab-entra-na-reta-final/',
      description: 'Confira as informações sobre o prazo final para participação no Censo da OAB.'
    },
    {
      title: 'eSocial implanta nova validação para descontos de empréstimo consignado',
      url: 'https://www.portalcontnews.com.br/esocial-implanta-nova-validacao-para-descontos-de-emprestimo-consignado-do-programa-credito-do-trabalhador/',
      description: 'Nova validação do eSocial para empréstimos consignados do Programa Crédito do Trabalhador.'
    },
    {
      title: 'Automação financeira: o avanço necessário para elevar maturidade nas organizações',
      url: 'https://www.portalcontnews.com.br/automacao-financeira-o-avanco-necessario-para-elevar-a-maturidade-e-a-governanca-nas-organizacoes/',
      description: 'Como a automação financeira pode transformar a gestão e governança empresarial.'
    },
    {
      title: 'Comissão aprova criação de novos instrumentos de crédito para PMEs',
      url: 'https://www.portalcontnews.com.br/comissao-aprova-criacao-de-novos-instrumentos-de-credito-para-pequenas-e-medias-empresas/',
      description: 'Novos instrumentos de crédito aprovados para pequenas e médias empresas.'
    },
    {
      title: 'CFC realiza eleições em Brasília e Chapa 1 é a vencedora do pleito 2025',
      url: 'https://www.portalcontnews.com.br/cfc-realiza-eleicoes-em-brasilia-e-chapa-1-e-a-vencedora-do-pleito-2025/',
      description: 'Resultado das eleições do Conselho Federal de Contabilidade para 2025.'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % noticias.length)
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [noticias.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? noticias.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % noticias.length)
  }

  return (
    <section id="noticias" className="section noticias">
      <div className="container">
        <h2 className="section-title">Notícias Contábeis</h2>
        <p className="section-subtitle">
          Fique por dentro das últimas notícias do setor contábil e empresarial
        </p>

        <div className="noticias-carousel">
          <button className="carousel-btn prev" onClick={handlePrev}>
            ‹
          </button>

          <div className="noticias-wrapper">
            {noticias.map((noticia, index) => (
              <div
                key={index}
                className={`noticia-card ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`,
                  opacity: index === currentIndex ? 1 : 0
                }}
              >
                <div className="noticia-icon">
                  <FaNewspaper />
                </div>
                <h3>{noticia.title}</h3>
                <p>{noticia.description}</p>
                <a 
                  href={noticia.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-ler-mais"
                >
                  Ler Mais <FaExternalLinkAlt />
                </a>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={handleNext}>
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {noticias.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="noticias-source">
          <p>
            Fonte: <a href="https://www.portalcontnews.com.br" target="_blank" rel="noopener noreferrer">
              Portal Cont News
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Noticias
