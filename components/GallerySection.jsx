"use client";
import { useState } from "react";
import Image from "next/image";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: "all", name: "All" },
    { id: "activities", name: "Activities" },
    { id: "events", name: "Events" },
    { id: "facilities", name: "Facilities" },
  ];

  const images = [
    { src: "/gallery/gallery-1.jpg", category: "activities" },
    { src: "/gallery/gallery-2.jpg", category: "activities" },
    { src: "/gallery/gallery-3.jpg", category: "activities" },
    { src: "/gallery/gallery-4.jpg", category: "events" },
    { src: "/gallery/gallery-5.jpg", category: "events" },
    { src: "/gallery/gallery-6.jpg", category: "events" },
    { src: "/gallery/gallery-7.jpg", category: "facilities" },
    { src: "/gallery/gallery-8.jpg", category: "facilities" },
    { src: "/gallery/gallery-9.jpg", category: "facilities" },
  ];

  const filteredImages =
    activeCategory === "all" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">Our Gallery</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8 font-nunito">
            Take a peek into our vibrant school life and activities
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-nunito transition-colors
                  ${
                    activeCategory === category.id
                      ? "bg-accent-yellow text-neutral-800"
                      : "bg-white text-neutral-600 hover:bg-accent-yellow/10"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full m-4">
              <Image
                src={selectedImage.src}
                alt="Gallery preview"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />

              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-accent-yellow transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
