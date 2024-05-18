import { useState } from 'react'
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Header from './components/Header'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <Footer />
    </>
  )
}

export default App
