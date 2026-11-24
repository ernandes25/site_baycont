import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Servicos from './components/Servicos'
import Diferenciais from './components/Diferenciais'
import LinksUteis from './components/LinksUteis'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Diferenciais />
        <LinksUteis />
        <Contato />
      </main>
      <Footer />
    </>
  )
}

export default App
