import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
     { name: "Menu", path: "/menu" },
     { name: "Reservation", path: "/reservation" },
     { name: "Ambiance", path: "/ambiance" },
     { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">

        {/* LOGO */}
        <Link
          to="/"
          className="text-xl font-bold tracking-widest hover:text-amber-400 transition"
        >
          SIXTH SENSE
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-sm uppercase">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-amber-400 transition ${
                location.pathname === item.path
                  ? "text-amber-400"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black text-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 py-6 uppercase text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`hover:text-amber-400 transition ${
                location.pathname === item.path
                  ? "text-amber-400"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
