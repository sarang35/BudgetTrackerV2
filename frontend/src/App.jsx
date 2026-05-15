import { useState } from "react";
import { SignUp } from "./components/LoginPage/SignUp";
import { Outlet , Link } from "react-router-dom";
import "./index.css"
import { LoginPage } from "./components/LoginPage/LoginPage";
import Home from "./components/Home";

function App() {
  const [isSign, setIsSign] = useState("SignIn");
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
//w-[40%] bg-amber-700 m-2 h-[90%]
//w-[60%] bg-green-950 h-[90%] m-5 rounded-2xl
