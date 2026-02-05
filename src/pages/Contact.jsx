import { useState } from "react";
import { sendContact } from "../utils/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await sendContact(formData);
      setSuccess("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        <form
          onSubmit={handleSubmit}
          className="bg-black p-8 rounded-lg shadow-lg border border-gray-800 space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:border-amber-400 outline-none transition"
          />

          {success && <p className="text-green-400 text-sm">{success}</p>}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 text-black py-3 font-semibold rounded hover:bg-amber-400 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
