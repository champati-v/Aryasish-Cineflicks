import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/My-Services/Services'
import About from './Components/About/About'
import Contact from './Components/Contact-us/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App