import Link from "next/link";
import { Icons } from "components/icons";

import CartButton from "@/components/cart/cart-button";

import NavbarDropdownMenu from "./navbar-dropdown";
import NavItems from "./navitems";
import SearchForm from "./search-from";

export default function Navbar() {
  return (
    <div className="text-sm flex items-center justify-between py-10">
      <Link href="/">
        <Icons.siteLogo className="h-6 " />
      </Link>
      <NavItems />
      <SearchForm />
      {
        // @ts-ignore
        <CartButton />
      }
      <NavbarDropdownMenu>
        {
          // @ts-ignore
          <CartButton className="flex"/>
        }
        <NavItems className="flex flex-col items-center justify-center gap-y-1" />
      </NavbarDropdownMenu>
    </div>
  );
}
