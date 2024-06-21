import React from "react";
import "./About.css";
import camera2 from "../../assets/camera2.png";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import premiere_pro from "../../assets/premiere_pro.png";
import illustrator from "../../assets/illustrator.png";
import photoshop from "../../assets/photoshop.png";
import after from "../../assets/after.png";
import davinci from "../../assets/davinci.png";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-title">
          <h1 className="title">
            About <span>Us</span>
          </h1>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h2>
              Founded in <span>2023</span>, Aryasish Cine Flicks has quickly
              established itself as a premier cinematography company dedicated
              to capturing life's most precious moments with unparalleled
              excellence.
            </h2>

            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="counter">
                {counterOn && (
                  <CountUp start={0} end={25} duration={5} delay={0.5} />
                )}
                + Projects completed
              </h1>
            </ScrollTrigger>

            <h1 className="software" >Softwares we use: </h1>
            <div className="software-logos">
              <img src={premiere_pro} width="60px" alt="" />
              <img src={photoshop} width="60px" alt="" />
              <img src={after} width="60px" alt="" />
              <img src={davinci} width="60px" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
