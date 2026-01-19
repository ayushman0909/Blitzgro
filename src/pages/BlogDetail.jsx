import { useParams } from "react-router-dom";
import BlogData, { BlogHeadings } from "../../Data/BlogData";
import BlogsCards from "../components/BlogsCards/BlogCards";
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
     <div className=" h-screen bg-amber-900">
      <img src={Blog.image} alt="" className="w-full h-full" />
     </div>
         <div className=" mb-16 p-10">
          <h2 className="text-2xl text-center sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {Blog.title}
          </h2>
          <p className="text-lg sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 p-2">
            {Blog.detail}
          </p>
        </div>
        <div>
           <p className="text-lg sm:text-lg md:text-xl text-gray-800 dark:text-gray-400 p-4">
            YOU MIGHT ALSO LIKE
          </p>
          <BlogsCards features={BlogData} />
        </div>
       
    </section>
  )
}

export default BlogDetail;
