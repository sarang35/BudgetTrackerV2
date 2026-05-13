import { useState } from "react";
import Topic from "./components/LoginPage/Topic";

function App() {
  const [isSign, setIsSign] = useState("SignIn");
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
                   lg:flex"
      >
        <div className="lg:w-[40%]">
          <Topic />
        </div>
        <div className="hidden lg:block bg-[url(./assets/BigScreen.jpg)] bg-cover rounded-2xl w-[60%]  m-2 mr-0">hi</div>
      </div>
    </div>
  );
}

export default App;
//w-[40%] bg-amber-700 m-2 h-[90%]
//w-[60%] bg-green-950 h-[90%] m-5 rounded-2xl
