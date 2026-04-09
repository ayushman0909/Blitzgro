import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HeroSection({ heroSectionData }) {
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

  // ✅ Dynamic images array (scalable)
  const images = [bannerimage1, bannerimage2, bannerimage3].filter(Boolean);

  const [current, setCurrent] = useState(0);

  // ✅ Auto slider
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌿 Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* 🌿 Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-green-900/80 via-black/70 to-green-700/70" />

      {/* 🌿 Glow Effects */}
      <div className="absolute w-125 h-125 bg-green-500/30 blur-[120px] rounded-full -top-25 -left-25" />
      <div className="absolute w-100 h-100 bg-green-400/20 blur-[100px] rounded-full -bottom-25 -right-25" />

      {/* 🌿 Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">

        <h1 className="text-3xl sm:text-3xl md:text-6xl font-extrabold text-white leading-tight">
          {heading1}
          <span className="text-2xl sm:text-2xl md:text-5xl block mt-3 bg-linear-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
            {heading2}
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          {cta1 && (
            <Link
              to={cta1.path}
              className="px-8 py-4 rounded-full bg-linear-to-r from-green-700 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              {cta1.title}
            </Link>
          )}

          {cta2 && (
            <Link
              to={cta2.path}
              className="px-8 py-4 rounded-full border border-white/30 text-white font-semibold backdrop-blur-md hover:bg-white/10 transition-all duration-300"
            >
              {cta2.title}
            </Link>
          )}
        </div>
      </div>

      {/* 🔘 Optional Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === current ? "bg-white scale-125" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}