import React from "react";
import "./sponsor.css";

const Sponsors = () => {
  return (
    <section
      className="mt-[4rem] h-[60vh] sponsor-wrap"
      style={{
        backgroundImage: `url("white_paper_assets/sponsors.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="sponsors">
        <div className="sponsors__title mb-[2rem] flex flex-col items-center justify-center">
          <h2 className="text-[#fff] text-[2.5rem] font-bold uppercase">
            Join our Sponsors
          </h2>
          <img
            src="white_paper_assets/line-dash.svg"
            alt=""
            className="sponsors-img"
          />
        </div>
        <div className="sponsors-btn">
          <button className="sponsors-btn__btn p-2">
            Become a Sponsor/Partner{" "}
          </button>
          <img
            src="white_paper_assets/arrow.svg"
            alt=""
            className="ml-[4px] w-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
