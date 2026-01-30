import React from "react";
import { Link } from "react-router-dom";

const ServiceFeature = ({ heroSectionData, onLoad }) => {
  const { heading, subheading, cta, bannerimage } = heroSectionData;

  return (
    <section
      className="relative w-full bg-white dark:bg-gray-950 overflow-hidden py-10 px-6 md:px-16"
      onLoad={onLoad}
    >
      {/* Background Subtle Green Fades */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-125 h-125 bg-green-200/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-150 h-150 bg-green-300/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12  order-2 gap-12 items-center">
          
          {/* Left Side: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800">
              <img
                src={bannerimage}
                alt="Service Visual"
                className="w-full h-112.5 object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-xl z-20 border border-green-50 animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Quality Assurance</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Certified Results</p>
                </div>
              </div>
            </div>
            
            {/* The Green Accent Box */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-100/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 space-y-8 " >
            <div className="inline-block px-4 py-1.5 bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800 rounded-full">
              <span className="text-green-700 dark:text-green-400 text-sm font-bold tracking-wide uppercase">
                Premium Service
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1] ">
              {heading}
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed border-l-4 border-green-500 pl-6">
              {subheading}
            </p>

            <div className="pt-4">
              {cta && (
                <Link
                onClick={()=>window.scroll(0,0)}
                  to={cta.path}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-green-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-green-700"
                >
                  {cta.title}
                  <svg
                    className="w-5 h-5 ml-3 transition-all duration-200 transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;