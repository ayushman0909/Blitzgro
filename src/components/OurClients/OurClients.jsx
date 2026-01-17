import Brand1 from "../../assets/Home/OurClients/brand.png"
import Brand2 from "../../assets/Home/OurClients/brand2.png"
import Brand3 from "../../assets/Home/OurClients/brand3.png"
import Brand4 from "../../assets/Home/OurClients/brand4.png"
import Brand5 from "../../assets/Home/OurClients/brand5.png"
import Brand6 from "../../assets/Home/OurClients/brand4.webp"

const OurClients = () => {
    const brands=[Brand1,Brand2,Brand3,Brand4,Brand6,Brand5]
  return (
    <section className=' py-10 px-5'>
       <h2 className="text-2xl sm:text-2xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-4">
          Our Happy Clients😊
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 ">
           Trusted By Industry Leaders
          </p>
          <div className='p-2 grid grid-cols-6  place-items-center gap-2 '>
            {
              brands.map((brand,index)=>{
                return(
                 <div key={index}>
                     <img src={brand} alt="Brand image" />
                     </div>
                )
              })
            }
            
              
        
          </div>
    </section>
  )
}

export default OurClients
