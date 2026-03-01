import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Services from './Services'
import Contact from './Contact'
import Navbar from './Nav'
import Footer from './Footer'
function App() {

  return (
    <>
    
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
