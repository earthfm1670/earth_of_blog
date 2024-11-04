import { Navbar } from "@/Components/WebSection";
import axios from "axios";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FacebookIcon from "./../Icons/Facebook_black.svg";
import LinkedInIcon from "./../Icons/LinkedIN_black.svg";
import TwitterIcon from "./../Icons/Twitter_black.svg";
import HappyIcon from "./../Icons/happy_light.svg";
import CopyIcon from "./../Icons/Copy_light.svg";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function ViewPost() {
  const { postId } = useParams();
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [postId]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `https://blog-post-project-api.vercel.app/posts/${postId}`
      );
      setResponse(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    if (loading) return <Spinner />;

    if (!response) return <p>Article not found.</p>;
  };
  return (
    <>
      <Navbar />
      <div className=" mx-4 sm:mx-20">
        {/* image section */}
        <div className="flex-grow">
          <img
            src={response.image}
            className="my-10 w-full h-full rounded-xl"
          />
        </div>
        {/* div for content */}
        <div className="flex">
          {/* div for left */}
          <div className="flex-grow">
            <div className="m-2 gap-2 flex">
              <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mb-2">
                {response.category}
              </span>
              <span className="mx-2 text-[#75716B]">
                {new Date(response.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline mx-2">
              {response.title}
            </h2>
            <p className="mb-4 flex-grow line-clamp-2 text-left m-2">
              {response.description}
            </p>
            <div className="markdown text-left mx-2">
              <Markdown>{response.content}</Markdown>
            </div>
          </div>
          {/* author section for desktop */}
          <div className="mx-6 mt-8 mb-8 p-4 bg-[#EFEEEB] rounded-xl hidden sm:h-[420px] sm:flex sm:flex-col sm:block sm:sticky sm:top-4 ">
            <div className="flex justify-start items-center p-4">
              <img
                src="./../hoomancrop.jpeg"
                className="rounded-full w-12 h-12"
              ></img>
              <div className="mx-4">
                <p className="text-[#75716B] text-left">Author</p>
                <span className="font-[600]">{response.author}</span>
              </div>
            </div>
            <div className="divide-solid divide-[#DAD6D1] divide-y mb-4">
              dummy element for divide line
              <p></p>
              <p></p>
            </div>
            <div className="text-[#75716B] text-left">
              <p>
                I am a pet enthusiast and freelance writer who specializes in
                animal behavior and care. With a deep love for cats, I enjoy
                sharing insights on feline companionship and wellness.
              </p>
              <p className="my-6">
                When i'm not writing, I spends time volunteering at my local
                animal shelter, helping cats find loving homes.
              </p>
            </div>
          </div>
        </div>
        {/* Div for author section */}
        <div className="mt-8 mb-8 p-4 bg-[#EFEEEB] rounded-xl sm:flex sm:flex-col sm:hidden">
          <div className="flex justify-start items-center p-4">
            <img
              src="./../hoomancrop.jpeg"
              className="rounded-full w-12 h-12"
            ></img>
            <div className="mx-4">
              <p className="text-[#75716B] text-left">Author</p>
              <span className="font-[600]">{response.author}</span>
            </div>
          </div>
          <div className="divide-solid divide-[#DAD6D1] divide-y mb-4">
            {/* dummy element for divide line */}
            <p></p>
            <p></p>
          </div>
          <div className="text-[#75716B] text-left">
            <p>
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.
            </p>
            <p className="my-6">
              When i'm not writing, I spends time volunteering at my local
              animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
      <Socials />
      <Comment />
    </>
  );
}

function Spinner() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}

function Socials() {
  return (
    <>
      <div className="bg-[#EFEEEB] py-5 flex flex-col gap-5">
        <div className="w-11/12 flex-grow">
          <Button
            variant="outline"
            className="border-black rounded-full w-full mx-4"
          >
            <img src={HappyIcon} className="w-7 h-7" />
            321
          </Button>
        </div>
        <div className="flex items-center justify-center gap-2 w-11/12 mx-4">
          <div className="flex-grow">
            <Button
              variant="outline"
              className="border-black rounded-full w-full"
            >
              <img src={CopyIcon} alt="copyicon" className="w-7 h-7" />
              Copy link
            </Button>
          </div>
          <div className="flex gap-2">
            <img src={FacebookIcon} alt="facebookicon" />
            <img src={LinkedInIcon} alt="linkedinicon" />
            <img src={TwitterIcon} alt="twittericon" />
          </div>
        </div>
      </div>
    </>
  );
}

function Comment() {
  return (
    <>
      <div className="m-4">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="message" className="text-left text-[#75716B]">
            Comment
          </Label>
          <Textarea
            placeholder="What are your thoughts?"
            id="message"
            className="placeholder:text-[#75716B]"
          />
        </div>
        <div className="my-2 flex">
          <Button className="rounded-3xl w-1/3 h-[44px]">Send</Button>
        </div>
      </div>
    </>
  );
}

export default ViewPost;
