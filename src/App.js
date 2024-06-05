import React from 'react'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Services from './Components/Services'
import Digital from './Components/Digital'
import PropertyInq from './Components/PropertyInq'
import Expertise from './Components/Expertise'
import Partner from './Components/Partner'
import Questions from './Components/Questions'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
        <Nav/>
        <Home/>
        <Services/>
        <Digital/>  
        <PropertyInq/>
        <Expertise/>
        <Partner/>
        <Questions/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App