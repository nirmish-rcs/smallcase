import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter  hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <h1>
              Empower Your
              <br />
              Investment with
              <br />
              ML & AI driven
              <br />
              Strategies
            </h1>
          </div>
          <div className="flexColStart des">
            <span className="secondaryText">
              We always make our customer happy by providing
            </span>
            <span className="secondaryText">as many choices as possible</span>
          </div>

          <div className="flexCenter btn-gap btn-margin ">
            {/* <HiLocationMarker color="var(--blue)" size={25} /> */}
            {/* <input type="text" placeholder="Search for the location"/> */}
            <button className="button btn-radius ">Explore Strategies</button>
            <button className="button btn-radius">Explore Strategies</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8850} end={8876} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp start={5360} end={5468} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColStart stat">
              <span>
                <CountUp end={7} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./group-5837.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
