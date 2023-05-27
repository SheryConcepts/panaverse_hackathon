"use client"

import { FormEvent, useState } from "react"

import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

export default function SearchForm() {
  const [input, setInput] = useState<string>("")

  function handleChange(e: any) {
    e.preventDefault()
    console.log(e.target.value);
    setInput(e.target.value)
  }

  return (
    <form className="ring-1 focus:ring-2 rounded-sm  ring-primary lg:flex items-center hidden">
      <Button type="submit" variant="link" className="p-2 h-6">
        <Icons.search className="p-0 w-3" />
      </Button>
      <input
        className="rounded-sm text-xs font-thin active:outilne-none focus:outline-none"
        placeholder="what you looking for"
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </form>
  )
}
