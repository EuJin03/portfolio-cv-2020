import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import image from "../resources/background.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }`
      )
      .then(data => setAuthor(data[0]))
      .catch(console.error);
  });

  if (!author) return <div>Loading...</div>;

  return (
    <main>
      <img
        src={image}
        alt="background-image"
        className="absolute object-cover w-full h-full top-0"
      />
      <div className="p-10 lg:pt-20 container mx-auto relative">
        <section className="bg-gray-700 rounded-lg shadow-2xl lg:flex p-20 w-3/4 mx-auto">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-gray-300 mb-4">
              Yo. I'm <span className="text-gray-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="76gmm98e"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
