import { useState } from 'react'
import mbdsLogo from './assets/mbds.svg'
import './App.css'

function Header() {
  return (
    <header>
      {/* logo */}
      <img src={mbdsLogo} className="mbds-logo" alt="MBDS logo" />
      {/* title */}
      <h1>Introduction à React</h1>
      {/* subtitle */}
      <h2>A la découverte des premières notions de React</h2>
    </header>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header />
  )
}

export default App
