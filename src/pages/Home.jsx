import React from 'react'
import HeroSection from '../components/Herosection/HeroSection'
import Countup from '../components/Counter/Countup'
import Herosectionimage1 from "../assets/homeherosection.jpeg"
import Herosectionimage2 from "../assets/homeherosection2.jpeg";
import Herosectionimage3 from "../assets/homeherosection3.jpeg";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import OurProcess from "../components/OurProcess/OuProcess"
import OurClients from '../components/OurClients/OurClients';
import PureRoutes from '../components/PureRoutes/PureRoutes';
import RevenueFocusedBusinessScaling from "../assets/Home/Why/RevenueFocusedBusinessScaling.jpg"
import DataDrivenMarketingThatConverts from "../assets/Home/Why/DataDrivenMarketingThatConverts.jpg"
import SmarterSystemsBetterMargins from "../assets/Home/Why/SmarterSystemsBetterMargins.jpg"
import PageWrapper from "../components/PageWrapper";
import BlogsCards from '../components/BlogsCards/BlogCards';
import WhyChooseUsData, { WhyChooseUsHeading } from '../../Data/WhyChooseUsData';
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaRocket } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
import { GiCoffeeCup } from "react-icons/gi";

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
      //  button:"Learn More"
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
  //  button:"Learn More",
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
  //  button:"Learn More"
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
      description: [
        {heading:"",
          detail:" Short Format QSR, Long Format QSR, Kiosk Formats"
        }
       ],
      icon: <FaRocket/>
    },
    {
      title: "Expansion Of Existing Brands",
      description: [{
        heading:"",
        detail:"Food Ventures Looking To Transforming Their Business Towards Scalability"
      }]
      ,
      icon: <HiMiniArrowTrendingUp/>
    },
    {
      title: "International Brands",
      description:[{
        heading:"",
        detail:"Steering Global Food Brands Into The Dynamic Indian Market"
      }]
       ,
      icon: <FcGlobe/>
    },
    {
      title: "Cafes, Diners And Bars",

      description: [{
        heading:"",
        detail:"Experience Driven Coffee Shops, Diners, And Trendy Bars."
      }]
      ,
      icon: <GiCoffeeCup/>
    }
    
  ];


  return (
    <PageWrapper>
      <HeroSection heroSectionData={heroSectionData} stats={stats}/>
       <OurClients/>
     
       <WhoWeServe features={WhoWeServefeatures} headings={WhoWeServeHeadings} CardCount={CardCount} lgScreen='grid-cols-4'/>
        <BlogsCards features={WhyChooseUsData} BlogHeadings={WhyChooseUsHeading}  cols={3} page={"blogs"}/>
       {/* <WhyChooseUs features={WhyChooseUsFeatures} headings={WhyChooseUsHeadings}/> */}
       <OurProcess/>
        <PureRoutes/>
    </PageWrapper>
  )
}

export default Home
