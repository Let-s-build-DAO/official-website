import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero-section w-full h-full flex  justify-center text-[#F8F8F8]">
      <div className="hero w-[500px] mt-[4rem]">
        <h1 className="hero-txt">Let’s Build, Connect, Collaborate</h1>
        <h3>
          At DAO we build and share the knowledge about web3 technology within
          Africa and across the world
        </h3>
        <div className="hero-btns flex mt-[2rem]">
          <img
            className="github-icon mr-[1rem]"
            src="white_paper_assets/github.svg"
            alt="github"
          />
          <button className="btn btn-primary">View our white paper</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
