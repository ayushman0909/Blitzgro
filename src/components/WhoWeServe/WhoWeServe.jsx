export default function WhoWeServe({
  features,
  headings,
  lgScreen = "grid-cols-4",
}) {
  return (
    <section className="relative overflow-hidden py-10 px-4 bg-linear-to-b from-white to-green-50/30 dark:from-black dark:to-zinc-900">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5">
            Our Expertise
          </span>

          <h2 className=" sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-5">
            {headings.heading}
          </h2>

          

          <p className="text-lg sm:text-lg md:text-xl  text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {headings.subheading}
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gray-100
                bg-white
                dark:bg-zinc-900
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_60px_rgba(0,128,96,0.18)]
                hover:-translate-y-3
                transition-all
                duration-500
              "
            >
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-green-700 via-green-500 to-yellow-400" />

              {/* Background Image */}
              {feature.Backgroundimage && (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${feature.Backgroundimage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-black/75" />
                </>
              )}

              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-green-50 dark:bg-green-900/20 group-hover:scale-125 transition duration-700" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Icon */}
                <div
                  className={`
                    w-20 h-20
                    rounded-2xl
                    flex items-center justify-center
                    shadow-lg
                    mb-6
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    ${
                      feature.Backgroundimage
                        ? "bg-white/20 backdrop-blur-md text-white"
                        : "bg-linear-to-br from-green-50 to-green-100 text-green-700"
                    }
                  `}
                >
                  {feature.iconImage ? (
                    <img
                      src={feature.iconImage}
                      alt={feature.title}
                      className="w-full  rounded-2xl h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">{feature.icon}</span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`
                    text-2xl
                    font-bold
                    mb-4
                    ${
                      feature.Backgroundimage
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }
                  `}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <div className="space-y-3 grow">
                  {feature.description?.map((each, i) => (
                    <div key={i}>
                      <p
                        className={`
                          font-semibold
                          ${
                            feature.Backgroundimage
                              ? "text-white"
                              : "text-gray-800 dark:text-white"
                          }
                        `}
                      >
                        {each.heading}
                        <span
                          className={`
                            font-semibold ml-1
                            ${
                              feature.Backgroundimage
                                ? "text-gray-200"
                                : "text-gray-600 dark:text-gray-300"
                            }
                          `}
                        >
                          {each.detail}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* Arrow Button */}
                <div className="mt-8">
                  <button
                    className={`
                      w-12 h-12
                      rounded-full
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:translate-x-1
                      ${
                        feature.Backgroundimage
                          ? "bg-white text-black"
                          : "bg-green-700 text-white hover:bg-green-800"
                      }
                    `}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
