import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header>
      <h1>Bienvenue dans mon application React</h1>
    </header>
  )
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
      <h3>Vite + React</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <div className="card">

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        MBDS is cool!
        </p>
    </>
  )
}

export default App
