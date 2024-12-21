"use client";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Puspa Rani",
      role: "Parent",
      image: "/parents/parent-1.jpg",
      quote:
        "আমার মেয়ে Ideal Academy-তে খুব আনন্দের সাথে পড়াশোনা করে। শিক্ষকরা খুবই যত্নশীল এবং দায়িত্বশীল।",
      childClass: "Senior KG",
      englishQuote:
        "My daughter loves studying at Ideal Academy. The teachers are very caring and responsible.",
    },
    {
      name: "Mohammad Karim",
      role: "Parent",
      image: "/parents/parent-2.jpg",
      quote:
        "সন্তানের জন্য নিরাপদ ও আধুনিক শিক্ষা পরিবেশ পেয়ে আমরা খুবই সন্তুষ্ট। Ideal Academy সত্যিই একটি আদর্শ প্রতিষ্ঠান।",
      childClass: "Nursery",
      englishQuote:
        "We are very satisfied with the safe and modern learning environment for our child. Ideal Academy is truly an ideal institution.",
    },
    {
      name: "Nusrat Jahan",
      role: "Parent",
      image: "/parents/parent-3.jpg",
      quote:
        "এখানে শিশুদের সামগ্রিক বিকাশের দিকে বিশেষ নজর দেওয়া হয়। খেলাধুলা থেকে শুরু করে পড়াশোনা সবকিছুতেই সুন্দর ভারসাম্য আছে।",
      childClass: "Junior KG",
      englishQuote:
        "They focus on children's overall development. There's a beautiful balance in everything from sports to studies.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4 font-quicksand">
            Parents Testimonials
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-nunito">
            Read what parents say about us
          </p>
        </div>

        <div className="relative min-h-[400px] md:min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 absolute inset-0
                ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0 z-10"
                    : "opacity-0 translate-x-full z-0"
                }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full border-4 border-accent-yellow/20"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-accent-yellow text-4xl mb-4">❝</div>
                    <p className="text-neutral-600 text-lg mb-3 font-nunito leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <p className="text-neutral-500 text-base mb-6 font-nunito italic">
                      "{testimonial.englishQuote}"
                    </p>
                    <div className="font-quicksand">
                      <h3 className="text-xl font-bold text-neutral-800">{testimonial.name}</h3>
                      <p className="text-primary-500">{testimonial.role}</p>
                      <p className="text-neutral-600 text-sm">{testimonial.childClass}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors
                ${
                  index === currentSlide
                    ? "bg-accent-yellow"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
