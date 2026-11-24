import React from 'react'
import { FaBuilding, FaFileSignature, FaLaptop, FaChartLine, FaFileInvoiceDollar, FaUsers, FaWhatsapp } from 'react-icons/fa'
import { whatsappCom } from '../dados'

const SERVICOS = [
  {
    icone: <FaBuilding />,
    titulo: 'Abertura de empresa',
    texto: 'Cuidamos de todo o processo, da escolha do tipo jurídico ao registro nos órgãos competentes, para você começar com segurança e agilidade.',
  },
  {
    icone: <FaFileSignature />,
    titulo: 'Alteração contratual',
    texto: 'Mudança de endereço, entrada ou saída de sócios, alteração de capital social e demais mudanças, com total conformidade legal.',
  },
  {
    icone: <FaLaptop />,
    titulo: 'Contabilidade digital mensal',
    texto: 'Contabilidade completa e 100% digital, com acesso online a relatórios gerenciais e demonstrativos contábeis.',
  },
  {
    icone: <FaChartLine />,
    titulo: 'Assessoria empresarial',
    texto: 'Apoio às decisões, análise de viabilidade, planejamento tributário e redução de custos para o crescimento sustentável.',
  },
  {
    icone: <FaFileInvoiceDollar />,
    titulo: 'Escrita fiscal',
    texto: 'Notas fiscais, apuração de impostos (ICMS, ISS, PIS, COFINS, IPI) e entrega das obrigações acessórias, como SPED Fiscal e Contribuições.',
  },
  {
    icone: <FaUsers />,
    titulo: 'Departamento pessoal',
    texto: 'Folha de pagamento, admissões e demissões, férias, 13º salário, eSocial, FGTS e todas as obrigações trabalhistas em dia.',
  },
]

const Servicos = () => (
  <section id="servicos" className="secao secao-clara">
    <div className="container">
      <div className="secao-cabecalho">
        <p className="sobretitulo">Serviços</p>
        <h2>Tudo o que a sua empresa precisa</h2>
        <p>Soluções completas em contabilidade e assessoria empresarial, em um só lugar.</p>
      </div>

      <div className="grade-3">
        {SERVICOS.map((servico) => (
          <article key={servico.titulo} className="cartao cartao-servico">
            <span className="icone-caixa">{servico.icone}</span>
            <h3>{servico.titulo}</h3>
            <p>{servico.texto}</p>
          </article>
        ))}
      </div>

      <div className="faixa-chamada">
        <div>
          <h3>Precisa de ajuda para escolher o serviço ideal?</h3>
          <p>Conte o que a sua empresa precisa e indicamos a melhor solução.</p>
        </div>
        <a
          className="botao botao-claro"
          href={whatsappCom('Olá! Gostaria de ajuda para escolher um serviço da Baycont.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp /> Falar com um especialista
        </a>
      </div>
    </div>
  </section>
)

export default Servicos
