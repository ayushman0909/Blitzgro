import WhoWeServe from "../WhoWeServe/WhoWeServe"
export default function CaseStudyDetailFeatures({ features }) {
  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-stretch gap-12 ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT */}
              <div className="flex-1 space-y-6">
                <div>
                  {feature.subtitle && (
                    <span className="text-blue-600 text-sm font-semibold uppercase">
                      {feature.subtitle}
                    </span>
                  )}
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>

                {/* POINTS */}
                {feature.points && (
                  <ul className="space-y-4">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex gap-3">
                        <svg
                          className="w-6 h-6 text-green-500 shrink-0 mt-1"
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

                        {/* OBJECT TYPE POINT */}
                        {typeof point === "object" ? (
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white">
                              {point.heading}
                            </h4>

                            <ul className="mt-2 space-y-2 pl-4 list-disc">
                              {point.description?.map((sub, idx) => (
                                <li key={idx} className="text-gray-600 dark:text-gray-400">
                                  <span className="font-bold text-gray-900">
                                    {sub.subheading}
                                  </span>
                                  {sub.detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          /* STRING TYPE POINT */
                          <span className="text-gray-700 dark:text-gray-300">
                            {point}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* IMAGE */}
              <div className="flex-1 h-auto">
                <div className="rounded-2xl  overflow-hidden h-full shadow-2xl hover:scale-105 transition">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full object-cover h-full"
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
