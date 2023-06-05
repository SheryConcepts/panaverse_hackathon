import ProductCard from "@/components/product-card";
// import { db } from "@/db/db";
// import { carts, NewCart } from "@/db/schema/orders";
// import { users, NewUser } from "@/db/schema/user";
import { groqFetch } from "@/sanity/lib/client";
import Link from "next/link";

export default async function Page() {
  const products = await groqFetch(`
    *[_type == "product" && "kids" in productCategory] {
        _id,
        productTitle,
        productType,
        productPrice,
        productCategory,
        productSizes,
        "productImages": productImages[].asset->url,
        productSlug,
        "productDetails": productInformation.productDetails,
        "productCare": productInformation.productCare
}`);

  // const insertedUser = await db.insert(users).values({ id: 1 });
  //
  // const insertedCart = await db.insert(carts).values([{ id: 1, userId: 1 }]);
  
  // const selectedUser = await db.select().from(users);
  // 
  // const selectedCart = await db.select().from(carts);

// console.log(selectedCart);
// console.log(selectedUser);
  return (
    <div className="flex flex-wrap justify-around items-center gap-y-4">
      {products.map((p: any) => (
        <Link href={`/products/${p.productSlug.current}`} key={p._id}>
          <ProductCard
            productImage={p.productImages[0] ?? ""}
            productTitle={p.productTitle}
            productType={p.productType}
            productPrice={p.productPrice}
            key={p._id}
          />
        </Link>
      ))}
    </div>
  );
}
