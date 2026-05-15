import React from "react";
import { Outlet, Link } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div
      className="min-h-screen 
    lg:bg-[url(./assets/BigScreen.jpg)] 
    bg-cover bg-center bg-[url(./assets/phone.jpg)] 
    flex 
    justify-center 
    items-center"
    >
      <div
        className="min-h-[500px] 
                 bg-white/10
                   backdrop-blur-lg
                   border border-white/20
                   rounded-2xl
                   shadow-xl
                   p-6 w-[300px] 
                   lg:h-[500px] 
                   lg:w-[700px] 
                   rounded-2xl 
                 lg:bg-white
                   lg:flex
                   backdrop-blur-md"
      >
        <div className="className=lg:w-[40%] ml-5">
          <Outlet />
        </div>
        <div className="hidden lg:block bg-[url(./assets/BigScreen.jpg)] bg-cover rounded-2xl w-[60%] ml-17">
          hi
        </div>
      </div>
    </div>
  );
};
