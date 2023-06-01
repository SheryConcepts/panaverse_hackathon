import Image from "next/image"

export default function ProductImages({ images }: { images: string[] }) {
  return (
    <div className="flex flex-row justify-around items-center gap-x-4">
      <div className="flex flex-col justify-start items-center gap-y-2 ">
        {images.map((i) => (
          <Image key={i} src={i} width={80} height={80} alt="temp alt" />
        ))}
      </div>
      <div className="">
        <Image src={images[0]} width={400} height={400} alt="temp alt" />
      </div>
    </div>
  )
}
