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
      <h1 className="mt-16 mb-5 text-left font-bold text-2xl">
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

      <BlogCard
        imgLink={blogPosts[0].image}
        category={blogPosts[0].category}
        title={blogPosts[0].title}
        description={blogPosts[0].description}
        author={blogPosts[0].author}
        date={blogPosts[0].date}
      />
      <BlogCard
        imgLink={blogPosts[1].image}
        category={blogPosts[1].category}
        title={blogPosts[1].title}
        description={blogPosts[1].description}
        author={blogPosts[1].author}
        date={blogPosts[1].date}
      />
      <BlogCard
        imgLink={blogPosts[2].image}
        category={blogPosts[2].category}
        title={blogPosts[2].title}
        description={blogPosts[2].description}
        author={blogPosts[2].author}
        date={blogPosts[2].date}
      />
      <BlogCard
        imgLink={blogPosts[3].image}
        category={blogPosts[3].category}
        title={blogPosts[3].title}
        description={blogPosts[3].description}
        author={blogPosts[3].author}
        date={blogPosts[3].date}
      />
      <BlogCard
        imgLink={blogPosts[4].image}
        category={blogPosts[4].category}
        title={blogPosts[4].title}
        description={blogPosts[4].description}
        author={blogPosts[4].author}
        date={blogPosts[4].date}
      />
      <BlogCard
        imgLink={blogPosts[5].image}
        category={blogPosts[5].category}
        title={blogPosts[5].title}
        description={blogPosts[5].description}
        author={blogPosts[5].author}
        date={blogPosts[5].date}
      />
    </>
  );
}

function MenuButton() {
  return (
    <>
      <div className="hidden sm:block ">
        <button className="sm:p-3 sm:hover:bg-[#DAD6D1] sm:rounded-lg">
          Highlight
        </button>
        <button className="sm:p-3 sm:hover:bg-[#DAD6D1] sm:rounded-lg">
          Cat
        </button>
        <button className="sm:p-3 sm:hover:bg-[#DAD6D1] sm:rounded-lg">
          Inspiration
        </button>
        <button className="sm:p-3 sm:hover:bg-[#DAD6D1] sm:rounded-lg">
          General
        </button>
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
      <Select className="">
        <SelectTrigger className="text-gray-500">
          <SelectValue placeholder="Highlight" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}

function BlogCard(props) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={props.imgLink}
          alt="Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do"
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {props.category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {props.title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
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
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleSearch;
