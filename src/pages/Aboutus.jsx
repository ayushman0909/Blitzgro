import React from "react";
import HeroSection from "../components/Herosection/HeroSection";
import Herosectionimage1 from "../assets/homeherosection.jpeg";
import Herosectionimage2 from "../assets/homeherosection2.jpeg";
import Herosectionimage3 from "../assets/homeherosection3.jpeg";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Whoweare from "../assets/Aboutus/whoweare.jpg";
import whatwedo from "../assets/Aboutus/whatwedo.jpg";
import why from "../assets/Aboutus/why.png";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
import FounderCards from "../components/Founder/FounderCards";
import Ayushman from "../assets/Aboutus/Ayushman.jpeg";
import ShaktiSir from "../assets/Aboutus/shaktiSir.jpg";
import PuspendraSir from "../assets/Aboutus/Puspendrasir.png";
import FounderMessage from "../components/FoundersMessage/FounderMessage";
import PageWrapper from "../components/PageWrapper";
import ownershipimg from "../assets/Aboutus/ownershipimg.jpeg"
import authenticity from "../assets/Aboutus/authenticity.jpeg"
import aboutusLogo1 from "../assets/Aboutus/aboutusLogo1.png"
import aboutusLogo2 from "../assets/Aboutus/aboutusLogo2.png"
import aboutusLogo3 from "../assets/Aboutus/aboutusLogo3.png"
import Jiya from "../assets/Aboutus/Jiya.jpeg"
import Swami from "../assets/Aboutus/Swami.jpeg"
import Bhoomika from "../assets/Aboutus/Bhoomika.jpeg"


const Aboutus = () => {
  // HeroSection Data

  const heroSectionData = {
    heading1: "Your Growth Partner ",
  
    heading2: "for the Food & Hospitality Industry",
    subheading:
      " At BlitzGro, we work exclusively with food and hospitality businesses to help them grow smarter, stronger, and sustainably We don’t believe in generic consulting. Every strategy we build is tailored, data-driven, and designed for long-term impact. ",
    cta1: {
      title: "Schedule a Strategy Call",
      path: "/contact-us",
    },
    cta2: {
      title: "Explore Our Journey",
      path: "/",
    },
    bannerimage1: Herosectionimage1,
    bannerimage2: Herosectionimage2,
    bannerimage3: Herosectionimage3,
  };
 
  // About Section

  const AboutFeatures = [
    {
      title: "Who We Are",

      description:
        "BlitzGro was founded to be a catalyst for change in the food business. We specialize exclusively in HoReCa and HoReCa-adjacent markets, where we've built deep expertise across channels including Wholesale, FMCG Retail, Modern Trade, Food Delivery, and Quick Commerce. Our strength lies in GTM execution: translating market understanding into strategies that actually move product and build lasting distribution.",

      image: Whoweare,
    },
    {
      title: "What We Do",

      description:
        "We offer focused consulting for food brands operating in or entering HoReCa and HoReCa-adjacent markets.",
      points: [
        "Business Strategy: GTM strategies built around how food actually sells, across Wholesale, FMCG Retail, Modern Trade, Food Delivery, and Quick Commerce",
        "Supply Chain Optimization: Streamlining and scaling supply chains for efficiency, reliability, and cost-effectiveness across HoReCa and adjacent channels.",
       " Market Entry and Expansion: Channel selection, distribution setup, and go-to-market execution to unlock new market opportunities."
      ],
      image: whatwedo,

      reverse: true,
    },
    {
      title: "Why BlitzGro?",

      description:
        "We don't just consult, we get in the trenches with you. Having built and scaled distribution across HoReCa and adjacent channels ourselves, we understand what it takes to move product in the real world, not just on a slide deck.Every engagement is built around your specific market, your channels, and your growth stage, because a wholesale play looks nothing like a Quick Commerce launch.",

      image: why,
    },
  ];

  // What Do We Believe In Section 

  const WhatDoWeBelieveInHeadings = {
    heading: "What Do We Believe In",
    subheading: "OUR CORE VALUES",
  };
  const WhatDoWeBelieveInfeatures = [
    {
      title: "Authenticity",
      description:[
        {
          heading:"",
          detail:"We say what we mean and mean what we say, with our clients, our partners, and our people."
        }
      ]
        ,
      icon:aboutusLogo1,
      iconImage:aboutusLogo1,
     
    },
    
    {
      title: "Empathy",
      description:[
        {
          heading:"",
          detail:"We take time to understand before we act. This applies equally to the businesses we work with and the team we're building inside BlitzGro."
        }
      ]
        ,
      icon: "☁️",
       iconImage:aboutusLogo2,
      
    },
    {
      title: "Ownership",
      description:[
        {
          heading:"",
          detail:"We treat every engagement as if it were our own business. The outcome is our responsibility, not just the advice"
        }
      ]
      ,
      icon: "📊",
       iconImage:aboutusLogo3,
      
    },
  ];

  // Founders Section
  const FoundersDetails = [
    
    {
      name: "Shakti Swami",
      role: "Co-Founder",
      image: ShaktiSir,
      bio: " Co-Founder at BlitzGro & Batman Delivers, India’s first late-night food delivery service. Leadership experience from Zomato and a passion for growth and innovation ",
      social: { twitter: "#", linkedin: "https://www.linkedin.com/in/shaktiswami/", github: "#" },
    },
    {
      name: "Puspendra Tiwari",
      role: "Co-Founder",
      image: PuspendraSir,
      bio: "Co-Founder at BlitzGro With Leadership across retail, food platforms, and regulated enterprises including Landmark Group, Nature’s Basket (Godrej Group), Zomato (Feeding India)",
      social: { linkedin: "https://www.linkedin.com/in/pushpendra-tiwari-8095a627/"},
    },
    {
      name: "Swami sir",
      role: "Business Development Manager",
      image: Swami,
      bio: "Business Development Manager at BlitzGro with 15 years of experience in hospitality and sales, specializing in B2B growth, account management, and client relationship building.",
      social: { twitter: "#", linkedin: "https://www.linkedin.com/in/narayanswamy-a-68046216/", github: "#" },
    },
     {
      name: "Bhoomika Chouksey",
      role: "Marketing Associate",
      image: Bhoomika,
      bio: "Marketing Associate at Blitzgro,with a strong focus on social media strategy, content planning, and brand visibility.Contributing to measurable growth across platforms. ",
      social: { twitter: "#", linkedin: "https://www.linkedin.com/in/bhoomika-chouksey-4b26b323a/", github: "#" },
    },
    {
      name: "Ayushman Verma",
      role: "Client Enterprises Specialist",
      image: Ayushman,
      bio: "Client Enterprise Specialist at BlitzGro, helping businesses identify growth opportunities, build client relationships, and drive enterprise sales solutions.",
      social: { twitter: "#", linkedin: "https://www.linkedin.com/in/ayushman-verma-2a0768311/?skipRedirect=true", github: "#" },
    },
    {
      name: "Jiya Sehgal",
      role: "Client Enterprises Specialist",
      image: Jiya,
      bio: "Helping businesses unlock new opportunities, build meaningful client partnerships, and implement enterprise solutions that enhance growth and operational efficiency.",
      social: { twitter: "#", linkedin: "https://www.linkedin.com/in/jiya-sehgal-7bb796391/", github: "#" },
    },
    
  ];

  return (
    <PageWrapper>
      {/* <HeroSection heroSectionData={heroSectionData} /> */}
      <WhyChooseUs features={AboutFeatures} />
      <WhoWeServe
        features={WhatDoWeBelieveInfeatures}
        headings={WhatDoWeBelieveInHeadings}
      />
      <FounderCards profiles={FoundersDetails} />
      {/* <FounderMessage/> */}
    </PageWrapper>
  );
};

export default Aboutus;
