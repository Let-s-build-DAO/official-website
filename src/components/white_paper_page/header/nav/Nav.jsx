import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="px-20 top-0 absolute flex w-full justify-between items-center sm-dev md-dev">
      <div className="hamburger-menu ">
        <img src="white_paper_assets/hamburger.svg" alt="" />
      </div>
      <div className="flex items-center">
        <div className="logo-items flex">
          <img src="white_paper_assets/logo.svg" className='logo-img' alt="lets build dao" />
          <img
            src="white_paper_assets/divider.svg"
            alt=""
            className="divider"
          />
        </div>
        <ul className="nav-list text-white flex lg:ml-[9rem]">
          <Link to="/">
            <div className="nav-list-item mr-[3rem] font-bold">Home</div>
          </Link>
          <Link to="/about">
          <div className="nav-list-item mr-[3rem] font-bold">About</div>
          </Link>
          <div className="nav-list-item font-bold">Blog</div>
        </ul>
      </div>
      <button className="support-btn p-3">Support</button>
    </nav>
  );
};

export default Nav;
