import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import * as React from "react";
import { blogPosts } from "./../data/blogPosts";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

function ArticleSearch() {
  return (
    <>
      <h1 className="mt-16 mb-5 text-left font-bold text-2xl px-4">
        Latest Article
      </h1>
      <div className="bg-[#EFEEEB] py-5 pt-10 px-5 mb-10 sm:flex sm:justify-between sm:items-center sm:py-3">
        <MenuButton />
        <SearchBar />
        <div className="my-5 sm:hidden">
          <h2 className="text-left ml-1 mb-1 text-gray-500">Category</h2>
          <Dropdown />
        </div>
      </div>
      <article className="sm:grid sm:grid-cols-2 sm:gap-8 sm:px-4 sm:px-0">
        {blogPosts.map((item) => (
          <BlogCard
            imgLink={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            author={item.author}
            date={item.date}
          />
        ))}
      </article>
      <ViewMore />
    </>
  );
}

const categories = ["Highlight", "Cat", "Inspiration", "General"];

function MenuButton() {
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
  return (
    <div className="flex flex-col gap-4 px-4 py-6">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={props.imgLink}
          alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mb-2">
            {props.category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
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
  );
}

function ViewMore() {
  return (
    <>
      <div className="py-6 sm:py-14">
        <button className="underline font-normal">View more</button>
      </div>
    </>
  );
}

export default ArticleSearch;
