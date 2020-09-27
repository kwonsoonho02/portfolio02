import React from "react";

import Wrap from "../../components/Wrap/Wrap";
import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";
import HiringSelect from "../../components/Select/HiringSelect";
import Footer from "../../components/Footer/Footer";
import Media from "../../components/Media/Media";

const Hiring = () => {
  return (
    <Wrap>
      <Banner>
        <div className="backgroundStyle">
          <p className="hiringMainText">Hiring</p>
        </div>
      </Banner>
      <Content>
        <HiringSelect />
      </Content>
      <Media>
        <Footer />
      </Media>
    </Wrap>
  );
};

export default Hiring;
