import React from "react";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <div
      className=" h-[70vh]"
      style={{
        backgroundImage: `url("white_paper_assets/vector-bg.svg")`,
      }}
    >
      <Nav />
    </div>
  );
};

export default Header;
