import Brand1 from "../../assets/Home/OurClients/brand.png";
import Brand2 from "../../assets/Home/OurClients/brand2.png";
import Brand3 from "../../assets/Home/OurClients/brand3.png";
import Brand4 from "../../assets/Home/OurClients/brand4.png";
import Brand5 from "../../assets/Home/OurClients/brand5.png";
import Brand6 from "../../assets/Home/OurClients/brand4.webp";
import Brand7 from "../../assets/Home/OurClients/CaliforniaBuritoLogo.png";
import Brand8 from "../../assets/Home/OurClients/EatClubLogo.png";
import Brand9 from "../../assets/Home/OurClients/graamamLogo.avif";
import Brand10 from "../../assets/Home/OurClients/GrubFoodsLogo.png";
import Brand11 from "../../assets/Home/OurClients/HygineBigBiteLogo.jpg";
import Brand12 from "../../assets/Home/OurClients/kaarasaaramLogo.avif";
// import Brand13 from "../../assets/Home/OurClients/MirahHospitalityLogo.png";
import Brand14 from "../../assets/Home/OurClients/PansariLogo.png";

const OurClients = () => {
  const brands = [
    Brand1,
    Brand2,
    Brand3,
    Brand4,
    Brand5,
    Brand6,
    Brand7,
    Brand8,
    Brand9,
    Brand10,
    Brand11,
    Brand12,
    // Brand13,
    Brand14,
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 md:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Trusted By Leading Brands
        </h2>
        <p className="mt-3 md:mt-4 text-gray-600 text-base sm:text-lg md:text-xl">
          Helping restaurants scale with confidence
        </p>
      </div>

      {/* Logo Slider */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="
                shrink-0
                w-24
                sm:w-32
                md:w-44
                lg:w-56
                xl:w-64
                h-16
                sm:h-20
                md:h-28
                lg:h-36
                flex
                items-center
                justify-center
                px-2
                sm:px-4
                md:px-6
              "
            >
              <img
                src={brand}
                alt={`Client Brand ${index + 1}`}
                className="
                  max-w-full
                  max-h-full
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;