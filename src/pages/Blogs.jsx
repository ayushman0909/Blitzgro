
import BlogsCards from '../components/BlogsCards/BlogCards';
import BlogData from "../../Data/BlogData"
import {BlogHeadings} from "../../Data/BlogData"

const Blogs = () => {
  
  return (
    <div>
      <BlogsCards features={BlogData} BlogHeadings={BlogHeadings} />
    </div>
  )
}

export default Blogs







