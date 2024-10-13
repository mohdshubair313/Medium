import Appbar from "../Components/Appbar";
import { Avatar } from "../Components/BlogCards";
import { AllBlog } from "../hooks";

const InsideBlog = ({ blog }: {blog: AllBlog}) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-14">
            <div className="col-span-8">
                <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>
                <div className="text-slate-500 pt-4">
                  Posted On 2nd November 2024
                </div>
                <p className="mb-2 text-gray-700">by {blog.author.username}</p>
                <div className="text-lg leading-relaxed">{blog.content}</div>
            </div>
            <div className="col-span-4">
              <div className="text-slate-600 text-lg">
              Author
              </div>
              <div className="flex w-full">
                <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.username || "Anonymous"} />
                </div>
              <div className="text-2xl font-bold ">
            {blog.author.username || "Anonymous"}
            </div>
            <div className="pt-3 text-slate-500">
              Here is the summary of the Blog by the Author which makes him a lot of research and put in a lot of hard works
            </div>
            </div>
              </div>
            
        </div>
        </div>
      </div>
  );
};

export default InsideBlog;