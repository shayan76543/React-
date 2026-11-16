import React, { useState } from "react";
import Student from "./student";

function App() {
  const [color,setColor]=useState("olive");
  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap inset-x-0 justify-center bottom-12  px-3 py-2 bg-white rounded-3xl gap-2">
        <button onClick={()=>setColor('red')} className="px-4 py-1 outline-0 rounded-full text-white shadow-lg bg-red-700">
        Red
        </button>
                <button onClick={()=>setColor('yellow')} className="px-4 py-1 outline-0 rounded-full text-white shadow-lg bg-yellow-700">
        Yellow
        </button>
                <button onClick={()=>setColor('pink')} className="px-4 py-1 outline-0 rounded-full text-white shadow-lg bg-pink-700">
        Pink
        </button>
                <button onClick={()=>setColor('orange')} className="px-4 py-1 outline-0 rounded-full text-white shadow-lg bg-orange-700">
        Orange
        </button>
                <button onClick={()=>setColor('amber')} className="px-4 py-1 outline-0 rounded-full text-white shadow-lg bg-amber-900">
        Amber
        </button>
        </div>
    </div>    
  )
}

export default App;
