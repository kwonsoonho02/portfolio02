import React from "react";

import Wrap from "../../components/Wrap/Wrap";
import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";
import PofolSelect from "../../components/Select/PofolSelect";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  return (
    <Wrap>
      <Banner>
        <div className="backgroundStyle">
          <p className="pofolMainText">PORTFOLIO</p>
        </div>
      </Banner>
      <Content>
        <PofolSelect />
      </Content>
      <Footer />
    </Wrap>
  );
};

export default Portfolio;
