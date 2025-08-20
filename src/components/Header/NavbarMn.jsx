import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaPalette, FaSun, FaTimes } from "react-icons/fa";
import navData from "../../dataJsons/navLinks.json";
import toggleDarkMode from "../../utils/toggleDarkMode";
import changeTheme from "../../utils/changeTheme";

const NavbarMn = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white/90 dark:bg-slate-800/90 blakdrop-blur-lg p-6 flex flex-col items-center gap-4 text-lg z-40">
          {navData.navLinks.map((sec) => (
            <Link
              key={sec}
              to={sec}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer hover:underline"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          ))}
          <div className="flex gap-6 mt-4">
            <button onClick={toggleDarkMode}>
              {" "}
              <FaSun />{" "}
            </button>
            <button onClick={changeTheme}>
              {" "}
              <FaPalette />{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMn;
