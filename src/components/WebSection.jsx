import { Linkedin, Github, Bitcoin } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <>
      <nav className="">
        <div className="flex justify-between items-center border-2 m-0 p-2">
          <img
            src="./../../public/image/logo.png"
            className="w-5 h-auto sm:w-10"
          ></img>

          <div className="flex gap-x-2 px-3">
            <button className="bg-white border-2 border-gray-300 rounded-[30px] p-2 px-5 text-sm hidden sm:block">
              Log in
            </button>
            <button className="bg-black border-2 border-gray-300 rounded-[30px] p-2 px-5 text-white text-sm hidden sm:block">
              {" "}
              Sign up
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <img
                  src="./../../public/image/Vector.png"
                  className="block sm:hidden"
                ></img>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen my-2 py-5 px-5 flex flex-col gap-6">
                <button className="bg-white border-2 border-black rounded-full py-4 text-sm w-full sm:hidden">
                  Log in
                </button>
                <button className="bg-black border-2 border-gray-300 rounded-full py-4 w-full text-white text-sm sm:hidden">
                  {" "}
                  Sign up
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  );
}

export function HeroSection() {
  return (
    <>
      <div className="flex flex-col px-20 sm:flex sm:flex-row sm:justify-center items-center">
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
          <img
            src="./../../public/image/hoomancrop.jpeg"
            className="my-10 rounded-2xl"
          ></img>
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

export function Footer() {
  return (
    <>
      <footer className="bg-[#EFEEEB] my-5 py-5 sm:flex sm:justify-between sm:items-center sm:my-5 sm:h-16 sm:px-10">
        <div className="flex justify-center gap-5 py-3 sm:gap-5">
          <div>Get in touch</div>
          <div className="flex gap-2">
            <Linkedin />
            <Github />
            <Bitcoin />
          </div>
        </div>
        <div className="py-3">
          <a href="www.google.com" className="underline">
            Homepage
          </a>
        </div>
      </footer>
    </>
  );
}
