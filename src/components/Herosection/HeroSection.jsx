import { useState, useEffect } from "react";
import CountUp from "../Counter/Countup";
import { Link } from "react-router-dom";

export default function HeroSection({ heroSectionData, stats }) {
  const {
    heading1,
    heading2,
    subheading,
    cta1,
    cta2,
    
    bannerimage1,
    bannerimage2,
    bannerimage3,
  } = heroSectionData;
  const images = [bannerimage1, bannerimage2, bannerimage3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 sec

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-auto pb-10 min-h-96 mb-2 rounded-b-xl  overflow-hidden z-30  shadow-2xl ">
      {/* 🔥 Background Images */}
      <div className="absolute inset-0 bg-cover bg-center "  style={{ backgroundImage: `url(${images[0]})` }}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Optional dark overlay */}
        <div className="absolute inset-0  bg-white/10  dark:bg-black/90" />
      </div>

      {/* 🔥 Content */}
      <div className="relative z-40 text-start w-full p-3 sm:p-5">
        <h1
          className={`text-4xl sm:text-4xl md:text-6xl lg:text-8xl
          font-bold bg-linear-to-r from-black to-gray-700
          bg-clip-text text-transparent dark:from-white dark:to-gray-200
          mb-6 tracking-tight leading-tight`}
        >
          {heading1}
          <br />
          <span
            className="block mt-2 p-2 bg-linear-to-r
            from-green-800 to-green-500 bg-clip-text text-transparent
            text-3xl sm:text-3xl md:text-5xl lg:text-6xl dark:from-green-500 dark:to-green-200"
          >
            {heading2}
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl lg:text-2xl
          text-gray-700 dark:text-gray-200 mb-10 max-w-3xl
          leading-relaxed font-medium"
        >
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-start mb-5">
          {cta1 && (
            <Link
              to={cta1.path}
              className="group px-10 py-5 bg-linear-to-r from-green-800 to-green-600
            dark:bg-white text-white dark:text-white font-bold rounded-full
            hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                {cta1.title}
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

          {cta2 && (
            <Link
              to={cta2.path}
              className="px-10 py-5  bg-linear-to-r from-gray-900 to-gray-500 dark:border-white
            text-white dark:text-white font-bold rounded-full
            hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              {cta2.title}
            </Link>
          )}
        </div>
      </div>

      {stats && (
        <section className="relative z-40 p-4 mb-2">
          <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-8   mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-sm  font-bold text-gray-800 dark:text-gray-100 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
