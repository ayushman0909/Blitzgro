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
    Brand1,
    Brand2,
    Brand3,
    Brand4,
  ];

  return (
    <section className="pt-20 pb-10 bg-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className=" sm:text-2xl md:text-4xl font-bold text-gray-900">
          Trusted By Leading Brands
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-lg md:text-xl">
          Helping restaurants scale with confidence
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="shrink-0 w-64 h-40 flex items-center justify-center px-10"
            >
              <img
                src={brand}
                alt="brand"
                className="max-w-40 max-h-22.5 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;