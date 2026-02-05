import aboutImg from "../assets/images/restbg.jpg";
import abImg from "../assets/images/ab2.jpg";


const About = () => {
  return (
    <div className="bg-neutral-950 text-gray-300">

      {/* ===== Hero Section ===== */}
      <section className="relative h-[90vh] md:h-[100vh] flex items-center justify-center">

        {/* Background Image */}
        <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${aboutImg})` }}
  />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Hero Content */}
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            About Sixth Sense
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Experience luxury nightlife, signature drinks and unforgettable
            moments at Sixth Sense Bar.
          </p>
        </div>
      </section>

      {/* ===== About Content ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={abImg}
            alt="About Sixth Sense"
            className="w-full h-[350px] object-cover rounded-xl shadow-lg hover:scale-110 transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl text-white font-semibold">
            Our Story
          </h2>

          <p className="leading-7 text-gray-400">
            Sixth Sense Bar was created to deliver a premium nightlife
            experience. We blend stylish ambiance, handcrafted cocktails and
            top-quality service to create unforgettable evenings.
          </p>

          <p className="leading-7 text-gray-400">
            Whether you are celebrating special moments or enjoying a relaxing
            evening, our bar offers the perfect atmosphere.
          </p>

          {/* CTA Button */}
          <button className="mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
            Explore Menu
          </button>
        </div>

      </section>

      {/* ===== Features Section ===== */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">

          <div className="p-6 rounded-xl bg-neutral-900 hover:-translate-y-2 transition duration-300 shadow-lg">
            <h3 className="text-xl text-white mb-3">🍸 Premium Drinks</h3>
            <p className="text-gray-400">
              Enjoy handcrafted cocktails prepared by expert bartenders.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900 hover:-translate-y-2 transition duration-300 shadow-lg">
            <h3 className="text-xl text-white mb-3">🎵 Live Music</h3>
            <p className="text-gray-400">
              Experience energetic live performances and DJ nights.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-neutral-900 hover:-translate-y-2 transition duration-300 shadow-lg">
            <h3 className="text-xl text-white mb-3">✨ Luxury Ambiance</h3>
            <p className="text-gray-400">
              Relax in an elegant environment designed for comfort and style.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
