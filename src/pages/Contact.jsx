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

  const validatePhone = (phone) => {
    // Remove all non-digit characters
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if it's exactly 10 digits
    if (cleanPhone.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }
    
    // Check if it starts with 6, 7, 8, or 9 (valid Indian mobile numbers)
    if (!/^[6-9]/.test(cleanPhone)) {
      return "Phone number must start with 6, 7, 8, or 9";
    }
    
    return ""; // No error
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Validate phone number in real-time
    if (name === "phone") {
      const error = validatePhone(value);
      setError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    
    // Validate phone before submission
    const phoneValidationError = validatePhone(formData.phone);
    if (phoneValidationError) {
      setError(phoneValidationError);
      setLoading(false);
      return;
    }

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
            placeholder="Phone Number (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-full p-3 bg-transparent border rounded focus:outline-none transition ${
              error && error.includes("Phone") 
                ? "border-red-500 focus:border-red-500" 
                : "border-gray-600 focus:border-amber-400"
            }`}
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
