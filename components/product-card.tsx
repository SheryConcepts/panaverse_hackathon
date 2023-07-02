import Image from "next/image";

export default function ProductCard({
  productImage,
  productTitle,
  productType,
  productPrice,
}: any) {
  return (
    <div className="space-y-2 transition duration-200 ease-in-out hover:scale-110">
      <Image src={productImage} width={300} height={100} alt="" />
      <div className="px-2">
        <h1 className="text-h4">{productTitle}</h1>
        <h2 className="text-sm">{productType}</h2>
        <p className="text-lead text-gray-950">{productPrice}$</p>
      </div>
    </div>
  );
}
