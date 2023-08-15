import React, { useState, useEffect } from "react";

// Import Component
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={` ${
        bg ? "bg-white h-20" : "h-24"
      } flex items-center fixed bg-white text-primary top-0 w-full z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <a href="/">
          <h1 className="text-4xl text-primary">Salon Hewan</h1>
        </a>
        {/* nav */}
        <div className="lg:block hidden">
          <Nav />
        </div>
        {/* socials */}
        <div className="lg:block hidden">
        <button className="btn btn-md rounded-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              <a href="/booking">
                Memesan
              </a>
        </button>
        </div>
        {/* NavMobile */}
        <div className="lg:hidden ">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
