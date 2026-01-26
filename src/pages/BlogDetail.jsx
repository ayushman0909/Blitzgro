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
     <div className=" relative  h-[60vh] sm:h-[60vh] md:h-[80vh]">
      <img src={Blog.image} alt="" className="w-full h-full " />
      <h2 className=" absolute backdrop-blur-xs h-full top-0 w-full flex items-center justify-center mb-10 bg-black/70  text-3xl  sm:text-3xl md:text-6xl font-bold text-gray-100 dark:text-white ">
          {Blog.title}
          </h2>
     </div>
         <div className=" mb-16 p-10">
          <h2 className="  text-2xl text-center sm:text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
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
