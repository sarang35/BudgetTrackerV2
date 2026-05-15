import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate= useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v2/users/register",
        {
          username,
          email,
          password,
        },
      );

      navigate("/signin")
      } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-7 md-7">
      <div className="font-DM-sans flex lg:block justify-center items-center pd-0 space-y-0 mt-5  text-[25px] lg:text-3xl font-bold ">
        SIGN UP
      </div>

      <form action="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col mt-7">
          <label htmlFor="username">UserName:</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white h-8 backdrop-blur-4xl p-2 lg:w-[100%] border-1 border-black rounded-[7px]"
            type="text"
            id="username"
            name="username"
          />
          <label className="mt-3" htmlFor="email">
            Email:
          </label>
          <input
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-white h-8 p-2 backdrop-blur-4xl rounded-[7px] lg:w-[100%] border-1 border-black"
            id="email"
            name="email"
          />
          <label className="mt-3" htmlFor="password">
            Password:
          </label>
          <input
          onChange={(e) => setPassword(e.target.value)}
            type="Password"
            className="bg-white h-8 p-2 backdrop-blur-2xl rounded-[7px] lg:w-[100%] border-1 border-black"
            id="password"
            name="password"
          />
          <button
            type="submit"
            className="lg:w-[100%] border-1 border-black mt-5 rounded-2xl h-8 lg:bg-green-300 backdrop-blur-2xl"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-13 text-[10px]">
        Already have a account?<Link to="/SignIn">Sign In </Link>
      </div>
    </div>
  );
};
