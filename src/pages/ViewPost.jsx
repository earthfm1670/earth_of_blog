import { Navbar } from "@/Components/WebSection";
import axios from "axios";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";

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
      <div className="sm:flex sm:w-3/4">
        <img src={response.image} className="my-5" />
      </div>
      <div className="flex m-2 gap-2">
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
      {/* Div for author section */}
      <div className="mx-6 mt-8 mb-8 p-4 bg-[#EFEEEB] rounded-xl w-[311px] sm:flex sm:flex-col sm:w-1/4 sm:sticky sm:top-4">
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
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="my-6">
            When i'm not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
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

export default ViewPost;
