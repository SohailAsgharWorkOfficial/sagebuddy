import React, { useState } from "react";
import man from "../assets/man.png";
type Testimonial = {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "IFTIKHAR AHMAD",
    role: "SENIOR DEVELOPER",
    message:
      "Ashamed no inhabit ferrars it ye besides resolve. Own judgment directly few trifling. Elderly as pursuit at regular do parlors. Rank what has into fond pursuit at regular.",
    image: man,
  },
  {
    id: 2,
    name: "AHMED RAZA",
    role: "PROJECT MANAGER",
    message:
      "Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper zealously so.",
    image: man,
  },
  {
    id: 3,
    name: "USAMA KHAN",
    role: "UI/UX DESIGNER",
    message:
      "Considered sympathize ten uncommonly occasional assistance sufficient. Letter of on become he tended active enable to.",
        image: man,
  },
];

const TestimonialSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <section className="py-16 px-4 text-center max-w-4xl mx-auto">
      {/* Heading */}
      <p className="text-orange-500 font-semibold uppercase text-sm">
        Reviews
      </p>
      <h2 className="text-3xl md:text-4xl font-bold mt-1">
        10k Happy Customers
      </h2>

      {/* Testimonial message */}
      <p className="mt-6 text-gray-600 leading-relaxed px-4">
        {t.message}
      </p>

      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-10 px-10 relative">
        <button
          onClick={prevSlide}
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          ←
        </button>

        <div className="absolute left-1/2 transform -translate-x-1/2 w-2/3 border-t border-gray-300"></div>

        <button
          onClick={nextSlide}
          className="text-green-500 hover:text-green-700 text-2xl"
        >
          →
        </button>
      </div>

      {/* User Info */}
      <div className="mt-10 flex flex-col items-center">
        <div className="relative">
          <img
            src={t.image}
            alt={t.name}
            className="w-20 h-20 rounded-full border-4 border-white shadow"
          />
          <div className="absolute -top-2 -right-2 bg-orange-500 text-white p-2 rounded-full text-sm font-bold">
            “
          </div>
        </div>

        <h3 className="mt-4 font-semibold text-lg">{t.name}</h3>
        <p className="text-gray-500 text-sm">{t.role}</p>
      </div>
    </section>
  );
};

export default TestimonialSlider;
