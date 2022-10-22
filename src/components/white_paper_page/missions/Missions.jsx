import React from "react";
import "./mission.css";

const Missions = () => {
  return (
    <section className="my-12 h-full lg:mx-20">
      <div className="mission-wrap px-8 pb-6 text-white font-['SF Pro Display']">
        <div className="goal mb-12 flex flex-col justify-center items-center md:block lg:block">
          <h1 className="goal-title heading text-base md:text-[28px] lg:text-[28px] font-bold uppercase">
            Our Goal
          </h1>
          <img
            src="white_paper_assets/line-dash.svg"
            alt="line dash"
            className="line-dash mb-4 w-[80px] md:w-[100px] lg:w-[100px] md:mt-2"
          />
          <p className="goal-text text-center md:text-left lg:text-left">
            Onboard, Educate & Support Web3 Builders, Foster & Build Web3 Tools
            & Public Goods
          </p>
        </div>
        <div className="mission mb-12 flex flex-col justify-center items-center md:block lg:block">
          <h1 className="goal-title heading text-base md:text-[28px] lg:text-[28px] font-bold uppercase">
            Our MISSION
          </h1>
          <img
            src="white_paper_assets/line-dash.svg"
            alt="line dash"
            className="line-dash mb-4 w-[80px] md:w-[100px] lg:w-[100px] md:mt-2"
          />
          <p className="goal-text text-center md:text-left lg:text-left">
            Web3 Afrika exists to accelerate the education and opportunities of
            a new wave of builders and bring diversity into web3 conversations
            globally by fostering communities in Africa, Africans in diaspora,
            and persons of African descent from across the world.
          </p>
        </div>
        <div className="vision mb-12 flex flex-col justify-center items-center md:block lg:block">
          <h1 className="goal-title heading text-base md:text-[28px] lg:text-[28px] md:mb-2 font-bold uppercase">
            Our Vision
          </h1>
          <img
            src="white_paper_assets/line-dash.svg"
            alt="line dash"
            className="line-dash w-[80px] md:w-[100px] lg:w-[100px] md:mb-4"
          />

          <ul className="goal-list pl-6 mt-2 md:mt-4 lg:mt-4 lg:text-left text-center">
            <li className="goal-list-item mb-[6px]">
              Access: to provide access to our members that would not otherwise
              be available. Access to education, funding, community, networks
            </li>
            <li className="goal-list-item mb-[6px]">
              Transparency: open source everything, conversations in public,
              document and shared journey
            </li>
            <li className="goal-list-item mb-[6px]">
              {" "}
              Diversity and Inclusion: to truly build a safe space for our
              members regardless of their differences in age, ethnicity, gender,
              gender identity or expression, language differences, nationality
              or national origin, family or marital status, physical, mental and
              development abilities, race, religion or belief, sexual
              orientation, skin color, social or economic class, education, work
              and behavioral styles, political affiliation, military service,
              caste, and other characteristics that make our members unique
            </li>
            <li className="goal-list-item mb-[6px]">
              {" "}
              Responsibility: as a self-governed community, we rely on members
              to be personally responsible for their actions and commitments to
              the community
            </li>
            <li className="goal-list-item mb-[6px]">
              {" "}
              Kindness and Empathy: we know that we live in a complex,
              stressful, and diverse world and go out of our way to make
              people’s lives and days better through our interactions
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Missions;
