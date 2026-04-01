import {useState} from "react";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [name,setName]=useState('');
  return (
    <>
      <div className="flex flex-col space-y-3.5 justify-center text-center p-5">
        <h2>Testing React Application using Jest</h2>
        <div className="flex justify-center m-5 gap-2">
          
        <input type="text" value={name} className="bg-gray-300 rounded-3xl" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={() => console.log("I m Clicked")}>Search here!</button>
        </div>
        <Login/>
        
      </div>
    </>
  );
}

export default App;
