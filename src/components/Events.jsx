import leftImg from "../assets/images/left-drink.jpg";
import rightImg from "../assets/images/right-drink.jpg";

const Events = () => {
  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10">

        {/* Left Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-96 rounded-t-full overflow-hidden shadow-xl">
            <img
              src={leftImg}
              alt="Cocktail Event"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>
        </div>

        {/* Center Content */}
        <div className="text-center text-white px-4">
          <span className="text-sm tracking-widest text-gray-400">
            ABOUT US
          </span>

          <h2 className="text-3xl md:text-4xl font-serif mt-4 leading-snug">
            AGED IN TRADITION <br />
            <span className="block mt-2">STEEPED IN INNOVATION</span>
          </h2>

          <p className="text-gray-400 text-sm mt-6 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur ut elit nec nisl posuere fermentum.
          </p>

          
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-64 h-96 rounded-t-full overflow-hidden shadow-xl">
            <img
              src={rightImg}
              alt="Whiskey Bottle"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
