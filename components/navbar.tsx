import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { Icons } from "components/icons";

import { fetchUserOrders } from "@/lib/fetch-products";
import CartButton from "@/components/cart/cart-button";

import NavbarDropdownMenu from "./navbar-dropdown";
import NavItems from "./navitems";
import SearchForm from "./search-from";

export default async function Navbar() {
  const { userId } = auth();
  let orders = 0;
  if (userId) {
    orders = await fetchUserOrders(userId);
  }
  return (
    <div className="flex items-center justify-between py-10 text-base">
      <Link href="/">
        <Icons.siteLogo className="h-6 " />
      </Link>
      <NavItems />
      <SearchForm />
      {
        // @ts-ignore
        <CartButton />
      }
      <NavbarDropdownMenu orders={orders}>
        {
          // @ts-ignore
          <CartButton className="flex" />
        }
      </NavbarDropdownMenu>
    </div>
  );
}
