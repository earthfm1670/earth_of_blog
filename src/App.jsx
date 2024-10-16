import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My First React App on Vite</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center border-2">
          <img src="./../image.png" className="p-3"></img>
          <div className="flex gap-x-2 p-3">
            <button className="bg-zinc-300">Log in</button>
            <button className="bg-zinc-300"> Sign up</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
