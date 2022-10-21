import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo.svg"

const Nav = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <div className={` ${navOpen === true ? "navOpen" : "closed"}`}>
      <nav
        className={`px-20 top-0 bg-transparent absolute top-0  flex w-full justify-between items-center sm-dev md-dev z-50`}
      >
        <div
          className="hamburger-menu p-4"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <img src="white_paper_assets/hamburger.svg" alt="" />
        </div>
        <div className="flex relative items-center">
          <div className="logo-items flex">
            <img
              src={Logo}
              className="logo-img"
              alt="lets build dao"
            />
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
      <ul className="mb-nav absolute  z-30 lg:hidden bg-[#27082B] pl-12 pt-12 h-fit top-[-35rem]  transition-all w-full">
        <Link to="/">
          <div className="nav-list-item text-[#F8F8F8] text-xl  md:text-3xl font-bold mb-20">
            Home
          </div>
        </Link>
        <Link to="/about">
          <div className="nav-list-item text-[#F8F8F8]  text-xl  md:text-3xl font-bold mb-20">
            About
          </div>
        </Link>
        <div className="nav-list-item text-[#F8F8F8]  text-xl  md:text-3xl font-bold mb-20">
          White Paper
        </div>
        <div className="nav-list-item text-[#F8F8F8]  text-xl  md:text-3xl font-bold mb-20">
          <button className="p-3 text-[#27082B] bg-[#e98bc7] md:py-[1.5rem] px-[2rem] rounded">
            Support
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
