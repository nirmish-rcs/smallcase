import React, { useState } from "react";
import CountUp from "react-countup";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../../utils/accordion";
import "./Value.css";
import {
  MdOutlineArrowDropDown,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./group-9239.jpg" alt="" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">MORE CONTROL</span>

          <span className="primaryText">
            You have full authority to by and sell stocks
          </span>

          <span className="secondaryText">
            We always ready to help by providijng the best services for you.
            <br />
            We beleive a good blace to live can make your life better
          </span>

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
      </div>
    </section>
  );
};

export default Value;
