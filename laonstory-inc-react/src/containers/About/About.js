import React from "react";

import Wrap from "../../components/Wrap/Wrap";
import Banner from "../../components/Banner/Banner";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import Footer from "../../components/Footer/Footer";
import Media from "../../components/Media/Media";

const About = () => {
  return (
    <Wrap>
      <Banner>
        <div className="backgroundStyle">
          <div className="aboutMainText">
            <p>LAONSTORY</p>
            <p>
              고객과의 신뢰를 최우선으로 생각하며, 정확한 Time Table에 의해
              작업이 진행됩니다. 생각을 현실로 만들어 드립니다.
            </p>
          </div>
        </div>
      </Banner>
      <AboutInfo />
      <Media>
        <Footer />
      </Media>
    </Wrap>
  );
};

export default About;
