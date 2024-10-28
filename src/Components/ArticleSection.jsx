import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function ArticleSearch() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  const [filteredItems, setFilteredItems] = useState("Highlight");
  const [response, setResponse] = useState([]);
  const [articleLimit, setArticleLimit] = useState(6);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchResponse();
  }, [filteredItems, articleLimit]);
  // const filteredPost =
  //   filteredItems === "Highlight"
  //     ? response
  //     : response.filter((x) => x.category === filteredItems);

  const fetchResponse = async () => {
    try {
      const url =
        filteredItems === "Highlight"
          ? `https://blog-post-project-api.vercel.app/posts?limit=${articleLimit}`
          : `https://blog-post-project-api.vercel.app/posts?category=${filteredItems}&limit=${articleLimit}`;
      const result = await axios.get(url);
      setResponse(result.data.posts);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching posts:", error);
      setLoading(false);
    }
  };

  const handleViewMore = () => {
    if (articleLimit < 30) {
      setArticleLimit((prev) => prev + 6);
    }
  };

  return (
    <>
      <h1 className="text-left font-bold text-2xl px-5 sm:px-24">
        Latest Article
      </h1>
      <div className="bg-[#EFEEEB] py-5 pt-10 px-5 mb-10 sm:flex sm:justify-between sm:items-center sm:py-3 sm:mx-20">
        {/* MenuButton */}
        <div className="hidden sm:block ">
          {categories.map((item, index) => (
            <button
              key={index}
              className="sm:text-[#75716B] sm:p-3 sm:hover:bg-[#F5F5F4] sm:rounded-lg sm:focus:bg-[#D9D6D1]"
              onClick={() => setFilteredItems(item)}
            >
              {item}
            </button>
          ))}
        </div>
        {/* END of MenuButton */}
        <SearchBar />
        <div className="my-5 sm:hidden">
          <h2 className="text-left ml-1 mb-1 text-gray-500">Category</h2>
          {/* Dropdown */}
          <div className="sm:hidden w-full">
            <Select
              value={filteredItems}
              onValueChange={(value) => setFilteredItems(value)}
            >
              <SelectTrigger className="w-full py-3 rounded-sm text-muted-foreground">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* End of dropdown */}
        </div>
      </div>
      <article className="sm:grid sm:grid-cols-2 sm:gap-8 sm:px-4 sm:px-0 sm:mx-20">
        {response.map((item) => (
          <BlogCard
            imgLink={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            author={item.author}
            date={new Date(item.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          />
        ))}
      </article>
      <ViewMore addLimit={handleViewMore} isLoading={loading} />
    </>
  );
}

function MenuButton() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <>
      <div className="hidden sm:block ">
        {categories.map((item, index) => (
          <button
            key={index}
            className="sm:text-[#75716B] sm:p-3 sm:hover:bg-[#DAD6D1] sm:rounded-lg"
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

function SearchBar() {
  return (
    <>
      <div className=" relative sm:flex sm:justify-end">
        <Input type="text" placeholder="Search" />
        <Search className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </>
  );
}

function Dropdown() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];
  return (
    <>
      <div className="sm:hidden w-full">
        <Select value="Highlight">
          <SelectTrigger className="w-full py-3 rounded-sm text-muted-foreground">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((item, index) => (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

function BlogCard(props) {
  const navigate = useNavigate();
  const goViewPost = () => {
    navigate("/ViewPost");
  };
  return (
    <>
      <div className="flex flex-col gap-4 px-4 py-6">
        <a href="#" className="relative h-[212px] sm:h-[360px]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={props.imgLink}
            alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
            onClick={goViewPost}
          />
        </a>
        <div className="flex flex-col">
          <div className="flex">
            <span
              className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mb-2"
              onClick={goViewPost}
            >
              {props.category}
            </span>
          </div>
          <a href="#">
            <h2
              className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline"
              onClick={goViewPost}
            >
              {props.title}
            </h2>
          </a>
          <p className="text-muted-foreground text-[#75716B] text-sm mb-4 flex-grow line-clamp-2 text-left">
            {props.description}
          </p>
          <div className="flex items-center text-sm">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
              alt="Tomson P."
            />
            <span>{props.author}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="mx-2 text-[#75716B]">{props.date}</span>
          </div>
        </div>
      </div>
    </>
  );
}

function ViewMore({ addLimit, isLoading }) {
  return (
    <>
      <div className="py-6 sm:py-14">
        <button className="underline font-normal" onClick={addLimit}>
          {isLoading ? <Spinner /> : "View more"}
        </button>
      </div>
    </>
  );
}

function Spinner() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full border-4 border-gray-300 border-t-gray-900 h-12 w-12" />
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}

export default ArticleSearch;
