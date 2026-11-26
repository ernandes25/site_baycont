import { useEffect } from 'react'

// Animações de entrada ao rolar a página: cada bloco surge suavemente quando chega na tela.
// [seletor, direção]. Itens lado a lado (grades) entram um pouco depois do vizinho, em "cascata".
const REGRAS = [
  ['.secao-cabecalho', 'cima'],
  ['.quem-texto', 'esquerda'],
  ['.quem-cartoes > *', 'direita'],
  ['.grade-3 > *, .grade-4 > *', 'cima'],
  ['.faixa-chamada', 'zoom'],
  ['.contato-canais > *', 'esquerda'],
  ['.contato-grade > .formulario', 'direita'],
  ['.noticias-aviso', 'cima'],
]
const PASSO = 200       // ms entre um item e o próximo da mesma linha
const DURACAO = 1200    // ms da animação (igual ao CSS)

const colunasDa = (grade) => {
  const colunas = getComputedStyle(grade).gridTemplateColumns
  return colunas && colunas !== 'none' ? colunas.split(' ').length : 1
}

// `chave` muda quando entram blocos novos na página (ex.: as notícias, que chegam depois).
export const useRevelar = (chave) => {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(({ isIntersecting, target }) => {
        if (!isIntersecting) return
        observador.unobserve(target)
        target.classList.add('revelado')
        // Terminada a entrada, o bloco volta ao estilo normal (o efeito de passar o mouse continua rápido).
        const atraso = parseInt(target.style.getPropertyValue('--atraso'), 10) || 0
        setTimeout(() => {
          target.removeAttribute('data-revelar')
          target.classList.remove('revelado')
          target.style.removeProperty('--atraso')
        }, atraso + DURACAO + 100)
      })
    }, // Só começa quando o bloco já passou do pé da tela (a última quinta parte não conta), para dar tempo de ver.
    { threshold: 0.15, rootMargin: '0px 0px -20% 0px' })

    REGRAS.forEach(([seletor, direcao]) => {
      document.querySelectorAll(seletor).forEach((bloco) => {
        if (bloco.dataset.animado) return
        bloco.dataset.animado = 'sim'  // marca: cada bloco anima uma vez só
        bloco.dataset.revelar = direcao
        const pai = bloco.parentElement
        const posicao = Array.prototype.indexOf.call(pai.children, bloco)
        const naLinha = getComputedStyle(pai).display === 'grid' ? posicao % colunasDa(pai) : posicao
        bloco.style.setProperty('--atraso', `${Math.min(naLinha, 5) * PASSO}ms`)
      })
    })
    document.querySelectorAll('[data-revelar]:not(.revelado)').forEach((bloco) => observador.observe(bloco))

    return () => observador.disconnect()
  }, [chave])
}
