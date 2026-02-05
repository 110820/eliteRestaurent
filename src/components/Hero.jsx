import { useState, useEffect } from "react";

import bar2 from "../assets/images/slider1.jpg";
import bar3 from "../assets/images/slider2.jpg";
import bar1 from "../assets/images/bgg.jpg";

const images = [bar2, bar3, bar1];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-40px)] mt-10 flex items-center overflow-hidden">

      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-20">

          <div className="max-w-xl text-center md:text-left text-white">

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              SIXTH SENSE BAR
            </h2>

            <p className="text-gray-300 mb-6 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
              Experience premium ambiance, crafted cocktails, and unforgettable nights.
            </p>

            <button className="bg-orange-600 hover:bg-orange-500 transition px-6 py-3 rounded text-sm md:text-base font-semibold">
              LEARN MORE
            </button>

          </div>

        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              current === index ? "bg-orange-500 scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
