import React from "react";
import "./Category.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Category = () => {
  return (
    <section className="c-wrapper flexStart">
        {/* left */}
        
        <div className="r-head flexColStart paddings">
          <span className="orangeText">YOUR INVESTMENT AWAITS</span>
          <span className="primaryText">Explore top Strategy</span>
        </div>
        
        {/* right */}
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexEnd paddings">
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode-category">
                <div className="flexStart">
                  
                  <div className="flexColStart detail">
                    <div className="primaryText">
                      <MdCall size={25} />
                    </div>
                    <div className="primaryText">Track anytime, anywhere</div>
                    <div className="secondaryText">
                      Track & manage seamlessly with a real time index value,
                      inclusive of corp.
                    </div>
                  </div>
                </div>
              </div>
              {/* second mode-category  */}
              <div className="flexColCenter mode-category">
                <div className="flexStart">
                  
                  <div className="flexColStart detail">
                    <div className="primaryText">
                      <MdCall size={25} />
                    </div>
                    <div className="primaryText">Track anytime, anywhere</div>
                    <div className="secondaryText">
                      Track & manage seamlessly with a real time index value,
                      inclusive of corp.
                    </div>
                  </div>
                </div>
              </div>

              {/* third mode */}
              <div className="flexColCenter mode-category">
                <div className="flexStart">
                  
                  <div className="flexColStart detail">
                    <div className="primaryText">
                      <MdCall size={25} />
                    </div>
                    <div className="primaryText">Track anytime, anywhere</div>
                    <div className="secondaryText">
                      Track & manage seamlessly with a real time index value,
                      inclusive of corp.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
