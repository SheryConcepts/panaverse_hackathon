import Link from "next/link"
import { Icons } from "components/icons"

import CartButton from "./cart-button"
import NavbarDropdownMenu from "./navbar-dropdown"
import NavItems from "./navitems"
import SearchForm from "./search-from"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-10">
      <Link href="/">
        <Icons.siteLogo className="h-6 " />
      </Link>
      <NavItems />
      <SearchForm />
      <CartButton />
      <NavbarDropdownMenu>
        <CartButton className="flex" />
        <NavItems className="flex flex-col items-center justify-center gap-y-1" />
      </NavbarDropdownMenu>
    </div>
  )
}
