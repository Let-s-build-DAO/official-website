import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero-section w-full h-full flex  justify-center text-[#F8F8F8]">
      <div className="hero w-[900px] my-52">
        <h1 className="text-center heading font-bold lg:text-7xl text-4xl">Let’s Build, Connect, Collaborate</h1>
        <h3 className="w-1/2 mx-auto">
          At DAO we build and share the knowledge about web3 technology within
          Africa and across the world
        </h3>
        <div className="hero-btns w-80 flex mt-[2rem] mx-auto">
          <img
            className="github-icon mr-[1rem]"
            src="white_paper_assets/github.svg"
            alt="github"
          />
          <button className="btn btn-primary p-2">View our white paper</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
