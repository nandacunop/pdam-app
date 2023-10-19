import CarouselDemo from "@/components/carousel";
import DefaultNavbar from "@/components/navbar";
// import DefaultNavbar from "@/components/navbar";
import * as React from "react";

export default function PlaygroundPage() {
  return (
    <>
      <div className="bg-white">
        <DefaultNavbar />
        <section className="">
          <CarouselDemo />
        </section>
      </div>
    </>
  );
}
