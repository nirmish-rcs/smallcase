import React from "react";
import "./Contact.css";
import CountUp from "react-countup";

import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">SEMI ACTIVE INVOLVEMENT</span>
          <span className="primaryText">Your all time involvement is not necessary for growth </span>
          

          <div className="flexCenter stats-value ">
            <div className="flexColStart stat round-border ">
              <span>
                <CountUp start={0} end={5} duration={4} />
                <span>k+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>
            <div className="flexColStart stat round-border">
              <span>
                <CountUp start={0} end={120} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Investments</span>
            </div>
            
          </div>


        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./group-9238.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
