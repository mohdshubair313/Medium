import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  SignupInput } from "@shubair/medium-common";
import axios from 'axios';
import { BACKEND_URL } from "../config";
import swal from 'sweetalert';

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setpostInputs] = useState<SignupInput>({
    username: "",
    email: "",
    password: "",
  });

  async function SendRequest() {
    try {
      console.log("Sending data:", postInputs);  
  
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs); 
      const jwt = response.data;
  
      localStorage.setItem("token", jwt);
      navigate('/blogs');
      
      swal("You have signed up successfully!","You have signed in successfully!", "success");
    } catch (e) {
      console.error("Request failed:", e);  // Log error details
      swal("Authentication Failed", "Please check your credentials and try again.", "warning");
    }
  }
  

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold">
            {type === "signup" ? "Create an Account" : "Sign In to Your Account"}
          </div>

          <div className="font-bold opacity-65 text-lg mt-2">
            {type === 'signin' ? "Don't have an account?" : "Already have an account?"}
            <Link className="underline ml-3" to={type === "signin" ? "/signup" : "/signin"}>
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>

          <div className="mt-12 items-center">
            {type === "signup" ? (
              <LabelledInputs
                type="text"
                label="Username"
                placeholder="Mohd Shubair"
                onchange={(e) => setpostInputs({ ...postInputs, username: e.target.value })}
              />
            ) : null}

            <LabelledInputs
              type="text"
              label="Email"
              placeholder="Shubair@gmail.com"
              onchange={(e) => setpostInputs({ ...postInputs, email: e.target.value })}
            />

            <LabelledInputs
              label="Password"
              type="password"
              placeholder="Enter Your Password"
              onchange={(e) => setpostInputs({ ...postInputs, password: e.target.value })}
            />

            <button
              onClick={SendRequest}
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputsType {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

function LabelledInputs({
  label,
  placeholder,
  onchange,
  type,
}: LabelledInputsType) {
  return (
    <div className="pb-4 w-[40vh]">
      <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        onChange={onchange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
