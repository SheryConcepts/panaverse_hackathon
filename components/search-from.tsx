"use client"

import { FormEvent, useState } from "react"

import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

export default function SearchForm() {
  const [input, setInput] = useState<string>("")

  function handleChange(e: any) {
    e.preventDefault()
    console.log(e.target.value)
    setInput(e.target.value)
  }

  return (
    <form className="hidden items-center rounded-sm  ring-1 ring-primary focus:ring-2 lg:flex">
      <Button type="submit" variant="link" className="h-6 p-2">
        <Icons.search className="w-3 p-0" />
      </Button>
      <input
        className="active:outilne-none rounded-sm text-xs font-thin focus:outline-none"
        placeholder="what you looking for"
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </form>
  )
}
