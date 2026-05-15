import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [correct, setCorrect] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v2/users/login",
        {
          username,
          password,
        },
      );
      console.log(response.data)
      navigate("/home");
    } catch (err) {
      setCorrect(true)
      if (!correct){
        const Error = document
      }
      console.log(err);
    }
  };

  return (
    <div className="mt-7 md-7">
      <div className="font-DM-sans flex lg:block justify-center items-center pd-0 space-y-0 mt-5  text-[25px] lg:text-3xl font-bold ">
        SIGN IN
      </div>

      <form action="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col mt-7">
          <label htmlFor="username" className="mb-2">
            UserName:
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="bg-white h-8 backdrop-blur-4xl p-2 lg:w-[100%] border-1 border-black rounded-[7px]"
            type="text"
            id="username"
            name="username"
          />
          <label className="mt-3 mb-2" htmlFor="password">
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
          <div className={`${!correct ? "hidden" : "block"} border-3 mt-2 absolute lg:top-78 top-77 text-[13px] lg:right-105 p-1 bg-red-300 rounded-[10px] pl-1 text-red-800 lg:text-[15px] border-red-600 `}>Enter Correct Username or password</div>
        </div>
      </form>
      <div className="mt-13 text-[10px]">
        Don't have an account? <Link to="/SignUp">Sign up for free</Link>
      </div>
    </div>
  );
};

export default SignIn;
