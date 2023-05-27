import { Icons } from "components/icons"
import SearchForm from "./search-from"
import NavItems from "./navitems"
import CartButton from "./cart-button"

export default function Navbar() {
  return (
    <div className="container lg:py-12 lg:px-14 flex justify-between items-center py-8 px-10">
      <Icons.siteLogo className="h-6 " />
      <NavItems />
      <SearchForm />
      <CartButton />
    </div>
  )
}
