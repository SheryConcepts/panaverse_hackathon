import Image from "next/image"

export default function ProductCard({
  productImage,
  productTitle,
  productType,
  productPrice,
}: any) {
  return (
    <div className="">
      <Image src={productImage} width={300} height={100} alt="" />
      <h1>{productTitle}</h1>
      <h2>{productType}</h2>
      <p>{productPrice}</p>
    </div>
  )
}
