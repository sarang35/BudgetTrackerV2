import { useState } from "react";
import bigImage from "./assets/jakub-zerdzicki-U4-I4oH4xlg-unsplash.jpg";
import Topic from "./components/LoginPage/Topic";

function App() {
  const [isSign, setIsSign] = useState("SignIn");
  return (
    <div
      className="min-h-screen lg:bg- bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${bigImage})` }}
    >
      <div className="min-h-[500px] w-[300px] lg:h-[500px] flex items-center lg:w-[700px] rounded-2xl opacity-86 bg-white">
        <div className="w-[50%] bg-amber-700 h-[90%] " >

        </div>
      </div>
    </div>
  );
}

export default App;
