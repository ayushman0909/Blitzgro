import ServiceFeature from '../components/Services/ServiceFeature';
import HorecaMarketPenetrationDemandGeneration from "../assets/Service/HorecaMarketPenetrationDemandGeneration.jpg"
import HorecaProcurementVendorManagement from "../assets/Service/HorecaProcurementVendorManagement.jpg"
import ProductSegmentOptimization from "../assets/Service/ProductSegmentOptimization.jpg"
import OperationsSupplyChainExcellence from "../assets/Service/OperationsSupplyChainExcellence.jpg"
import ManpowerBusinessGrowthSolutions from "../assets/Service/ManpowerBusinessGrowthSolutions.jpg"
import ExtendedSalesPortfolioManagement from "../assets/Service/ExtendedSalesPortfolioManagement.jpg"
const Service = () => {
const herosection = [
  {
    heading: "Horeca Market Penetration & Demand Generation",
    subheading:
      "We help food and hospitality businesses enter new markets, build strong channel presence, and generate consistent demand through data-driven go-to-market strategies.",
    cta1: {
      title: "View More",
      path: "/services/Horeca-Market-Penetration-Demand-Generation",
    },
    bannerimage: HorecaMarketPenetrationDemandGeneration,
  },

  {
    heading: "Horeca Procurement & Vendor Management",
    subheading:
      "Streamline procurement operations with structured vendor onboarding, cost control frameworks, and supplier performance management tailored for HoReCa businesses.",
    cta1: {
      title: "View More",
      path: "/services/Horeca-Procurement-Vendor-Management",
    },
    bannerimage: HorecaProcurementVendorManagement,
  },

  {
    heading: "Product & Segment Optimization",
    subheading:
      "We refine product portfolios and target segments to improve profitability, eliminate underperforming SKUs, and maximize revenue across customer categories.",
    cta1: {
      title: "View More",
      path: "/services/Product-Segment-Optimization",
    },
    bannerimage: ProductSegmentOptimization,
  },

  {
    heading: "Operations & Supply Chain Excellence",
    subheading:
      "Design and implement SOP-driven operational frameworks that improve efficiency, reduce wastage, and ensure consistency across locations and supply networks.",
    cta1: {
      title: "View More",
      path: "/services/Operations-Supply-Chain-Excellence",
    },
    bannerimage: OperationsSupplyChainExcellence,
  },

  {
    heading: "Manpower & Business Growth Solutions",
    subheading:
      "From workforce planning to performance optimization, we help you build skilled teams, improve productivity, and align manpower strategies with business goals.",
    cta1: {
      title: "View More",
      path: "/services/Manpower-Bussiness-Growth-Solutions",
    },
    bannerimage: ManpowerBusinessGrowthSolutions,
  },

  {
    heading: "Extended Sales & Portfolio Management",
    subheading:
      "We act as an extended sales arm to manage portfolios, strengthen distributor networks, and unlock new growth opportunities across regions and segments.",
    cta1: {
      title: "View More",
      path: "/services/Extended-Sales-Portfolio-Management",
    },
    bannerimage: ExtendedSalesPortfolioManagement,
  },
];

  return (
    <div>

      {herosection.map((heroSectionData,index)=>(
      // <HeroSection  /> 
      <ServiceFeature key={index} heroSectionData={heroSectionData}/>
      ))}
    </div>
  )
}

export default Service
