import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Servicos from './components/Servicos'
import Noticias from './components/Noticias'
import LinksUteis from './components/LinksUteis'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <QuemSomos />
      <Servicos />
      <Noticias />
      <LinksUteis />
      <Contato />
      <Footer />
    </div>
  )
}

export default App
