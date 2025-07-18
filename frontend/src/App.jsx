
import { Route, Routes } from 'react-router-dom'
import Navbar from '../public/composant/Navbar'
import './App.css'
import Accueil from '../public/pages/Accueil'
import Apropos from '../public/pages/Apropos'
import Contact from '../public/pages/Contact'
import Voitures from '../public/pages/Voitures'
import Footer from '../public/composant/Footer'
import Infovoiture from '../public/pages/Infovoiture'
import Login from '../public/composant/login'
import { useState } from 'react'

function App() {
  const[user,setUser]=useState(null)


  return (
    <>
      <Navbar />
      
     
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/voitures" element={<Voitures />} />
        <Route path="/infovoiture/:id" element={<Infovoiture />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
      </Routes>
       <Footer/>

    </>
  )
}

export default App
