"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/slide/slide-1.jpg",
      title: "Welcome to Ideal Academy",
      description: "Where learning meets fun and adventure",
    },
    {
      image: "/slide/slide-2.jpg",
      title: "Nurturing Young Minds",
      description: "Creating a foundation for lifelong learning",
    },
    {
      image: "/slide/slide-3.jpg",
      title: "Safe Learning Environment",
      description: "Modern facilities with trained and caring staff",
    },
    {
      image: "/slide/slide-4.jpg",
      title: "Creative Development",
      description: "Encouraging imagination and artistic expression",
    },
    {
      image: "/slide/slide-5.jpg",
      title: "Play-Based Learning",
      description: "Learning through exploration and discovery",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative h-screen">
      {/* Slider */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 
              ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            {/* Background image */}
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />

            {/* Slide content */}
            <div className="absolute inset-0 flex items-center justify-center z-[2]">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 font-quicksand animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl font-nunito animate-slide-up">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-[3] text-white hover:text-accent-yellow transition-colors p-2"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-[3] text-white hover:text-accent-yellow transition-colors p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[3] flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors
                ${index === currentSlide ? "bg-accent-yellow" : "bg-white/50 hover:bg-white/75"}`}
            />
          ))}
        </div>
      </div>

      {/* Notice Board */}
      <div className="absolute bottom-4 right-4 bg-white/95 p-6 rounded-lg shadow-lg max-w-sm z-[4]">
        <h3 className="font-bold text-lg mb-4 font-quicksand text-neutral-800">Latest Updates</h3>
        <ul className="space-y-3 font-nunito">
          <li className="flex items-start space-x-3">
            <span className="text-accent-yellow text-xl mt-0.5">🎉</span>
            <span className="text-neutral-700">Summer Camp Registration Now Open!</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-accent-green text-xl mt-0.5">📚</span>
            <span className="text-neutral-700">Parent-Teacher Meeting: June 15th</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-accent-purple text-xl mt-0.5">🎨</span>
            <span className="text-neutral-700">Art Exhibition Next Week</span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-accent-pink text-xl mt-0.5">🎭</span>
            <span className="text-neutral-700">Annual Day Preparations Begin</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
