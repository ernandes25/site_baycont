import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Servicos from './components/Servicos'
import Diferenciais from './components/Diferenciais'
import LinksUteis from './components/LinksUteis'
import Noticias, { useNoticias } from './components/Noticias'
import { useRevelar } from './revelar'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  const noticias = useNoticias()
  useRevelar(noticias.length)  // as notícias chegam depois: os cartões delas também animam

  return (
    <>
      <Header temNoticias={noticias.length > 0} />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Diferenciais />
        <LinksUteis />
        <Noticias noticias={noticias} />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
