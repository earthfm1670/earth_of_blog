import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}

function Navbar() {
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center border-2 m-0 p-2">
          <img src="./../logo.png" className="w-5 h-auto sm:w-10"></img>

          <div className="flex gap-x-2 px-3">
            <button className="bg-white border-2 border-gray-300 rounded-[30px] p-2 px-5 text-sm hidden sm:block">
              Log in
            </button>
            <button className="bg-black border-2 border-gray-300 rounded-[30px] p-2 px-5 text-white text-sm hidden sm:block">
              {" "}
              Sign up
            </button>
            <img src="./../Vector.png" className="block sm:hidden"></img>
          </div>
        </div>
      </nav>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <div className="flex flex-col sm:flex sm:flex-row sm:justify-center items-center">
        <div className=" sm:basis-1/3">
          <h1 className="text-4xl my-7 font-poppins font-medium sm:text-right">
            Stay Informed, Stay Inspired
          </h1>
          <p className="text-[#75716B] font-poppins sm:text-sm sm:text-right">
            Discover a World of Knowledge at your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <div className="w-30 h-auto sm:w-auto sm:auto sm:basis-1/3 sm:m-10">
          <img src="./../hoomancrop.jpeg" className="my-10"></img>
        </div>
        <div className="flex flex-col items-start sm:basis-1/3">
          <h6 className="font-poppins text-sm text-[#75716B] sm:my-1">
            -Author
          </h6>
          <h3 className="font-poppins my-3 text-xl font-medium sm:my-0">
            Thompson P.
          </h3>
          <p className="font-poppins text-left text-[#75716B] my-3 sm:text-sm">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="font-poppins text-left text-[#75716B] sm:text-sm">
            When i'm not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
