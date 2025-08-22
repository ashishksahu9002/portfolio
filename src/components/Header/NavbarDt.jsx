import React from "react";
import { Link } from "react-scroll";
import { FaMoon, FaPalette, FaSun } from "react-icons/fa";
import navData from "../../dataJsons/navLinks.json";
import { useTheme } from "../../context/ThemeContext";

const NavbarDt = () => {
  const { themes, changeLightDarkTheme, changePaletteTheme } = useTheme();

  const toggleDarkMode = () => {
    changeLightDarkTheme(!themes.lightDarkTheme);
  };
  const togglePaletteTheme = () => {
    if (themes.lightDarkTheme) return;
    const tempThemes = ["modern", "neon", "aesthetic"];
    const next =
      tempThemes[
        (tempThemes.indexOf(themes.paletteTheme) + 1) % tempThemes.length
      ];
    console.log(next);
    changePaletteTheme(next);
  };

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
        {themes.lightDarkTheme ? <FaMoon /> : <FaSun />}
      </button>
      <button onClick={togglePaletteTheme}>
        <FaPalette />
      </button>
    </div>
  );
};

export default NavbarDt;
