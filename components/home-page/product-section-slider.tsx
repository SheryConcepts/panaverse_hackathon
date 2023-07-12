"use client";

import Image from "next/image";
import { A11y, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Slider({
    products,
}: {
    products: {
        productImage: string;
        productSlug: string;
        productPrice: number;
        productTitle: string;
    }[];
}) {
    return (
        <Swiper
            className="mb-8 w-full  "
            breakpoints={{
                // width >= 300
                300: {
                    slidesPerView: 1,
                    spaceBetween: 100,
                },
                // width >= 1000
                1000: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                // width >= 1260
                1260: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            }}
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
        >
            {products.map((p, index) => (
                <SwiperSlide key={index} className="py-6">
                    <Product
                        image={p.productImage}
                        title={p.productTitle}
                        price={p.productPrice}
                        slug={p.productSlug}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

function Product({
    image,
    title,
    price,
    slug,
}: {
    image: string;
    title: string;
    price: number;
    slug: string;
}) {
    return (
        <motion.div
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, type: "spring" },
                zIndex: 100,
            }}
            className="cursor-pointer space-y-2 hover:scale-125"
        >
            <Link href={`/products/${slug}`}>
                <Image
                    src={image}
                    className="mx-auto"
                    height={400}
                    width={400}
                    alt={title}
                />
                <div className="space-y-2">
                    <h1 className="font-mediuem text-md text-center font-semibold">
                        {title}
                    </h1>
                    <h2 className="text-md text-center font-medium leading-3">{price}</h2>
                </div>
            </Link>
        </motion.div>
    );
}
