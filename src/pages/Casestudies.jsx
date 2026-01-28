import BlogsCards from "../components/BlogsCards/BlogCards"
import {CaseStudyData,CaseStudyHeadings} from "../../Data/CaseStudyData"
import PageWrapper from "../components/PageWrapper";


const Casestudies = () => {
  return (
    <PageWrapper>
     <BlogsCards BlogHeadings={CaseStudyHeadings} features={CaseStudyData} countappearonce={2} page={"case-studies"}/>
    </PageWrapper>
  )
}

export default Casestudies





