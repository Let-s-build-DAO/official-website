import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <nav className="containe relative flex w-full justify-between items-center sm-dev md-dev">
      <div className="hamburger-menu ">
        <img src="white_paper_assets/hamburger.svg" alt="" />
      </div>
      <div className="flex items-center">
        <div className="logo-items flex lg:ml-[4rem]">
          <img src="white_paper_assets/logo.svg" className='logo-img' alt="lets build dao" />
          <img
            src="white_paper_assets/divider.svg"
            alt=""
            className="divider"
          />
        </div>
        <ul className="nav-list text-white flex lg:ml-[9rem]">
          <div className="nav-list-item mr-[3rem] font-bold">Home</div>
          <div className="nav-list-item mr-[3rem] font-bold">Contact</div>
          <div className="nav-list-item mr-[3rem] font-bold">White Paper</div>
          <div className="nav-list-item font-bold">Blog</div>
        </ul>
      </div>
      <button className="support-btn">Support</button>
    </nav>
  );
};

export default Nav;
