import { useState } from "react";
import { Link } from "react-router-dom";
const ServiceFeature = ({ heroSectionData }) => {
  const { heading, subheading, cta, bannerimage } = heroSectionData;
  return (
    <section className="relative w-full  h-[60vh] sm:h-[60vh] md:h-[80vh]  mb-2 rounded-b-xl  overflow-hidden z-30 border shadow-2xl border-gray-300">
      {/* 🔥 Background Images */}
      <div className="absolute  inset-0">
        <img
          src={bannerimage}
          alt="Banner image"
          loading="eager"
          className="absolute inset-0 w-full h-full  object-cover"
        />

        {/* Optional dark overlay */}
        
      </div>

      {/* 🔥 Content */}
      <div className="relative bg-black/80 flex flex-col h-full  items-center justify-center z-40 text-center w-full p-3 sm:p-5">
        <h1
          className={`text-3xl sm:text-3xl md:text-5xl 
          font-bold bg-linear-to-r from-white to-gray-400
          bg-clip-text text-transparent dark:from-white dark:to-gray-200
          mb-6 tracking-tight leading-tight`}
        >
          {heading}
        </h1>

        <p
          className="text-center sm:text-sm md:text-lg lg:text-xl
          text-gray-200 dark:text-gray-200 mb-10
          leading-relaxed font-medium max-w-4xl "
        >
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-5">
          {cta && (
            <Link
              to={cta.path}
              className="group px-10 py-4 bg-linear-to-r text-center from-green-800 to-green-600
            dark:bg-white text-white dark:text-white font-bold rounded-full
            hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                {cta.title}
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature;
