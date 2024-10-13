import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface AllBlog {
    "content": string,
    "title": string,
    "id": number,
    "author": {
        "username": string
    }
}

// interface blog {
//     "content": 
// }


export const useBlog = ({ id }: { id:string }) => {
    const [loading, setloading] = useState(true);
    const [blog, setblog] = useState<AllBlog>();

    useEffect(() => { 
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then(response => {
                setblog(response.data.blog);
                setloading(false);
            })
    }, [id])

    return {
        loading,
        blog,
    }
}

export const useBlogs = () => {
    const [loading, setloading] = useState(true);
    const [Allblogs, setAllblogs] = useState <AllBlog[]> ([]);

    useEffect(() => {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then(response => {
                setAllblogs(response.data.Allblogs);
                setloading(false);
            })
    }, [])

    return {
        loading,
        Allblogs
    }

}