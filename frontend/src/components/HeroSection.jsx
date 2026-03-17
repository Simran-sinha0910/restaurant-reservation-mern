import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Taste of South India</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/idli.png.jpg" alt="Soft idlis with sambar and chutney" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Spiced</h1>
                <h1 className="title dishes_title">Traditions</h1>
                <img src="./threelines.svg" alt="Design Accent" />
              </div>
              <img className="logo" src="logo.svg" alt="Anna Poorna Bhavan Logo" />
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="imageBox">
            <img src="/biryani.png.jpg" alt="Flavourful South Indian biryani" />
          </div>
          <h1 className="title dishes_title">From Idli to Biryani</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
