import BlogsCards from "../components/BlogsCards/BlogCards"
import {CaseStudyData,CaseStudyHeadings} from "../../Data/CaseStudyData"


const Casestudies = () => {
  return (
    <div>
     <BlogsCards BlogHeadings={CaseStudyHeadings} features={CaseStudyData} countappearonce={2} page={"case-studies"}/>
    </div>
  )
}

export default Casestudies





