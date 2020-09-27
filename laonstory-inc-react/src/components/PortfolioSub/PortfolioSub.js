import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Wrap from "../../components/Wrap/Wrap";
import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import Media from "../../components/Media/Media";
import PortfolioBanner from "../../components/Banner/PortpolioBanner";

import listIcon48 from "../image/list-48.png";
import listIcon24 from "../image/list-24.png";

const PortfolioSub = ({ ...props }) => {
  let pofolState = props.location.state;

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  

  useEffect(() => {
    if (pofolState === undefined) {
      alert("없는 값");
      props.history.push("/");
    } else {
      console.log(pofolState);
    }

    console.log(imgBox);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backLick = () => {
    document.location.href = "/";
    console.log("Asda");
  };
  const imgBox = pofolState.img.map((i, idx) => (
    <div className="imgBoxStyle" key={idx}>
      <img src={pofolState.img[idx]} alt={pofolState.img[idx]}></img>
    </div>
  ));
  const mImgBox = pofolState.mImg.map((i, idx) => (
    <div className="imgBoxStyle" key={idx}>
      <img src={pofolState.mImg[idx]} alt={pofolState.mImg[idx]}></img>
    </div>
  ));
  return (
    <Wrap>
      <PortfolioBanner>
        <img
          src={windowSize >= 480 ? pofolState.baneerImg : pofolState.mBannerImg}
          alt={pofolState.baneerImg}
        ></img>
      </PortfolioBanner>
      <Content>
        <PofolStateStyle>
          <div className="nameStyle">{pofolState.name}</div>
          <div>
            <p className="nhStyle">{pofolState.nh}</p>
            <p className="dateStyle">{pofolState.date}</p>
          </div>
          <div className="exStyle">{pofolState.additionEx}</div>
          {windowSize >= 480 ? imgBox : mImgBox}
          <div className="btnBox">
            <button onClick={() => backLick()}>
              <img src={listIcon48} alt={listIcon48} />
            </button>
          </div>
        </PofolStateStyle>
      </Content>
      <Media>
        <Footer />
      </Media>
    </Wrap>
  );
};

const PofolStateStyle = styled.div`
  width: 100%;
  height: 100%;

  .nameStyle {
    font-weight: bold;
    font-size: 3.3em;
  }
  div {
    margin: 30px 0 30px 0;

    .nhStyle {
      float: left;
      color: #999999;
      font-size: 1.1em;
    }
    .dateStyle {
      color: #999999;
      font-size: 1.1em;
    }
  }
  .exStyle {
    color: #000000;
    font-size: 1.2em;

    margin-bottom: 100px;
  }
  .imgBoxStyle {
    width: 100%;

    margin: 75px 0 75px 0;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }

  .btnBox {
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 48px;
      height: 48px;

      background: #ffffff;
      outline: none;
      border: 0;

      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 768px) {
    .nameStyle {
      font-size: 2em;
      margin: 0 0 0 0;
    }
    div {
      .nhStyle {
        font-size: 1em;
      }
      .dateStyle {
        font-size: 1em;
      }
    }
    .exStyle {
      font-size: 1.1em;
    }
  }

  @media only screen and (max-width: 480px) {
    .nameStyle {
      font-size: 1.1em;
      margin: 0 0 8px 0;
    }
    div {
      margin: 0 0 24px 0;
      .nhStyle {
        font-size: 0.9em;
      }
      .dateStyle {
        font-size: 0.9em;
      }
    }
    .exStyle {
      margin-bottom: 24px;

      font-size: 0.9em;
    }

    .imgBoxStyle {
      margin: 20px 0 20px 0;
    }
    .btnBox {
      margin: 0 0 0 0;
      height: 24x;
      button {
        width: 24px;
        height: 24px;

        img {
          display: none;
        }
        background-image: url(${listIcon24});
      }
    }
  }
`;

export default withRouter(PortfolioSub);
