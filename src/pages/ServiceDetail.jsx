import ServiceData from "../../Data/ServiceData"
import { useParams } from "react-router-dom"
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
const ServiceDetail = () => {
  const {slug}=useParams();
 
   const Service=ServiceData.find(item=>item.slug===slug)
   if (!Service) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Service not found
      </div>
    );
  }

  
   
    
  
    
  return (
    <section>
        <div className=" relative h-[80vh]">
      <img src={Service.bannerimage} alt={Service.heading} className="w-full h-full " />
      <h2 className=" absolute backdrop-blur-xs h-full top-0 w-full flex items-center text-center justify-center mb-10 bg-black/70  text-3xl   sm:text-3xl md:text-5xl font-bold text-gray-100 dark:text-white  p-3">
          {Service.heading}
          </h2>
     </div>
     <WhyChooseUs features={Service.data.detail} headings={Service.data.heading}/>
    </section>
  )
}

export default ServiceDetail
