import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/logo.svg";
const Nav = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const handleClick = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className={` ${navOpen === true ? "navOpen" : "closed"}`}>
      <nav
        className={`px-20 top-0 bg-transparent absolute top-0  flex w-full justify-between items-center sm-dev md-dev z-50`}
      >
        <div
          className="hamburger-menu"
          onClick={() => {
            handleClick();
          }}
        >
          <img src="white_paper_assets/hamburger.svg" alt="" />
        </div>
        <div className="flex relative items-center">
          <div className="logo-items flex">
            <img src={Logo} className="logo-img" alt="lets build dao" />
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
        <div>
          <a href="https://discord.gg/M9jx85nJkN" target="blank">
            <button className="support-btn p-3">Join Us</button>
          </a>
          <Link to={"/contact"} className="ml-6">
            <button className="support-btn p-3">Contact</button>
          </Link>
        </div>
      </nav>
      <ul className={navOpen ? "h-full mb-nav absolute z-30 lg:hidden bg-[#27082B] pl-8 pt-12 top-[-35rem]  transition-all w-full" : "mb-nav absolute z-30 lg:hidden bg-[#27082B] pl-8 pt-12 top-[-35rem]  transition-all w-full"}>
        <div
          className="nav-list-item text-[#F8F8F8] text-xl md:text-3xl mb-10"
          onClick={() => {
            handleClick();
          }}
        >
          <Link to="/">Home</Link>
        </div>
        {/* <div
          className="nav-list-item text-[#F8F8F8]  text-xl  md:text-3xl mb-10"
          onClick={() => {
            handleClick();
          }}
        >
          <Link to="/about">About</Link>
        </div> */}
        <div
          className="nav-list-item text-[#F8F8F8]  text-xl  md:text-3xl mb-10 cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        >
          <Link to={"/about"}>
            White Paper
          </Link>
        </div>
        <div className="nav-list-item text-[#F8F8F8]  text-xl  md:text-3xl font-bold mb-10">
          <a href="https://discord.gg/M9jx85nJkN" target="blank">
            <button
              className="p-3 text-[#27082B] bg-[#e98bc7] md:py-[1.5rem] px-[2rem] rounded"
              onClick={() => {
                handleClick();
              }}
            >
              Join Us
            </button>
          </a>
          <Link to={"/contact"} className="ml-6">
            <button
              className="p-3 text-[#27082B] bg-[#e98bc7] md:py-[1.5rem] px-[2rem] rounded"
              onClick={() => {
                handleClick();
              }}
            >
              Contact
            </button>
          </Link>

        </div>
      </ul>
    </div>
  );
};

export default Nav;
