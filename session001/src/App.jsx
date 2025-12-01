import { useState } from 'react'
import mbdsLogo from './assets/mbds.svg'
import './App.css'

function Header() {
  return (
    <header>
      {/* logo */}
      <img src={mbdsLogo} className="logo" alt="MBDS logo" />
      {/* title */}
      <h1>Introduction à React</h1>
      {/* subtitle */}
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}

function MainContent() {
  return (
    <main>
      <p>Ici, nous afficherons des informations interessantes :)</p>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <p>Tous droits réservés - Cassion Pierre Robentz</p>
    </footer>
  )
}

function App() {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
