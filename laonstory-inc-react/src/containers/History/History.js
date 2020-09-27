import React from "react";

import Wrap from "../../components/Wrap/Wrap";
import Banner from "../../components/Banner/Banner";

import Footer from "../../components/Footer/Footer";
import Media from "../../components/Media/Media";
import HistoryInfo from "../../components/HistoryInfo/HistoryInfo";

const History = () => {
  return (
    <Wrap>
      <Banner>
        <div className="historyBackgroundStyle">
          <p className="historyText">
            LAONSTORY
            <br /> HISTORY
          </p>
        </div>
      </Banner>
      <HistoryInfo />
      <Media>
        <Footer />
      </Media>
    </Wrap>
  );
};

export default History;
