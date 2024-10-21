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

function ArticleSearch() {
  return (
    <>
      <h1 className="mt-16 mb-5 text-left font-bold text-2xl">
        Latest Article
      </h1>
      <div className="bg-[#EFEEEB] py-5 pt-10 px-5 mb-10">
        <div className=" relative">
          <Input type="" placeholder="Search" />
          <Search className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <div className="my-5">
          <h2 className="text-left ml-1 mb-1 text-gray-500">Category</h2>
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
        </div>
      </div>
    </>
  );
}

export default ArticleSearch;
