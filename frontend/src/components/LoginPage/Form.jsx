import React from "react";

export const Form = () => {
  return (
    <div className="mt-7 md-7">
      <form action="">
        <div className="flex flex-col mt-7">
          <label htmlFor="username">UserName:</label>
          <input
            className="bg-white h-8 backdrop-blur-4xl p-2 lg:w-[80%] border-1 border-black rounded-[7px]"
            type="text"
            id="username"
            name="username"
          />
          <label className="mt-3" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            className="bg-white h-8 p-2 backdrop-blur-4xl rounded-[7px] lg:w-[80%] border-1 border-black"
            id="email"
            name="email"
          />
          <label className="mt-3" htmlFor="password">
            Password:
          </label>
          <input
            type="Password"
            className="bg-white h-8 p-2 backdrop-blur-2xl rounded-[7px] lg:w-[80%] border-1 border-black"
            id="password"
            name="password"
          />
          <button type="submit" className="lg:w-[80%] border-1 border-black mt-5 rounded-2xl h-8 lg:bg-green-300 backdrop-blur-2xl">Submit</button>
        </div>
      </form>
    </div>
  );
};
