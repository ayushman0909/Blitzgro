import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Aboutus from "./pages/Aboutus.jsx"
import Service from "./pages/Service.jsx"
import Casestudies from "./pages/Casestudies.jsx"
import Blogs from "./pages/Blogs.jsx"
import Contactus from "./pages/Contactus.jsx"
import Footer from './components/Footer/Footer.jsx'
import BlogDetail from './pages/BlogDetail.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'

// Import your loader functions
import { startLoading, stopLoading } from './Utils/PageLoader.js' 

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Start the loading bar when path changes
    startLoading();

    // 2. Stop the loading bar after a short delay to simulate page load
    const timer = setTimeout(() => {
      stopLoading();
    }, 400);

    // Cleanup timer if user clicks another link quickly
    return () => clearTimeout(timer);
  }, [location.pathname]); // This triggers on every route change

  return (
    <div className="w-full bg-white dark:bg-black">
      <Navbar />
      <div className="px-1 h-auto">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/' element={<Navigate to={"/home"} replace />} />
          <Route path='/services' element={<Service />} />
          <Route path='/services/:slug' element={<ServiceDetail />} />
          <Route path='/about-us' element={<Aboutus />} />
          <Route path='/case-studies' element={<Casestudies />} />
          <Route path='/case-studies/:slug' element={<CaseStudyDetail />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path='/contact-us' element={<Contactus />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App