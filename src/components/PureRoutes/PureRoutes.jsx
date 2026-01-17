import React from 'react'
import PureRoute from "../../assets/Home/pureRoutes/pureRoute.png"
import { Link } from 'react-router-dom'

const PureRoutes = () => {
  return (
    <div className='p-10 '>
      <div className=" mb-16">
          <h2 className="text-2xl text-center sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
           Our Strategic Network
          </h2>
          <p className="text-lg sm:text-lg text-center md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
           BlitzGro works closely with trusted platforms to deliver end-to-end growth solutions for food & hospitality businesses.
          </p>
          <div className='bg-white shadow-2xl shadow-black p-10 md:w-3/4 sm:w-full m-auto rounded-2xl mt-5'>
            <div className='w-30'>
            <span><img src={PureRoute} alt="" /></span>
           </div>
           <div className='grid grid-cols-1'>
          <p className="text-lg sm:text-lg  md:text-xl text-gray-600 dark:text-gray-400 ">
          A sustainability-focused supply chain & logistics platform helping food businesses optimize routes, reduce costs, and lower carbon footprint.
          
          </p>
         <Link to={"https://pureroutes.com/"}  target="_blank" className='bg-linear-to-r from-green-800 to-green-600 text-center
            dark:bg-white text-white dark:text-white  px-10 py-2 rounded-3xl text-md font-bold sm:text-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 md:text-lg  md:w-2/5  mt-5 sm:w-full cursor-pointer'>Visit PureRoutes →</Link>
          </div>
          </div>
        </div>
    </div>
  )
}

export default PureRoutes
