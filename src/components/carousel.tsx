"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import * as React from "react";

const images = [
  {
    id: 1,
    gambar: "/slide_1.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    gambar: "/slide_2.jpg",
    alt: "Slide 2",
  },
  {
    id: 3,
    gambar: "/slide_3.jpg",
    alt: "Slide 3",
  },
];

export default function CarouselDemo() {
  return (
    <Carousel slideInterval={3000} className="relative w-full">
      {images.map((image) => (
        <Image
          key={image.id}
          alt={image.alt}
          src={image.gambar}
          className="aspect-video object-cover"
          width={1080}
          height={480}
        />
      ))}
    </Carousel>
  );
}
