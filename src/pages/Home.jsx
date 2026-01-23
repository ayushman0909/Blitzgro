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
import RevenueFocusedBusinessScaling from "../assets/Home/Why/RevenueFocusedBusinessScaling.jpg"
import DataDrivenMarketingThatConverts from "../assets/Home/Why/DataDrivenMarketingThatConverts.jpg"
import SmarterSystemsBetterMargins from "../assets/Home/Why/SmarterSystemsBetterMargins.jpg"

const Home = () => {
// HomeSection Data

const heroSectionData={
  heading1:"Driving Sustainable Growth",
  
  heading2:"for Food & Hospitality Businesses",
  subheading:"Strategic consulting for hospitality and food businesses — from market entry and demand generation to operations, supply chain, and sustainable growth.",
  cta1:{
    title:"Book a Free Strategy Call",
    path:"/contact-us"
  },
  cta2:{
    title:" View Our Services",
    path:"/services"
  },
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

  // Why To Choose Us Section

   const WhyChooseUsHeadings={
    heading:"Why Choose Us",
    subheading:" Discover the features that set us apart from the competition"
   }
   const WhyChooseUsFeatures = [
    {
      title: "Revenue-Focused Business Scaling",
      subtitle: "Growth Strategy",
      description:
        "We help brands scale faster with clear, actionable growth strategies designed to increase revenue, optimize costs, and unlock new market opportunities—without guesswork.",
      points: [
        "Market & competitor analysis",
        "Custom growth roadmaps",
        "Profit-driven decision making",
      ],
      image: RevenueFocusedBusinessScaling,
       button:"Learn More"
    },
   {
  title: "Data-Driven Marketing That Converts",
  subtitle: "Performance Marketing",
  description:
    "Every campaign we run is backed by data, testing, and optimization. Our performance marketing approach ensures measurable growth, higher conversions, and maximum ROI.",
  points: [
    "Paid ads & funnel optimization",
    "Conversion rate improvement",
    "ROI & performance tracking",
  ],
  image:DataDrivenMarketingThatConverts,
   button:"Learn More",
  reverse: true,
}
,
   {
  title: "Smarter Systems. Better Margins.",
  subtitle: "Business Optimization",
  description:
    "We streamline operations, improve internal processes, and implement scalable systems so your business runs efficiently while maintaining quality and consistency.",
  points: [
    "Process & cost optimization",
    "Scalable systems setup",
    "Operational performance audits",
  ],
  image:SmarterSystemsBetterMargins,
   button:"Learn More"
}
  ];

  // Who we Serve
 const CardCount={
  large:"grid-cols-4"
 }
  const WhoWeServeHeadings={
    heading:"Who We Serve",
    subheading:"EMPOWERING DIVERSE SECTORS"
  }
   const WhoWeServefeatures = [
    {
      title: "New QSRs Startups",
      description: "Short Format QSR, Long Format QSR, Kiosk Formats",
      icon: "⚡"
    },
    {
      title: "Expansion Of Existing Brands",
      description: "Food Ventures Looking To Transforming Their Business Towards Scalability",
      icon: "🔒"
    },
    {
      title: "International Brands",
      description: "SSteering Global Food Brands Into The Dynamic Indian Market",
      icon: "☁️"
    },
    {
      title: "Cafes, Diners And Bars",
      description: "Experience Driven Coffee Shops, Diners, And Trendy Bars.",
      icon: "📊"
    }
    
  ];


  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} stats={stats}/>
      <PureRoutes/>
       <WhoWeServe features={WhoWeServefeatures} headings={WhoWeServeHeadings} CardCount={CardCount}/>
       <WhyChooseUs features={WhyChooseUsFeatures} headings={WhyChooseUsHeadings}/>
       <OurProcess/>
       <OurClients/>
    </div>
  )
}

export default Home
