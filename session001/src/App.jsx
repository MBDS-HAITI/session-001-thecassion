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
  const [now, setNow] = useState(new Date())

  // update hour every second
  setTimeout(() => setNow(new Date()), 1000)
  const Mois = now.toLocaleString('fr-FR', { month: 'long' })
  const Annee = now.getFullYear()
  const Heure = String(now.getHours()).padStart(2, '0')
  const Minute = String(now.getMinutes()).padStart(2, '0')
  const Second = String(now.getSeconds()).padStart(2, '0')
  const jourNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const jour = jourNames[now.getDay()]+' '+ String(now.getDate()).padStart(2, '0')
  return (
    <main>
      <p>Bonjour, on est le {jour} , {Mois}, {Annee} et il est {Heure}:{Minute}:{Second}</p>
    </main>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>© {year}- Pierre Robentz Cassion, Tous droits réservés</p>
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
