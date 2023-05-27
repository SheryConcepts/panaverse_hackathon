import { Icons } from "components/icons"

import CartButton from "./cart-button"
import NavbarDropdownMenu from "./navbar-dropdown"
import NavItems from "./navitems"
import SearchForm from "./search-from"

export default function Navbar() {
  return (
    <div className="container lg:py-12 lg:px-14 flex justify-between items-center py-8 px-10">
      <Icons.siteLogo className="h-6 " />
      <NavItems />
      <SearchForm />
      <CartButton />
      <NavbarDropdownMenu>
        <CartButton className="flex"/>
        <NavItems className="flex flex-col justify-center items-center gap-y-1" />
      </NavbarDropdownMenu>
    </div>
  )
}
