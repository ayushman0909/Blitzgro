export default function WhoWeServe() {
  const features = [
    {
      title: "New QSRs Startups",
      description: "Short Format QSR, Long Format QSR, Kiosk Formats",
      icon: "⚡"
    },
    {
      title: "Expansion Of Existing Brands",
      description: "Food Ventures Looking To Transforming Their Business Towards Scalability",
      icon: "🔒"
    },
    {
      title: "International Brands",
      description: "SSteering Global Food Brands Into The Dynamic Indian Market",
      icon: "☁️"
    },
    {
      title: "Cafes, Diners And Bars",
      description: "Experience Driven Coffee Shops, Diners, And Trendy Bars.",
      icon: "📊"
    }
    
  ];

  return (
    <section className="py-10 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
           Who We Serve
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            EMPOWERING DIVERSE SECTORS
          </p>
        </div>

        <div className="grid grid-cols-1 text-center   md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 bg-gray-50 shadow-2xl dark:bg-zinc-900 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}