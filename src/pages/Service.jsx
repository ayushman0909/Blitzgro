import ServiceFeature from '../components/Services/ServiceFeature';
import herosection from "../../Data/ServiceData"
const Service=()=>{
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
