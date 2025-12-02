import { useEffect, useState } from 'react'
import mbdsLogo from './../../assets/mbds.svg'

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

export default Header