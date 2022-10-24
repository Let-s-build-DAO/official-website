import React from "react";
import "./mission.css";

const Missions = () => {
  return (
    <section className="my-12 h-full lg:mx-20">
      <div className="mission-wrap px-8 pb-6 text-white font-['SF Pro Display']">
        <div className="goal mb-12 flex flex-col justify-center items-center md:block lg:block">
          <h1 className="goal-title heading text-base md:text-[28px] lg:text-[28px] font-bold uppercase">
            About Let's build DAO
          </h1>
          <img
            src="white_paper_assets/line-dash.svg"
            alt="line dash"
            className="line-dash mb-4 w-[80px] md:w-[100px] lg:w-[100px] md:mt-2"
          />
          <p className="goal-text  md:text-left lg:text-left">
            Our mission is to create a friendly and collaborative learning
            platform for African creators, developers, and unique talents in the
            web3 revolution to link up and work together - thereby giving them
            the opportunity to develop themselves and build on their interest
          </p>
        </div>
        <div className="mission mb-12 flex flex-col justify-center items-center md:block lg:block">
          <h1 className="goal-title heading text-base md:text-[28px] lg:text-[28px] font-bold uppercase">
            Who we are
          </h1>
          <img
            src="white_paper_assets/line-dash.svg"
            alt="line dash"
            className="line-dash mb-4 w-[80px] md:w-[100px] lg:w-[100px] md:mt-2"
          />
          <p className="goal-text  md:text-left lg:text-left">
            We are a diverse team of developers, content creators, and community
            advocates keen to spread the word on the relevance of emerging
            technologies and the relevant use cases in our world. We try to work
            together with different web3 brands, foundations, and communities to
            make this happen.
          </p>
        </div>
        <div className="vision mb-12 flex flex-col justify-center items-center md:block lg:block">
          <h1 className="goal-title heading text-base md:text-[28px] lg:text-[28px] md:mb-2 font-bold uppercase">
            Values
          </h1>
          <img
            src="white_paper_assets/line-dash.svg"
            alt="line dash"
            className="line-dash w-[80px] md:w-[100px] lg:w-[100px] md:mb-4"
          />

          <ol className="goal-list pl-6 mt-2 md:mt-4 lg:mt-4 lg:text-left ">
            <div className="goal-list-item mb-[2rem]">
              <li className=" text-[25px] lg:text-[30px]">
                1. Prioritizing personal development
              </li>
              <p className=" text-[18px] lg:text-[20px]">
                We will touch on different subjects around blockchain through
                live webinars and free tutorial sessions. Our focus is getting
                our community members and volunteers to find their place and
                build on their personal profiles and soft skills.
              </p>
            </div>
            <div className="goal-list-item mb-[2rem]">
              <li className="text-[25px] lg:text-[30px]">2. Diversity</li>
              <p className=" text-[20px] lg:text-[20px]">
                We believe that the world is too big to focus on a particular
                set of Our team is made up of persons with different skill sets
                and specializations - this makes the community open to anyone
                that wants to tap into opportunities in specific niches like
                DE-FI- gaming - the metaverse.
              </p>
            </div>
            <div className="goal-list-item mb-[2rem]">
              <li className=" text-[25px] lg:text-[30px]">
                3. Getting stuff done
              </li>
              <p className=" text-[18px]  lg:text-[20px]">
                Developers should be able to build their own decentralized
                applications and smart contracts that could be used to solve
                real problems. We will host meetups hackathons and exclusive
                events for different purposes and cases.
              </p>
            </div>
            <div className="goal-list-item mb-[2rem]">
              <li className=" text-[20px] lg:text-[30px]">
                4. Transparency and a platform for equal contribution
              </li>
              <p className=" text-[18px] lg:text-[20px]">
                Education has never been a one-way exchange, we believe the best
                way to learn is by teaming up with others and building
                meaningful relationships. We want our platform to be open enough
                for ideas, changes, and meaningful contribution
              </p>
            </div>
            <div className="goal-list-item mb-[2rem]">
              <li className=" text-[20px] lg:text-[30px]">5. A safe web3</li>
              <p className=" text-[18px] lg:text-[20px]">
                By taking our topics seriously we plan to talk about delicate
                topics concerning finance, scams, and the blockchain space to
                keep our audience informed about what to do to be safe on the
                decentralized web.
              </p>
            </div>
            <div className="goal-list-item mb-[2rem]">
              <li className=" text-[20px] lg:text-[30px]">6. Partnerships</li>
              <p className=" text-[18px] justify lg:text-[20px]">
                Linked with different tech communities, we are proactive about
                creating the right connections both locally and to be able to
                fulfill our mission as an initiative that values growth and
                development in tech education.
              </p>
            </div>
          </ol>
        </div>
        <div className="">
          <h1 className="goal-title heading text-base md:text-[28px] lg:text-[28px] font-bold uppercase">
            Join us to build this community from this part of the world and
            beyond
          </h1>
          <p className="goal-text md:text-left lg:text-left">
            A safe web3 is something that everyone shout be part of despite
            thier areas of interest. You can be part of this movement by
            volunteering your time and experiences to the community
          </p>
        </div>
      </div>
    </section>
  );
};

export default Missions;
