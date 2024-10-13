import { Link } from "react-router-dom"
import Appbar from "../Components/Appbar"

const NotFound = () => {
  return (
    <div>
        <Appbar />
        <div className="flex justify-center mt-12 mb-3">
        <h3 className="font-semibold opacity-60">PAGE NOT FOUND</h3>
        </div>
        <div className="flex justify-center">
        <h1 className="font-bold text-9xl opacity-60 mb-3">404</h1>
        </div>
        <div>
            <h2 className="flex justify-center text-center text-4xl mb-6">Out of nothing, <br /> something.</h2>
        </div>
        <div className="flex justify-center text-center">
        You can find (just about) anything on Medium — apparently even a page that doesn’t exist. Maybe these stories will take you somewhere new?
        </div>
        <Link className="flex justify-center mt-3 underline cursor-pointer font-semibold hover:font-bold" to={'/'}>
        Home
        </Link>
    </div>
  )
}

export default NotFound