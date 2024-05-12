import React from "react";
import "./Tips.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">EVERYTHING YOU NEED TO INVEST </span>
          <span className="primaryText">
            Simple, quick & delightful investing for you
          </span>
          {/* <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span> */}

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Track anytime, anywhere</span>
                    <span className="secondaryText">
                      Track & manage seamlessly with a real time index value,
                      inclusive of corp.
                    </span>
                  </div>
                </div>
                {/* <div className="flexCenter button">Call Now</div> */}
              </div>
              {/* second mode  */}
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">7016915420</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div> */}
            </div>

            {/* second row */}
            <div className="flexStart row">
              {/* third mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Invest regularly</span>
                    <span className="secondaryText">
                      Place orders for up to 50 stocks in 1 click as a
                      Equitycase and save time
                    </span>
                  </div>
                </div>
                {/* <div className="flexCenter button">Video Call Now</div> */}
              </div>
              {/* second mode  */}
              {/* <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">7016915420</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div> */}
            </div>

            {/* third row */}
            <div className="flexStart row">
              {/* first mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Invest regularly</span>
                    <span className="secondaryText">
                      Invest in a disciplined manner by starting on your
                      Equitycase for every week,
                    </span>
                  </div>
                </div>
                {/* <div className="flexCenter button">Call Now</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./group-18371.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
