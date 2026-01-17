import React from 'react'
import HeroSection from '../components/Herosection/HeroSection'
import Countup from '../components/Counter/Countup'
import Herosectionimage1 from "../assets/homeherosection.png"
import Herosectionimage2 from "../assets/homeherosection2.png";
import Herosectionimage3 from "../assets/homeherosection3.png";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import OurProcess from "../components/OurProcess/OuProcess"
import OurClients from '../components/OurClients/OurClients';
import PureRoutes from '../components/PureRoutes/PureRoutes';
const Home = () => {

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
const stats = [
    { value: "10+ ", label: "Advised Brands Across Food & Hospitality" },
    { value: "20+", label: "Industry & Consulting Experience" },
    { value: "70%", label: "Success Rate" },
    { value: "5+", label: "Operating Across Cities" },
  ];
  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} stats={stats}/>
      <PureRoutes/>
       <WhoWeServe/>
       <WhyChooseUs/>
       <OurProcess/>
       <OurClients/>
    </div>
  )
}

export default Home
