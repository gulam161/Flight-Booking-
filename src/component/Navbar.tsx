import React from "react";
import { RiFlightTakeoffLine } from "react-icons/ri";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="w-full p-4 bg-slate-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <a
          href="/"
          className="text-xl font-medium flex items-center text-indigo-600 italic"
        >
          <RiFlightTakeoffLine className="mr-2 text-2xl" />
          FlightAware
        </a>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded font-medium">
          login
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
