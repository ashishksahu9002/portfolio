import React from "react";
import { Link } from "react-scroll";
import { FaPalette, FaSun } from "react-icons/fa";
import navData from "../../dataJsons/navLinks.json";
import toggleDarkMode from "../../utils/toggleDarkMode";
import changeTheme from "../../utils/changeTheme";

const NavbarDt = () => {
  return (
    <div className="hidden lg:flex gap-6 items-center text-sm md:text-base">
      {navData.navLinks.map((sec) => (
        <Link
          key={sec}
          to={sec}
          smooth={true}
          duration={500}
          className="cursor-pointer hover:underline"
        >
          {sec.charAt(0).toUpperCase() + sec.slice(1)}
        </Link>
      ))}
      <button onClick={toggleDarkMode}>
        <FaSun />
      </button>
      <button onClick={changeTheme}>
        <FaPalette />
      </button>
    </div>
  );
};

export default NavbarDt;
