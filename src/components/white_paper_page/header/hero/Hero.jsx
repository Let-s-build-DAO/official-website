import React from "react";
import "./hero.css";
import Discord from '../../../../assets/Discord.svg';

const Hero = () => {
  return (
    <section className="hero-section w-full h-full flex  justify-center text-[#F8F8F8]">
      <div className="hero w-[900px] mt-52 mb-44">
        <h1 className="text-center heading lg:text-7xl text-4xl md:text-5xl">
          Let’s Build, Connect, Collaborate
        </h1>
        <h3 className="lg:w-1/2 md:w-[650px] custom-font-h2 mx-auto text-center font-medium text-lg">
          Join us to build a web3 community from this part of the world and
          beyond.
        </h3>
        <a href="https://discord.gg/tn7tc4GK" target="blank">
          <button className="rounded-full lg:p-4 p-2 btn w-72 lg:mx-auto my-2 mx-auto flex justify-evenly">
            <img className="w-8 h-8" src={Discord} alt="" />
            <div className="my-auto"> Join our communlty</div>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
