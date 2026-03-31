import {useState} from "react";
import "./App.css";

function App() {
  const [name,setName]=useState('');
  return (
    <>
      <div>
        <h2>Hello Akshay</h2>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={() => console.log("I m Clicked")}>Click Me!</button>
      </div>
    </>
  );
}

export default App;
