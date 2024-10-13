import { useBlog } from "../hooks"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 
import { useParams } from "react-router-dom";
import InsideBlog from "./InsideBlog";

const Blog = () => {
    const { id } = useParams();
     const {loading, blog} = useBlog({
        id: id || ""
     });
     
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
        )}

        if (!blog) {
          return <div>Blog not found</div>;
      }

  return (
    <div>
        <InsideBlog blog={blog} />
    </div>
  )
}

export default Blog