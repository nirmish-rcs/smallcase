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
import "./Expertise.css";
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
          <span className="orangeText">no need of expertise</span>

          <span className="primaryText">
            We're doing Research on your Behalf
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
