import React, { useState } from 'react'
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa'
import './QuemSomos.css'

const QuemSomos = () => {
  const [activeTab, setActiveTab] = useState('sobre')

  return (
    <section id="quem-somos" className="section quem-somos">
      <div className="container">
        <h2 className="section-title">Quem Somos</h2>
        <p className="section-subtitle">Conheça a Baycont e nossos valores</p>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'sobre' ? 'active' : ''}`}
            onClick={() => setActiveTab('sobre')}
          >
            Sobre Nós
          </button>
          <button 
            className={`tab ${activeTab === 'valores' ? 'active' : ''}`}
            onClick={() => setActiveTab('valores')}
          >
            <FaHeart /> Valores
          </button>
          <button 
            className={`tab ${activeTab === 'missao' ? 'active' : ''}`}
            onClick={() => setActiveTab('missao')}
          >
            <FaBullseye /> Missão
          </button>
          <button 
            className={`tab ${activeTab === 'visao' ? 'active' : ''}`}
            onClick={() => setActiveTab('visao')}
          >
            <FaEye /> Visão
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'sobre' && (
            <div id="sobre" className="content-card fade-in">
              <div className="content-grid">
                <div className="content-text">
                  <h3>Baycont - Sua Parceira em Contabilidade Digital</h3>
                  <p>
                    A <strong>Baycont Contabilidade Digital e Assessoria Empresarial</strong> nasceu da visão de 
                    revolucionar a forma como empresas lidam com suas obrigações contábeis e fiscais.
                  </p>
                  <p>
                    Com sede em <strong>Uberlândia-MG</strong>, oferecemos soluções contábeis modernas e personalizadas, 
                    combinando tecnologia de ponta com atendimento humanizado.
                  </p>
                  <p>
                    Nossa equipe é formada por profissionais experientes e qualificados, comprometidos em 
                    oferecer o melhor serviço contábil para empresas de todos os portes e segmentos.
                  </p>
                  <p>
                    Acreditamos que a contabilidade vai além dos números - ela é uma ferramenta estratégica 
                    fundamental para o crescimento e sucesso do seu negócio.
                  </p>
                </div>
                <div className="content-image">
                  <img src="/assets/quem-somos.png" alt="Quem Somos" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'valores' && (
            <div id="valores" className="content-card fade-in">
              <div className="content-grid">
                <div className="content-image">
                  <img src="/assets/valores.png" alt="Nossos Valores" />
                </div>
                <div className="content-text">
                  <h3>Nossos Valores</h3>
                  <ul className="values-list">
                    <li>
                      <strong>Ética e Transparência:</strong> Atuamos com integridade em todas as nossas relações, 
                      mantendo a transparência em cada processo.
                    </li>
                    <li>
                      <strong>Excelência:</strong> Buscamos continuamente a melhoria dos nossos serviços, 
                      investindo em capacitação e tecnologia.
                    </li>
                    <li>
                      <strong>Compromisso:</strong> Estamos comprometidos com o sucesso dos nossos clientes, 
                      oferecendo soluções que realmente fazem a diferença.
                    </li>
                    <li>
                      <strong>Inovação:</strong> Utilizamos as melhores ferramentas digitais para otimizar 
                      processos e entregar resultados superiores.
                    </li>
                    <li>
                      <strong>Respeito:</strong> Valorizamos cada cliente, colaborador e parceiro, 
                      construindo relações duradouras baseadas no respeito mútuo.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'missao' && (
            <div id="missao" className="content-card fade-in">
              <div className="content-grid">
                <div className="content-text">
                  <h3>Nossa Missão</h3>
                  <p className="mission-text">
                    Proporcionar soluções contábeis e empresariais de excelência, aliando tecnologia, 
                    conhecimento técnico e atendimento personalizado para contribuir com o crescimento 
                    sustentável e a conformidade legal dos nossos clientes.
                  </p>
                  <p>
                    Acreditamos que nosso papel vai além de cumprir obrigações fiscais. Queremos ser 
                    parceiros estratégicos na jornada de crescimento das empresas, oferecendo insights 
                    valiosos e orientações que fazem a diferença no dia a dia empresarial.
                  </p>
                </div>
                <div className="content-image">
                  <img src="/assets/missao.png" alt="Nossa Missão" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'visao' && (
            <div id="visao" className="content-card fade-in">
              <div className="content-grid">
                <div className="content-image">
                  <img src="/assets/visao.png" alt="Nossa Visão" />
                </div>
                <div className="content-text">
                  <h3>Nossa Visão</h3>
                  <p className="vision-text">
                    Ser referência em contabilidade digital e assessoria empresarial na região, 
                    reconhecida pela qualidade dos serviços, inovação tecnológica e pela capacidade 
                    de transformar números em estratégias de sucesso para nossos clientes.
                  </p>
                  <p>
                    Buscamos constantemente evoluir e nos adaptar às mudanças do mercado, 
                    antecipando as necessidades dos nossos clientes e oferecendo soluções 
                    que estejam sempre um passo à frente.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default QuemSomos
