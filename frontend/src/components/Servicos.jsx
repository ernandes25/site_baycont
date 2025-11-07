import React from 'react'
import { FaBuilding, FaFileAlt, FaLaptop, FaChartLine, FaFileInvoiceDollar, FaUsers } from 'react-icons/fa'
import './Servicos.css'

const Servicos = () => {
  const servicos = [
    {
      icon: <FaBuilding />,
      title: 'Abertura de Empresa',
      description: 'Auxiliamos todo o processo de abertura da sua empresa, desde a escolha do tipo jurídico até o registro nos órgãos competentes. Cuidamos de toda a burocracia para você começar seu negócio com segurança e agilidade.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Alteração Contratual',
      description: 'Realizamos todas as alterações contratuais necessárias para sua empresa, incluindo mudança de endereço, inclusão ou exclusão de sócios, alteração de capital social e outras modificações com total conformidade legal.'
    },
    {
      icon: <FaLaptop />,
      title: 'Assessoria Contábil Digital Mensal',
      description: 'Contabilidade completa 100% digital com acesso online a relatórios gerenciais, demonstrativos contábeis e acompanhamento em tempo real. Tecnologia e praticidade para sua gestão financeira.'
    },
    {
      icon: <FaChartLine />,
      title: 'Assessoria Empresarial',
      description: 'Consultoria estratégica para tomada de decisões, análise de viabilidade de projetos, planejamento tributário, redução de custos e orientações para o crescimento sustentável do seu negócio.'
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Escrita Fiscal',
      description: 'Processamento de notas fiscais, apuração de impostos (ICMS, ISS, PIS, COFINS, IPI), entrega de obrigações acessórias (SPED Fiscal, SPED Contribuições) e toda gestão fiscal da sua empresa.'
    },
    {
      icon: <FaUsers />,
      title: 'Departamento Pessoal',
      description: 'Gestão completa de folha de pagamento, admissão e demissão de funcionários, férias, 13º salário, encargos sociais, eSocial, FGTS e todas as obrigações trabalhistas com pontualidade e precisão.'
    }
  ]

  return (
    <section id="servicos" className="section servicos">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Soluções completas em contabilidade e assessoria empresarial para o seu negócio
        </p>

        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div key={index} className="servico-card">
              <div className="servico-icon">
                {servico.icon}
              </div>
              <h3>{servico.title}</h3>
              <p>{servico.description}</p>
              <button 
                className="btn-saiba-mais"
                onClick={() => {
                  const element = document.getElementById('contato')
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - offset
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                  }
                }}
              >
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        <div className="servicos-cta">
          <h3>Precisa de ajuda para escolher o serviço ideal?</h3>
          <p>Nossa equipe está pronta para entender suas necessidades e oferecer a melhor solução</p>
          <button 
            className="btn btn-primary"
            onClick={() => window.open('https://wa.me/553497249781', '_blank')}
          >
            Fale com um Especialista
          </button>
        </div>
      </div>
    </section>
  )
}

export default Servicos
