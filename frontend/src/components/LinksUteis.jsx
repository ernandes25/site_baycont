import React from 'react'
import {
  FaLandmark, FaUniversity, FaBriefcase, FaRocket, FaClipboardList, FaLaptopCode, FaChartBar, FaBalanceScale, FaExternalLinkAlt,
} from 'react-icons/fa'

const LINKS = [
  { titulo: 'Receita Federal', texto: 'Portal oficial da Receita Federal do Brasil', url: 'https://www.gov.br/receitafederal/pt-br', icone: <FaLandmark /> },
  { titulo: 'Banco Central', texto: 'Banco Central do Brasil (BACEN)', url: 'https://www.bcb.gov.br', icone: <FaUniversity /> },
  { titulo: 'SEBRAE', texto: 'Apoio às micro e pequenas empresas', url: 'https://www.sebrae.com.br', icone: <FaBriefcase /> },
  { titulo: 'Portal do Empreendedor', texto: 'Informações e serviços para o MEI', url: 'https://www.gov.br/empresas-e-negocios/pt-br/empreendedor', icone: <FaRocket /> },
  { titulo: 'Junta Comercial', texto: 'Registro e alterações empresariais', url: 'https://www.gov.br/empresas-e-negocios/pt-br/juntas-comerciais', icone: <FaClipboardList /> },
  { titulo: 'eSocial', texto: 'Obrigações trabalhistas e previdenciárias', url: 'https://www.gov.br/esocial/pt-br', icone: <FaLaptopCode /> },
  { titulo: 'Simples Nacional', texto: 'Portal do Simples Nacional', url: 'http://www8.receita.fazenda.gov.br/SimplesNacional/', icone: <FaChartBar /> },
  { titulo: 'CFC', texto: 'Conselho Federal de Contabilidade', url: 'https://cfc.org.br', icone: <FaBalanceScale /> },
]

const LinksUteis = () => (
  <section id="links-uteis" className="secao secao-clara">
    <div className="container">
      <div className="secao-cabecalho">
        <p className="sobretitulo">Links úteis</p>
        <h2>Acesso rápido aos principais portais</h2>
      </div>
      <div className="grade-4">
        {LINKS.map((link) => (
          <a key={link.titulo} href={link.url} target="_blank" rel="noopener noreferrer" className="cartao cartao-link">
            <span className="icone-caixa icone-caixa-pequena">{link.icone}</span>
            <span className="cartao-link-texto">
              <strong>{link.titulo}</strong>
              <small>{link.texto}</small>
            </span>
            <FaExternalLinkAlt className="cartao-link-seta" aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </section>
)

export default LinksUteis
