import { useEffect, useState } from 'react'
import './App.css'
import data from '../../data.json'
import Header from './components/layout/Header/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import { Router } from './router'
function MainContent() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(intervalId)
  }, [])

  const Mois = now.toLocaleString('fr-FR', { month: 'long' })
  const Annee = now.getFullYear()
  const Heure = String(now.getHours()).padStart(2, '0')
  const Minute = String(now.getMinutes()).padStart(2, '0')
  const Second = String(now.getSeconds()).padStart(2, '0')
  const jourNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  const jour = jourNames[now.getDay()]+' '+ String(now.getDate()).padStart(2, '0')
  return (
    <>
      <p>Bonjour, on est le {jour} , {Mois}, {Annee} et il est {Heure}:{Minute}:{Second}</p>

    </>
  )
}

// function that enable to choose a random item from ../../data.json
function getRandomItem() {
  // implementation here
  const randomIndex = Math.floor(Math.random() * data.length)
  return data[randomIndex]
}

// display an item of data in the body of the page
function ItemDisplay({item}) {
/* structure of item: {"unique_id": 2,
       "course": "Physics 505",
       "student": {
           "firstname": "Kevin",
           "lastname": "Green",
           "id": 7912
       },
       "date": "2022-11-01",
       "grade": 64
     } */
  return (
    <div className="item-display">
      <h3>Course: {item.course}</h3>
      <p>Student: {item.student.firstname} {item.student.lastname} (ID: {item.student.id})</p>
      <p>Date: {item.date}</p>
      <p>Grade: {item.grade}</p>
    </div>
  )
}

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
      <Router />
      </main>
      <Footer />
    </div>
  )
}

export default App
