import React from 'react'
import { FaUserTie, FaCloud, FaClock, FaShieldAlt } from 'react-icons/fa'

const DIFERENCIAIS = [
  { icone: <FaUserTie />, titulo: 'Atendimento humano', texto: 'Você fala com quem conhece a sua empresa e acompanha o seu dia a dia.' },
  { icone: <FaCloud />, titulo: '100% digital', texto: 'Documentos, guias e relatórios online, de onde você estiver.' },
  { icone: <FaClock />, titulo: 'Prazos em dia', texto: 'Obrigações entregues no prazo, para evitar multas e surpresas.' },
  { icone: <FaShieldAlt />, titulo: 'Segurança e sigilo', texto: 'Seus dados tratados com ética, cuidado e transparência.' },
]

const Diferenciais = () => (
  <section id="diferenciais" className="secao">
    <div className="container">
      <div className="secao-cabecalho">
        <p className="sobretitulo">Diferenciais</p>
        <h2>Por que escolher a Baycont</h2>
      </div>
      <div className="grade-4">
        {DIFERENCIAIS.map((item) => (
          <article key={item.titulo} className="diferencial">
            <span className="icone-redondo">{item.icone}</span>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Diferenciais
