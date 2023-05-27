"use client"

import { useState } from "react"
import { FormEvent } from "react"
import {Icons} from "@/components/icons"
import { Button } from "./ui/button"

export default function SearchForm() {
  const [input, setInput] = useState()
  
  function handleChange(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setInput(input)
  }
  
  return (
    <form className="ring-1 rounded-sm ring-primary lg:flex items-center hidden">
      <Button type="submit" variant="link" className="p-2 h-6">
        <Icons.search className="p-0 w-3"/> 
      </Button>
      <input defaultValue="what you looking for?" className="rounded-sm text-xs font-thin" type="text" value={input} onChange={(e) => handleChange(e)} />
    </form>
  )
}
