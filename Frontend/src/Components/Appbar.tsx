import { Link } from "react-router-dom"
import { Avatar } from "./BlogCards"
import Signout from "./Signout"


const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
        {/* //left side of the appbar */}
        <div className="flex flex-col justify-center text-xl cursor-pointer">
        <Link to={'/'}>
        Medium
        </Link>
        </div>
        <Link to={`/publish`}>
        <button type="button" className="text-white bg-gradient-to-br from-gray-400 to-gray-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Add New Blog</button>  
        </Link>
        {/* //right side of the appbar */}
        <Signout />
        <div>
            <Avatar size="big" name="Shubair" />
        </div>
        
    </div>
  )
}

export default Appbar