import ServiceFeature from '../components/Services/ServiceFeature';
import herosection from "../../Data/ServiceData"
import PageWrapper from "../components/PageWrapper";


const Service=()=>{
  return (
    <PageWrapper>

      {herosection.map((heroSectionData,index)=>(
      // <HeroSection  /> 
      <ServiceFeature key={index} heroSectionData={heroSectionData}/>
      ))}
    </PageWrapper>
  )
}

export default Service
