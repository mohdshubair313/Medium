import { Link } from "react-router-dom";

interface BlogcardsType {
    id: number,
    Authorname: string;
    Title: string;
    Content: string;
    publishedDate: string;
}

const BlogCards = ({
    id,
    Authorname,
    Title,
    Content,
    publishedDate,
}: BlogcardsType) => {
  return (
    <Link to={`/blog/${id}`}>
        <div className="p-4 pt-2 border-b border-slate-300 pb-4 w-screen max-w-screen-lg cursor-pointer">
            <div className="flex">
                <Avatar size='small' name={Authorname} />
                <div className="font-medium opacity-90 pl-2 text-sm flex justify-center flex-col">
                {Authorname}
                    </div>

                    <div className="font-bold opacity-90 pl-2 text-base flex justify-center items-center pb-2 flex-col">
                    <p className="rounded-lg flex justify-center flex-col pl-2">.</p>
                    </div>

                    <div className="font-medium opacity-35 pl-2 text-sm flex justify-center flex-col">
                    {publishedDate}
                    </div>
            </div>

            <div className="text-xl font-semibold pt-2">
                {Title}
            </div>

            <div className="text-md font-thin">
                {Content.slice(0,140) + "..."}
            </div>

            <div className=" text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(Content.length /100)} minute(s) read`}
            </div>

        </div>
    </Link>
  )
}

export function Avatar({name, size = "small"}: {name:string, size:"small" | "big"})  {
    return <div className={`relative inline-flex items-center justify-center ${size === 'small' ? 'w-6 h-6': "w-10 h-10"} overflow-hidden bg-gray-500 rounded-full dark:bg-gray-400 cursor-pointer`}>
        <span className={` ${size === 'small' ? 'text-xs' : 'text-md'} text-sm text-gray-300 dark:text-gray-200 items-center font-bold`}>
        {name[0]}
        </span>
    </div>
}

export default BlogCards