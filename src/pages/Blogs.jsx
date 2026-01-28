
import BlogsCards from '../components/BlogsCards/BlogCards';
import BlogData from "../../Data/BlogData"
import {BlogHeadings} from "../../Data/BlogData"
import PageWrapper from "../components/PageWrapper";


const Blogs = () => {
  
  return (
    <PageWrapper>
      <BlogsCards features={BlogData} BlogHeadings={BlogHeadings} lg="grid-cols-3" page={"blogs"}/>
    </PageWrapper>
  )
}

export default Blogs







