
import { useEffect, useState } from "react";
import whiskeyImg from "../assets/images/whis1.jpg";
const WhiskeyHero = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 200); // delay for smooth entrance

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[520px] bg-black overflow-hidden flex items-center">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-900 to-black" />

      {/* Decorative Shapes */}
      <div className="absolute top-10 left-6 md:left-10 w-32 md:w-40 h-32 md:h-40 border border-yellow-600/20 rotate-45" />
      <div className="absolute bottom-16 left-10 w-24 md:w-32 h-24 md:h-32 border border-yellow-600/10 rotate-45" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Text */}
          <div className="text-center md:text-left max-w-xl">
            <p className="text-xs md:text-sm tracking-[0.35em] text-neutral-400 mb-3">
              JACK DANIEL'S
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
              HOUSE OF <br />
              <span className="font-bold">WHISKEY</span>
            </h1>

            <div className="mt-6 flex justify-center md:justify-start">
              
            </div>
          </div>

          {/* Image with Transition */}
          <div className="flex justify-center md:justify-end w-full md:w-auto hover:scale-105 hover:-translate-y-2">
            <img
              src={whiskeyImg}
              alt="Whiskey Bottles"
              className={`
                h-[260px] 
                sm:h-[320px] 
                md:h-[420px] 
                lg:h-[460px]
                object-contain
                drop-shadow-2xl
                transition-all duration-1000 ease-out
                ${
                  showImage
                    ? "opacity-100 translate-x-0 scale-100"
                    : "opacity-0 translate-x-10 scale-90"
                }
              `}
            />
          </div>

        </div>
      </div>

      {/* Bottom Reflection */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/90 to-transparent" />
    </section>
  );
};

export default WhiskeyHero;
