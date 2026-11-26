import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

// As notícias vêm prontas do arquivo /noticias.json, que o Sistema Bay atualiza sozinho duas vezes por dia
// (manchetes da Receita Federal e da Agência Brasil). Sem o arquivo, ou sem notícias, a seção e o item do menu não aparecem.
const ARQUIVO = '/noticias.json'

const dataBrasileira = (iso) => {
  const [ano, mes, dia] = String(iso).split('-')
  return dia && mes && ano ? `${dia}/${mes}/${ano}` : ''
}

const linkSeguro = (link) => typeof link === 'string' && /^https?:\/\//i.test(link)

// Lê as notícias uma vez (o App passa a lista para a seção e avisa o menu se há notícias).
export const useNoticias = () => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    let ativo = true
    fetch(ARQUIVO, { cache: 'no-cache' })
      .then((resposta) => (resposta.ok ? resposta.json() : null))
      .then((dados) => {
        const lista = Array.isArray(dados?.noticias) ? dados.noticias : []
        if (ativo) setNoticias(lista.filter((n) => n && n.titulo && linkSeguro(n.link)))
      })
      .catch(() => {}) // sem notícias, a seção e o item do menu simplesmente não aparecem
    return () => { ativo = false }
  }, [])

  return noticias
}

const Noticias = ({ noticias }) => {
  if (noticias.length === 0) return null

  return (
    <section id="noticias" className="secao">
      <div className="container">
        <div className="secao-cabecalho">
          <p className="sobretitulo">Notícias</p>
          <h2>Fique por dentro</h2>
          <p>As últimas novidades da Receita Federal e da economia que podem afetar a sua empresa.</p>
        </div>
        <div className="grade-3">
          {noticias.map((noticia) => (
            <a key={noticia.link} href={noticia.link} target="_blank" rel="noopener noreferrer"
              className="cartao cartao-noticia">
              <span className="noticia-fonte">
                {noticia.fonte}{noticia.data ? ` · ${dataBrasileira(noticia.data)}` : ''}
              </span>
              <h3>{noticia.titulo}</h3>
              {noticia.resumo && <p>{noticia.resumo}</p>}
              <span className="noticia-ler">Ler na fonte <FaExternalLinkAlt aria-hidden="true" /></span>
            </a>
          ))}
        </div>
        <p className="noticias-aviso">
          Notícias atualizadas automaticamente. O conteúdo completo e os direitos pertencem às fontes indicadas.
        </p>
      </div>
    </section>
  )
}

export default Noticias
