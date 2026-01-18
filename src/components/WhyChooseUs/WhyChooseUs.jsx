export default function WhyChooseUs({ features, headings }) {
  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {headings && (
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {headings.heading}
            </h2>
            <p className="text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {headings.subheading}
            </p>
          </div>
        )}

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 space-y-6">
                <div>
                  {feature.subtitle && (
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
                      {feature.subtitle}
                    </span>
                  )}

                  <h3 className="text-xl sm:text-xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-md sm:text-md md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {feature.points && (
                  <ul className="space-y-3">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {console.log(feature.button)}

                {feature.button && (
                  <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                    {feature.button}
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
