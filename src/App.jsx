import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Aboutus from "./pages/Aboutus.jsx"
import Service from "./pages/Service.jsx"
import Casestudies from "./pages/Casestudies.jsx"
import Blogs from "./pages/Blogs.jsx"
import Contactus from "./pages/Contactus.jsx"
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    
    <div className=" w-full bg-white dark:bg-black ">
      <Navbar/>
      <div className="px-1 border h-auto border-black ">
       <Routes>
        <Route path="/" element={<Navigate to={"/home"} replace/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/about-us' element={<Aboutus/>}/>
        <Route path='/case-studies' element={<Casestudies/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact-us' element={<Contactus/>}/>
       </Routes>
       </div>
       <Footer/>
      </div>
    
  )
}

export default App
