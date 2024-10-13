import Appbar from "../Components/Appbar";
import BlogCards from "../Components/BlogCards";
import { useBlogs } from "../hooks";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

const Blogs = () => {
  const { loading, Allblogs } = useBlogs();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {/* Centered loading container */}
        <div className="w-full max-w-2xl p-4">
          <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            {/* Loading skeleton for a modern look */}
            <div className="mb-4">
              <Skeleton height={30} width="50%" style={{ marginBottom: '12px' }} />
              <Skeleton height={200} width="100%" />
            </div>
            <div className="mb-4">
              <Skeleton height={30} width="60%" style={{ marginBottom: '12px' }} />
              <Skeleton height={200} width="100%" />
            </div>
            <div className="mb-4">
              <Skeleton height={30} width="70%" style={{ marginBottom: '12px' }} />
              <Skeleton height={200} width="100%" />
            </div>
          </SkeletonTheme>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {Allblogs.map(blog => (
            <BlogCards 
              key={blog.id}
              id={blog.id}
              Authorname={blog.author.username || "Anonymous"} 
              Title={blog.title} 
              Content={blog.content} 
              publishedDate={"date"} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
