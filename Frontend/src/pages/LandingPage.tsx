import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-customBg scroll-none ">
      <div className="border-b border-black flex items-center px-10 py-4">
        {/* Left side of the appbar */}
        <div className="text-2xl font-black cursor-pointer font-serif">
          <Link to="/">Medium</Link>
        </div>

        {/* Spacer for left and right side */}
        <div className="flex-grow"></div>

        {/* Right side of the appbar */}
        <div className="flex">
          <div className="mr-3">Our story</div>
          <div className="mr-3">Membership</div>
          <div className="mr-3">Write</div>
          <Link className="mr-3" to="/signin">
            Sign in
          </Link>
        </div>
        <Link to="/signup">
          <button
            type="button"
            className="text-white font-sm rounded-full text-sm px-6 py-2.5 text-center bg-black hover:bg-gray-800 w-[120px] h-[38px] ml-6 flex items-center"
          >
            Get Started
          </button>
        </Link>
      </div>

      <div className="bg-customBg">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h1 className="ml-12 mt-10 text-8xl font-medium opacity-85">
              Human <br />
              stories & ideas
            </h1>
            <p className=" ml-12 mt-10 font-medium flex text-2xl">
              A place to read, write, and deepen your understanding
            </p>
            <button
              type="button"
              className="text-white font-medium rounded-full text-lg px-5 py-2.5 text-center mt-12 ml-12 me-2 mb-2 bg-black hover:bg-gray-800  h-[50px]"
            >
              Start reading
            </button>
          </div>

          {/* Right side image */}
          <div className="">
            <img
              src="/image.png"
              alt="ImageMedium"
              className="w-[390px] h-auto"
            />
          </div>
        </div>

        <div className="border border-t-black flex justify-center items-center h-12 text-slate-500 cursor-pointer">
          <div className="mr-2 hover:underline">Help</div>
          <div className="mr-2 hover:underline">Status</div>
          <div className="mr-2 hover:underline">About</div>
          <div className="mr-2 hover:underline">Help</div>
          <div className="mr-2 hover:underline">Terms</div>
          <div className="mr-2 hover:underline">Privacy</div>
          <div className="mr-2 hover:underline">Career</div>
          <div className="mr-2 hover:underline">Press</div>
          <div className="mr-2 hover:underline">Text to speech</div>
          <div className="mr- hover:underline">Teams</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
