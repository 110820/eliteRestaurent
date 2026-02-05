const Contact = () => {
  return (
    <div className="bg-neutral-950 text-gray-300 pt-28 px-6 pb-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Contact Us
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Have questions or want to plan your night? Reach out to us and we
          will be happy to assist you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="bg-black p-8 rounded-lg shadow-lg border border-gray-800 space-y-4">
          <h2 className="text-2xl text-white mb-4">Get In Touch</h2>

          <p>📍 MG Road, Nagpur</p>
          <p>📞 +91 9999999999</p>
          <p>✉ sixthsense@email.com</p>

          <p className="text-gray-400 mt-4">
            Opening Hours: 6:00 PM – 2:00 AM
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-black p-8 rounded-lg shadow-lg border border-gray-800 space-y-5">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          />
          
          <input
            type="text"
            placeholder="Phone no"
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-amber-500 text-black py-3 font-semibold rounded hover:bg-amber-400 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;
