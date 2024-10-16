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
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl my-7 font-poppins font-medium">
            Stay Informed, Stay Inspired
          </h1>
          <p className="text-[#75716B] font-poppins">
            Discover a World of Knowledge at your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        <div className="overflow-hidden w-30 h-auto sm:w-auto sm:h-auto">
          <img src="./../hooman.jpeg" className="my-10"></img>
        </div>
        <div className="flex flex-col items-start">
          <h6 className="font-poppins text-sm text-[#75716B]">-Author</h6>
          <h3 className="font-poppins my-3 text-xl font-medium">Thompson P.</h3>
          <p className="font-poppins text-left text-[#75716B] my-3">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="font-poppins text-left text-[#75716B]">
            When i'm not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
