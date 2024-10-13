import { useNavigate } from "react-router-dom"

const Signout = () => {
    const navigate = useNavigate();

    const handleSignout = () =>  {
        localStorage.removeItem("token");
        navigate("/signin");
    };
  return (
    <div>
        <button onClick={handleSignout} type="button" className="text-white bg-gradient-to-br from-gray-400 to-gray-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">SignOut</button>  
    </div>
  )
}

export default Signout