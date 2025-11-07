import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import './LinksUteis.css'

const LinksUteis = () => {
  const links = [
    {
      title: 'Receita Federal',
      url: 'https://www.gov.br/receitafederal/pt-br',
      description: 'Portal oficial da Receita Federal do Brasil',
      icon: '🏛️'
    },
    {
      title: 'Banco Central',
      url: 'https://www.bcb.gov.br',
      description: 'Banco Central do Brasil - BACEN',
      icon: '🏦'
    },
    {
      title: 'SEBRAE',
      url: 'https://www.sebrae.com.br',
      description: 'Serviço Brasileiro de Apoio às Micro e Pequenas Empresas',
      icon: '💼'
    },
    {
      title: 'Portal do Empreendedor',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor',
      description: 'Informações e serviços para empreendedores',
      icon: '🚀'
    },
    {
      title: 'Junta Comercial',
      url: 'https://www.gov.br/empresas-e-negocios/pt-br/juntas-comerciais',
      description: 'Registro e alterações empresariais',
      icon: '📋'
    },
    {
      title: 'eSocial',
      url: 'https://www.gov.br/esocial/pt-br',
      description: 'Sistema de Escrituração Digital das Obrigações Fiscais',
      icon: '💻'
    },
    {
      title: 'Simples Nacional',
      url: 'http://www8.receita.fazenda.gov.br/SimplesNacional/',
      description: 'Portal do Simples Nacional',
      icon: '📊'
    },
    {
      title: 'CFC - Conselho Federal de Contabilidade',
      url: 'https://cfc.org.br',
      description: 'Conselho Federal de Contabilidade',
      icon: '⚖️'
    }
  ]

  return (
    <section className="section links-uteis">
      <div className="container">
        <h2 className="section-title">Links Úteis</h2>
        <p className="section-subtitle">
          Acesso rápido aos principais portais e órgãos importantes para sua empresa
        </p>

        <div className="links-grid">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">{link.icon}</div>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
              <span className="link-arrow">
                <FaExternalLinkAlt />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LinksUteis
