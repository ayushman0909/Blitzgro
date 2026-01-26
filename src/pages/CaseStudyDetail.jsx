import { CaseStudyData } from "../../Data/CaseStudyData";
import { useParams } from "react-router-dom";
import CaseStudyDetailFeatures from "../components/CaseStudyDetailFeatures/CaseStudyDetailFeatures";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
const CaseStudyDetail = () => {
  const { slug } = useParams();
  const CaseStudy = CaseStudyData.find((item) => item.slug === slug);

  return (
    <section>
      <div className=" relative h-[60vh] sm:h-[60vh] md:h-[80vh] ">
        <img src={CaseStudy.image} alt="" className="w-full h-full " />
        <h2 className=" absolute backdrop-blur-xs h-full top-0 w-full flex items-center justify-center mb-10 bg-black/70  text-3xl  sm:text-3xl md:text-6xl font-bold text-gray-100 dark:text-white ">
          {CaseStudy.title}
        </h2>
      </div>
      <div className="  p-10">
        <h2 className="  text-2xl text-center sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {CaseStudy.title}
        </h2>
        <p className="text-lg sm:text-lg text-center md:text-xl text-gray-600 dark:text-gray-400 p-2">
          {CaseStudy.description}
        </p>
      </div>
      <CaseStudyDetailFeatures features={CaseStudy.data.features}/>
     <WhoWeServe headings={CaseStudy.data.whatWeServeHeadings} features={CaseStudy.data.whatWeServeFeatures} />
     <CaseStudyDetailFeatures features={CaseStudy.data.result}/>

    </section>
  );
};

export default CaseStudyDetail;
