import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#151210] text-gray-400">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Sixth Sense Bar
          </h2>

          <p className="text-sm leading-relaxed">
            Experience premium drinks, live music, and unforgettable nightlife
            in the heart of Nagpur.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <div className="p-2 border border-gray-600 rounded-full hover:bg-amber-500 hover:text-black transition cursor-pointer">
              <FaFacebookF size={14} />
            </div>

            <div className="p-2 border border-gray-600 rounded-full hover:bg-amber-500 hover:text-black transition cursor-pointer">
              <FaInstagram size={14} />
            </div>

            <div className="p-2 border border-gray-600 rounded-full hover:bg-amber-500 hover:text-black transition cursor-pointer">
              <FaTwitter size={14} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-sm">

            <li>
              <Link to="/" onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-white transition">
              
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })}
                 className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/menu" onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })}
                 className="hover:text-white transition">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/reservation" onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })}
                 className="hover:text-white transition">
                Reservation
              </Link>
            </li>

            <li>
              <Link to="/ambiance" onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })}
                 className="hover:text-white transition">
                Ambiance
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })}
                 className="hover:text-white transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Private Parties</li>
            <li>Corporate Events</li>
            <li>Live Music</li>
            <li>Catering</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p>MG Road, Nagpur</p>
          <p className="mt-2">📞 0000-000-000</p>
          <p className="mt-2">Mon – Sun</p>
          <p>10 AM – 12 AM</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700 text-center py-5 text-xs">
        © 2026 Sixth Sense Bar. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;
