import React from 'react';
import Header from '../components/white_paper_page/header/Header';
import Missions from '../components/white_paper_page/missions/Missions';
import Hero from "../components//white_paper_page/header/hero/Hero";

import Sponsors from '../components/white_paper_page/sponsors/Sponsors';
function About(props) {
  return (
    <div>
      <div
        className={`nav w-full`}
        style={{ backgroundImage: `url("white_paper_assets/vector-bg.svg")` }}>
        <Hero />
      </div>
      <Missions />
      <Sponsors />
    </div>  
  );
}

export default About;