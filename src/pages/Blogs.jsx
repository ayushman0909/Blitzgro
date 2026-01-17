import React from 'react'
import HeroSection from '../components/Herosection/HeroSection'
import Herosectionimage1 from "../assets/homeherosection.png"
import Herosectionimage2 from "../assets/homeherosection2.png";
import Herosectionimage3 from "../assets/homeherosection3.png";
const Blogs = () => {
  const heroSectionData={
    heading1:"Driving Sustainable Growth",
    heading2:"for Food & Hospitality Businesses",
    subheading:"Strategic consulting for hospitality and food businesses — from market entry and demand generation to operations, supply chain, and sustainable growth.",
    cta1:"Book a Free Strategy Call",
    cta2:" View Our Services",
    bannerimage1:Herosectionimage1,
    bannerimage2:Herosectionimage2,
    bannerimage3:Herosectionimage3,
  
  
  }
  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
    </div>
  )
}

export default Blogs







