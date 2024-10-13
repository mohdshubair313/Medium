import axios from "axios";
import Appbar from "../Components/Appbar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
    const [title,setTitle] = useState("");
    const [description, setdescription] = useState("");
    const navigate = useNavigate();
    return (
        <div>
            <Appbar />
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
            {/* Title Input */}
            <textarea
            onChange={(e) => {
                setTitle(e.target.value)
            }}
            className="w-3/4 text-4xl font-semibold p-4 text-gray-900 bg-transparent border-none focus:outline-none placeholder-gray-400 resize-none"
            placeholder="Title"
            rows={1}
            />
    
            {/* Content Input */}
            <textarea
            onChange={(e) => {
                setdescription(e.target.value)
            }}
            className="w-3/4 mt-6 text-lg p-4 text-gray-900 bg-transparent border-none focus:outline-none placeholder-gray-500 resize-none"
            placeholder="Tell your story..."
            rows={10}
            />
    
            <button onClick={ async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                    title,
                    content: description,
                },{
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                });
                navigate(`/blog/${response.data.id}`)
             }} type="submit" className="inline-flex px-5 py-2.5 text-sm font-medium  bg-slate-700 rounded-lg items-center text-center text-white hover:bg-slate-500">Publish Post</button>
        </div>
      </div>
    );
  };
  
  export default NewBlog;
  