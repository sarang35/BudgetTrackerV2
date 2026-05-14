import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mt-7 md-7">
      <div className="font-DM-sans flex lg:block justify-center items-center pd-0 space-y-0 mt-5  text-[25px] lg:text-3xl font-bold ">
        SIGN IN
      </div>

      <form action="">
        <div className="flex flex-col mt-7">
          <label htmlFor="username" className="mb-2">
            UserName:
          </label>
          <input
            className="bg-white h-8 backdrop-blur-4xl p-2 lg:w-[80%] border-1 border-black rounded-[7px]"
            type="text"
            id="username"
            name="username"
          />
          <label className="mt-3 mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="Password"
            className="bg-white h-8 p-2 backdrop-blur-2xl rounded-[7px] lg:w-[80%] border-1 border-black"
            id="password"
            name="password"
          />
          <button
            type="submit"
            className="lg:w-[80%] border-1 border-black mt-5 rounded-2xl h-8 lg:bg-green-300 backdrop-blur-2xl"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-13 text-[10px]">
        Don't have an account? <Link to="/SignUp">Sign up for free</Link>
      </div>
    </div>
  );
};

export default SignIn;
