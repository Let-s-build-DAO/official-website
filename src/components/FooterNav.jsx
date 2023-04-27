import React from "react";

function FooterNav() {
  return (
    <footer className="bg-[#270a2a] px-12 lg:pb-0 pt-0 md:flex lg:flex md:justify-between lg:justify-between w-full">
      <div className="flex my-auto p-2 justify-center">
        <img
          src="white_paper_assets/logo.svg"
          alt="digiBloc"
          className="footer-logo  w-[150px] z-[10]"
        />
      </div>
      <ul className="footer-list flex items-center justify-center py-6">
        <li className="footer-list-item mr-8 md:mr-4 lg:mr-12 flex items-center">
          <a href="https://twitter.com/letsbuild_dao" className="footer-list-item-link">
            <img
              src="white_paper_assets/twitter-logo.svg"
              alt=""
              className="footer-list-item-link-icon w-[35px] md:w-[25px] lg:w-[25px]"
            />
          </a>
        </li>
        {/* <li className="footer-list-item mr-8 md:mr-4 lg:mr-12  flex items-center">
          <a href="https://ig.com" className="footer-list-item-link">
            <img
              src="white_paper_assets/ig-logo.svg"
              alt=""
              className="footer-list-item-link-icon w-[35px] md:w-[25px] lg:w-[25px]"
            />
          </a>
        </li>
        <li className="footer-list-item mr-8 md:mr-4 lg:mr-12 flex items-center">
          <a href="https://fb.com" className="footer-list-item-link">
            <img
              src="white_paper_assets/fb-logo.svg"
              alt=""
              className="footer-list-item-link-icon w-[35px] md:w-[25px] lg:w-[25px]"
            />
          </a>
        </li> */}
        <li className="footer-list-item mr-8 md:mr-4 lg:mr-12 flex items-center">
          <a href="mailto:letsbuilddoa@gmail.com" className="footer-list-item-link">
            <img
              src="white_paper_assets/mail-logo.svg"
              alt=""
              className="footer-list-item-link-icon w-[35px] md:w-[25px] lg:w-[25px]"
            />
          </a>
        </li>
        <li className="footer-list-item mr-0 md:mr-4 lg:mr-4 flex items-center">
          <a href="https://discord.com/invite/tn7tc4GK" className="footer-list-item-link">
            <img
              src="white_paper_assets/discord-logo.svg"
              alt=""
              className="footer-list-item-link-icon w-[35px] md:w-[25px] lg:w-[25px]"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default FooterNav;
