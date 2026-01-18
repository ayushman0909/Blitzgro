import React from "react";
import HeroSection from "../components/Herosection/HeroSection";
import Herosectionimage1 from "../assets/homeherosection.png";
import Herosectionimage2 from "../assets/homeherosection2.png";
import Herosectionimage3 from "../assets/homeherosection3.png";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Whoweare from "../assets/Aboutus/whoweare.jpg";
import whatwedo from "../assets/Aboutus/whatwedo.jpg";
import why from "../assets/Aboutus/why.png";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
import FounderCards from "../components/Founder/FounderCards";
import ChetanSir from "../assets/Aboutus/chetanSir.jpg";
import ShaktiSir from "../assets/Aboutus/shaktiSir.jpg";
import PuspendraSir from "../assets/Aboutus/Puspendrasir.png";
import FounderMessage from "../components/FoundersMessage/FounderMessage";

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
        "BlitzGro was founded with a vision to be a catalyst for change in the business world. With decades of combined experience across various sectors like HoReCa, FMCG, Q-Comm,GTM strategies. our team of seasoned consultants brings deep industry expertise and a passion for problem-solving to every engagement. We work closely with our clients to understand their unique challenges, design innovative strategies, and implement actionable solutions that drive real results.",

      image: Whoweare,
    },
    {
      title: "What We Do",

      description:
        "We offer a comprehensive range of consulting services designed to meet the evolving needs of businesses in today’s competitive landscape. Whether you’re a startup looking to establish a strong market presence, an established brand aiming to optimize your operations or a business facing complex supply chain challenges, BlitzGro is here to help.",
      points: [
        "Business Strategy: Crafting strategies that align with your vision and pave the way for sustainable growth.",
        "Supply Chain Optimization: Streamlining and scaling supply chains to ensure efficiency, reliability, and cost-effectiveness.",
        "Market Entry & Expansion: Guiding brands through product development, branding, and go-to-market strategies that unlock new opportunities.",
      ],
      image: whatwedo,

      reverse: true,
    },
    {
      title: "Why BlitzGro?",

      description:
        "At BlitzGro, we don’t just consult – we collaborate and provide hands-on support. We see ourselves as partners in your success, invested in helping you overcome challenges and capitalize on opportunities. Our client-centric approach means that we don’t believe in one-size-fits-all solutions; instead, we develop bespoke strategies that are aligned with your specific goals and market conditions We pride ourselves on delivering measurable impact, from streamlining supply chains for multi-location businesses to guiding new brands through successful market launches. Our results-driven approach, coupled with a commitment to excellence, sets us apart in the world of business consulting.",

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
      description:
        "We believe in honest partnerships built on transparency, integrity, and clear communication at every stage of the journey.",
      icon: "⚡",
    },
    {
      title: "Scalability",
      description:
        "We design strategies that drive sustainable growth and long-term profitability through thoughtful, data-driven expansion.",
      icon: "🔒",
    },
    {
      title: "Empathy",
      description:
        "We take the time to understand our clients, their challenges, and their goals—building meaningful relationships that lead to better outcomes",
      icon: "☁️",
    },
    {
      title: "Responsibility",
      description:
        "We hold ourselves accountable for delivering dependable excellence, acting responsibly toward our clients, partners, and the communities we serve.",
      icon: "📊",
    },
  ];

  // Founders Section
  const FoundersDetails = [
    {
      name: "Chetan Dubey",
      role: "Founder",
      image: ChetanSir,
      bio: "Founder of BlitzGro, is a powerhouse of innovation and strategy in the HoReCa and food-tech industries. Leadership in national roles at giants like Zomato, Udaan, and LOTS Wholesale Solutions",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Shakti Swami",
      role: "Co-Founder",
      image: ShaktiSir,
      bio: " Co-Founder at BlitzGro & Batman Delivers, India’s first late-night food delivery service. Leadership experience from Zomato and a passion for growth and innovation ",
      social: { twitter: "#", linkedin: "#", github: "#" },
    },
    {
      name: "Puspendra Sir",
      role: "Co-Founder",
      image: PuspendraSir,
      bio: "Co-Founder at BlitzGro With Leadership across retail, food platforms, and regulated enterprises including Landmark Group, Nature’s Basket (Godrej Group), Zomato (Feeding India), Kotak Group, and Navi",
      social: { linkedin: "#"},
    },
  ];

  return (
    <div>
      <HeroSection heroSectionData={heroSectionData} />
      <WhyChooseUs features={AboutFeatures} />
      <WhoWeServe
        features={WhatDoWeBelieveInfeatures}
        headings={WhatDoWeBelieveInHeadings}
      />
      <FounderCards profiles={FoundersDetails} />
      <FounderMessage/>
    </div>
  );
};

export default Aboutus;
