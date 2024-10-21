import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import * as React from "react";

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

export default ArticleSearch;
