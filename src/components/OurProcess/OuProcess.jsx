import { useNavigate } from "react-router-dom";

export default function Features5() {
  const navigate = useNavigate();

  const timeline = [
   
  {
    step: "Step-1",
    title: "Initial Consultation",
    description:
      "We understand your business goals, challenges, and expectations to align our approach with your vision from day one.",
    features: [
      "Business goal assessment",
      "Stakeholder discussions",
      "Current performance review",
    ],
    color: "bg-blue-500",
  },
  {
    step: "Step-2",
    title: "Discovery & Research",
    description:
      "We conduct detailed research to understand your market, competitors, and internal processes.",
    features: [
      "Market & competitor analysis",
      "Customer behavior insights",
      "Operational gap identification",
    ],
    color: "bg-indigo-500",
  },
  {
    step: "Step-3",
    title: "Strategic Planning",
    description:
      "We design a customized growth strategy focused on scalability, efficiency, and measurable outcomes.",
    features: [
      "Growth roadmap creation",
      "Channel & resource planning",
      "KPI and success metrics definition",
    ],
    color: "bg-purple-500",
  },
  {
    step: "Step-4",
    title: "Proposal & Alignment",
    description:
      "We present the proposed strategy, gather feedback, and finalize a clear execution plan.",
    features: [
      "Strategy presentation",
      "Feedback & refinement",
      "Execution roadmap approval",
    ],
    color: "bg-yellow-500",
  },
  {
    step: "Step-5",
    title: "Implementation",
    description:
      "Our team executes the strategy with hands-on support to ensure smooth and effective delivery.",
    features: [
      "Strategy execution",
      "Cross-team coordination",
      "Timeline & quality control",
    ],
    color: "bg-green-500",
  },
  {
    step: "Step-6",
    title: "Monitoring & Optimization",
    description:
      "We track performance, analyze results, and continuously optimize for better efficiency and ROI.",
    features: [
      "Performance tracking",
      "Data-driven optimization",
      "Continuous improvement cycles",
    ],
    color: "bg-teal-500",
  },
  {
    step: "Step-7",
    title: "Ongoing Support & Growth",
    description:
      "We provide ongoing consulting, reviews, and strategic guidance to support long-term growth.",
    features: [
      "Regular performance reviews",
      "Strategic advisory support",
      "Scalable growth planning",
    ],
    color: "bg-red-500",
  },
];



  return (
    <section className="py-10 w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
           How We Work
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Step by Step Solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-zinc-800"></div>
          
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-2 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-full   rounded-2xl md:w-6/12  ${
                  index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"
                }`}
              >
                <div className="bg-white dark:bg-zinc-900 p-6 border  border-amber-200 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                  <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 ${item.color}`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center ${
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          • {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className=" hidden md:block md:absolute left-1/2 transform sm:hidden -translate-x-1/2 w-4 h-4 bg-white dark:bg-black border-4 border-blue-500 rounded-full z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            And this is just the beginning...
          </p>
          <button  onClick={() => {navigate("/contact-us"); window.scrollTo(0,0)}} className="px-8 py-3 bg-linear-to-r text-white bg- from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700  font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
            Join Our Journey
          </button>
        </div>
      </div>
    </section>
  );
}