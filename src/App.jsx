import { useState } from "react";
import "./App.css";


function App() {

  let[color , setColor] = useState("olive");
  return (
      <div className="w-full h-screen flex flex-col justify-center items-center" style={{backgroundColor: color}}>
        <h1 className="text-2xl font-serif mb-auto mt-8 ">Background Color Changer</h1>
        <div className="flex flex-wrap bg-gray-100 p-2 rounded-lg mt-4 gap-4 mb-8 ">
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "red"}}  onClick={() => setColor("red")}> Red </button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "green"}}  onClick={() => setColor("green")}>Green </button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "blue"}}  onClick={() => setColor("blue")}>Blue </button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "yellow"}}  onClick={() => setColor("yellow")}>Yellow </button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "violet"}}  onClick={() => setColor("violet")}>Violet </button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "orange"}}  onClick={() => setColor("orange")}>Orange </button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "black"}}  onClick={() => setColor("black")}>Black</button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "gray"}}  onClick={() => setColor("gray")}>Gray</button>
          <button className="text-white rounded-4xl py-3 px-6 hover:cursor-pointer" style={{backgroundColor: "pink"}}  onClick={() => setColor("pink")}>Pink</button>
        </div>
      </div>
  );
}

export default App;
