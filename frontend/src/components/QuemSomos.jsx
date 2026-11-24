import React from 'react'
import { FaBullseye, FaEye, FaHeart } from 'react-icons/fa'

const VALORES = ['Ética e transparência', 'Excelência', 'Compromisso', 'Inovação', 'Respeito']

const QuemSomos = () => (
  <section id="quem-somos" className="secao">
    <div className="container quem-grade">
      <div className="quem-texto">
        <p className="sobretitulo">Quem somos</p>
        <h2>Sua parceira em contabilidade digital</h2>
        <p>
          A <strong>Baycont Contabilidade Digital e Assessoria Empresarial</strong> nasceu da visão de
          transformar a forma como as empresas lidam com suas obrigações contábeis e fiscais.
        </p>
        <p>
          Com sede em <strong>Uberlândia-MG</strong>, oferecemos soluções contábeis modernas e
          personalizadas, combinando tecnologia de ponta com atendimento humanizado.
        </p>
        <p>
          Nossa equipe é formada por profissionais experientes e qualificados, comprometidos em oferecer
          o melhor serviço contábil para empresas de todos os portes e segmentos. Acreditamos que a
          contabilidade vai além dos números: é uma ferramenta estratégica para o crescimento do seu negócio.
        </p>
      </div>

      <div className="quem-cartoes">
        <article className="cartao cartao-linha">
          <span className="icone-caixa"><FaBullseye /></span>
          <div>
            <h3>Missão</h3>
            <p>
              Proporcionar soluções contábeis e empresariais de excelência, aliando tecnologia,
              conhecimento técnico e atendimento personalizado, para contribuir com o crescimento
              sustentável e a conformidade legal dos nossos clientes.
            </p>
          </div>
        </article>
        <article className="cartao cartao-linha">
          <span className="icone-caixa"><FaEye /></span>
          <div>
            <h3>Visão</h3>
            <p>
              Ser referência em contabilidade digital e assessoria empresarial na região, reconhecida pela
              qualidade dos serviços, pela inovação e pela capacidade de transformar números em estratégias
              de sucesso.
            </p>
          </div>
        </article>
        <article className="cartao cartao-linha">
          <span className="icone-caixa"><FaHeart /></span>
          <div>
            <h3>Valores</h3>
            <ul className="etiquetas">
              {VALORES.map((valor) => <li key={valor}>{valor}</li>)}
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
)

export default QuemSomos
