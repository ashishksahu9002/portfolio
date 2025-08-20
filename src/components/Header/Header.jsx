import React from "react";
import NavbarDt from "./NavbarDt";
import NavbarMn from "./NavbarMn";

const Header = () => {
  return (
    <header className="fixed w-full flex justify-between items-center px-6 md:px-12 py-4 backdrop-blur-lg bg-opacity-70 z-50">
      <h1 className="text-xl md:text-2xl font-bold">Ashish.dev</h1>
      <nav className="flex justify-between items-center">
        <NavbarDt />
        <NavbarMn />
      </nav>
    </header>
  );
};

export default Header;
