"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("clicked submit button");
      }}
      className="flex flex-col items-center justify-start py-36 text-center"
    >
      <Background />
      <h1 className="text-h3">Subscribe Our Newsletter</h1>
      <p className="text-p">
        Get the latest information and promo offer directly
      </p>
      <div className="flex w-full max-w-md flex-wrap items-center justify-center gap-y-2 space-x-2">
        <Input
          type="email"
          placeholder="Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit">Get Started</Button>
      </div>
    </form>
  );
}

function Background() {
  return (
    <div className="absolute z-[-3] text-9xl font-bold text-gray-100">
      Newsletter
    </div>
  );
}
