import { useParams } from "react-router-dom";
import BlogData from "../../Data/BlogData";
const BlogDetail = () => {

    const {slug}=useParams();
    const Blog = BlogData.find(item => item.slug === slug);

     if (!Blog) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Blog not found
      </div>
    );
  }
  return (
    <section>
     {Blog.title}
    </section>
  )
}

export default BlogDetail
