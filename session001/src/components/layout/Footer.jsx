import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p>© {year}- Pierre Robentz Cassion, Tous droits réservés</p>
    </footer>
  )
}

export default Footer