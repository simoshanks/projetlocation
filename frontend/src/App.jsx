
import { Route, Routes } from 'react-router-dom'
import Navbar from '../public/composant/Navbar'
import './App.css'
import Accueil from '../public/pages/Accueil'
import Apropos from '../public/pages/Apropos'
import Contact from '../public/pages/Contact'

import Footer from '../public/composant/Footer'
import Infovoiture from '../public/pages/Infovoiture'
import Login from '../public/composant/login'
import { useState } from 'react'
import Admin from '../public/pages/Admin'

import Nouvelvoiture from '../public/composant/Nouvelvoiture'
import Modifiervoiture from '../public/composant/Modifiervoiture'
import Nouvelutilisateur from '../public/composant/Nouvelutilisateur'
import Listvoitures from '../public/composant/Listvoitures'
import Userprofil from '../public/pages/Userprofil'

import Tablevoiture from '../public/composant/Tablevoiture'
import Tablereservation from '../public/composant/Tablereservation'
import Tablemessages from '../public/composant/tablemessages'
import Listusers from '../public/composant/Tableusers';



function App() {
  const [user, setUser] = useState(null)



  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/voiture" element={<Listvoitures />} />
        <Route path="/infovoiture/:id" element={<Infovoiture user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/userprofil" element={<Userprofil />} />

        <Route path="/nouvel-voiture" element={<Nouvelvoiture />} />
        <Route path="/modifier/:id" element={<Modifiervoiture />} />
        <Route path="/new-compte" element={<Nouvelutilisateur />} />

        <Route path="/admin" element={<Admin />}>
          <Route index element={<Tablevoiture />} /> 
          <Route path="tablevoiture" element={<Tablevoiture />} />
          <Route path="tableuser" element={<Listusers />} />
          <Route path="tablereservation" element={<Tablereservation />} />
          <Route path="tablemessage" element={<Tablemessages />} />
        </Route>
      </Routes>
      <Footer />

    </>
  )
}

export default App
