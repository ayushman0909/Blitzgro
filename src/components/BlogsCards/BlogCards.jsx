import { useState } from "react";
import { Link } from "react-router-dom";
export default function BlogsCards({features}) {
  
 const [showCardsCount,setShowCardsCount]=useState(3);

  return (
    <section className="py-10 bg-linear-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Expert Insights on Scaling Food & Hospitality Businesses
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
           Actionable perspectives on strategy, operations, market entry, and sustainable growth — written by industry practitioners, not theorists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0,showCardsCount).map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {feature.badge && (
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold text-white rounded-full ${feature.badgeColor}`}
                  >
                    {feature.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <Link
                  to={`/blogs/${feature.slug}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
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
                </Link>
              </div>
            </div>
          ))}
        </div>
   { showCardsCount  <features.length  &&   <div className="text-center mt-12">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" onClick={()=>{setShowCardsCount(prev=>prev+3)}}>
            Show more
          </button>
        </div>}
      
      </div>
    </section>
  );
}
