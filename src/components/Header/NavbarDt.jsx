import React from "react";
import { Link } from "react-scroll";
import { FaMoon, FaPalette, FaSun } from "react-icons/fa";
import navData from "../../dataJsons/navLinks.json";
import { useTheme } from "../../context/ThemeContext";

const NavbarDt = () => {
  const { themes, changeLightDarkTheme, changePaletteTheme } = useTheme();
  const { lightDarkTheme, paletteTheme } = themes;
  console.log("themes.lightDarkTheme : ", lightDarkTheme);

  const toggleDarkMode = () => {
    changeLightDarkTheme(!lightDarkTheme);
  };
  const togglePaletteTheme = () => {
    if (lightDarkTheme) return;
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
        {lightDarkTheme ? <FaMoon /> : <FaSun />}
      </button>
      <button
        onClick={togglePaletteTheme}
        disabled={lightDarkTheme}
        className={lightDarkTheme ? "cursor-not-allowed" : "cursor-pointer"}
      >
        <FaPalette />
      </button>
    </div>
  );
};

export default NavbarDt;
