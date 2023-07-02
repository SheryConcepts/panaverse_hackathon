"use client";

import { useState } from "react";

import { Icons } from "@/components/icons";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchForm() {
  const [input, setInput] = useState<string>("");

  function handleChange(e: any) {
    e.preventDefault();
    console.log(e.target.value);
    setInput(e.target.value);
  }

  return (
    <div className="hidden scale-[0.8] items-center gap-x-0 rounded-sm lg:flex lg:justify-around">
      <Button
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Search Button Clicked");
        }}
        variant="link"
        className="max-h-full rounded-r-none border border-r-0  border-gray-200 px-3"
      >
        <Icons.search className="scale-[0.8] p-0" />
      </Button>
      <Input
        className=""
        placeholder="what you looking for"
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
