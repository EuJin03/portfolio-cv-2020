import React from "react";
import image from "../resources/background.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Background Image"
        className="absolute object-cover w-full h-full top-0"
      />
      <section className="relative flex justify-center pt-12 lg:pt-32 px-8">
        <h1 className="text-6xl text-gray-500 font-bold cursive leading-none lg:leading-snug home-name">
          I'm Eugene.
        </h1>
      </section>
    </main>
  );
}
