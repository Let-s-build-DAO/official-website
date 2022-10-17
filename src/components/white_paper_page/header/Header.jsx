import React from "react";
import Nav from "./nav/Nav";
import Hero from "./hero/Hero";

const Header = () => {
  return (
    <div
      className={`nav h-[80vh] w-full`}
      style={{ backgroundImage: `url("white_paper_assets/vector-bg.svg")` }}
    >
      <Nav />
      <Hero />
    </div>
  );
};

export default Header;
