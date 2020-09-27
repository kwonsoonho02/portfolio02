import React from "react";
import styled from "styled-components";

import facebookIcon24 from "../image/facebook-24.png";
import twitterIcon24 from "../image/twitter-24.png";
import instagramIcon24 from "../image/instagram-24.png";

import facebookIcon48 from "../image/facebook-48.png";
import twitterIcon48 from "../image/twitter-48.png";
import instagramIcon48 from "../image/instagram-48.png";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footerContent">
        <div className="bannerStyle">
          <div className="footerBanner">
            <div>
              <p>
                <FooterLink to="/about">ABOUT</FooterLink>
              </p>
            </div>
            <div>
              <p>
                <FooterLink to="/" onClick={window.scrollTo(0, 0)}>
                  PORTFOLIO
                </FooterLink>
              </p>
            </div>
            <div>
              <p>
                <FooterLink to="/history">HISTORY</FooterLink>
              </p>
            </div>
            <div>
              <p>
                <FooterLink to="/contact">CONTACT</FooterLink>
              </p>
            </div>
            <div>
              <p>
                <FooterLink to="/hiring">HIRING</FooterLink>
              </p>
            </div>
          </div>
          <div className="sns">
            <div>
              <div>
                <img src={facebookIcon48} alt={facebookIcon48} />
              </div>
            </div>
            <div>
              <div>
                <img src={twitterIcon48} alt={twitterIcon48} />
              </div>
            </div>
            <div>
              <div>
                <img src={instagramIcon48} alt={instagramIcon48} />
              </div>
            </div>
          </div>
        </div>
        <div className="companyInfo">
          <div className="preBox">
            <div className="topPre">
              <p>TEL. 070-7010-7108</p>
              <p>FAX. 050-4420-1198</p>
            </div>
            <div className="underPre">
              <p>E-mail. laonstory@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copy">
          <div>Copyright ⓒ 2020 LAONSTORY. All rights reserved.</div>
        </div>
      </div>
    </FooterStyle>
  );
};

const FooterLink = styled(NavLink)`
  color: #333333;
`;
const FooterStyle = styled.footer`
  width: 100%;
  height: 280px;

  background: #f7f7f7;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  .mediaLink {
    width: 100%;
    height: 56px;

    background: #ffffff;
    display: none;

    box-shadow: 1px 1px 3.5px 1px #cccccc;

    div {
      width: calc(100% / 5);
      height: 100%;

      float: left;

      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;
      ul {
        position: relative;
        li:nth-child(1) {
          width: 24px;
          height: 24px;

          background: #c4c4c4;
          border-radius: 50%;
          margin: 0 auto;
        }
        li:nth-child(2) {
          font-size: 0.6em;
          color: #666666;
        }
      }
      .bigCStyle {
        width: 56px;
        height: 56px;

        background: #ffffff;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 10%;
        transform: translateY(-10%);

        box-shadow: 1px 1px 3.5px 1px #cccccc;
        .Cstyle {
          width: 36px;
          height: 36px;

          background: #c4c4c4;
          border-radius: 50%;
        }
      }
    }
  }

  .footerContent {
    width: calc(100% - 400px);
    height: calc(100% - 80px);

    .bannerStyle {
      width: 100%;
      height: 50px;

      position: relative;
      display: flex;
      justify-content: space-between;
      .footerBanner {
        height: 25px;
        div {
          float: left;
          margin-right: 40px;
          p {
            font-size: 0.9em;
            font-weight: bold;
          }
        }
      }
      .sns {
        div {
          float: left;
          div {
            width: 48px;
            height: 48px;

            background: #dddddd;
            border-radius: 50%;

            margin: 0 6px 0 6px;
            float: left;
          }
        }
      }
    }

    .companyInfo {
      width: 560px;
      height: 20px;

      .preBox {
        height: 100%;
        .topPre {
          float: left;
        }
        .underPre {
          float: left;
        }
        p {
          height: 100%;

          font-size: 0.9em;
          color: #000000;

          display: block;
          float: left;
          margin-right: 40px;
        }
      }
    }

    .copy {
      margin-top: 40px;
      font-size: 0.9em;
      div {
        width: 330px;
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    .footerContent {
      .bannerStyle {
        height: 110px;

        display: block;

        position: relative;
        .footerBanner {
          width: 513px;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          div {
            margin-right: 0;
          }
        }
        .sns {
          position: absolute;
          left: 50%;
          top: 80%;
          transform: translate(-50%, -80%);
        }
      }
      .companyInfo {
        margin: 0 auto;

        display: flex;
        justify-content: center;
        .preBox {
          p {
            margin: 0 20px 0 20px;
          }
        }
      }
      .copy {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 15px;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .footerContent {
      width: calc(100% - 200px);
      .bannerStyle {
        .footerBanner {
          float: none;
          div {
            display: flex;
            justify-content: center;
          }
        }
      }
      .companyInfo {
        width: 100%;
        height: 50px;

        .preBox {
          width: 250px;

          display: block;
          position: relative;
          .topPre {
            width: 100%;
          }
          .underPre {
            width: 100%;

            position: absolute;
            left: 50%;
            top: 100%;
            transform: translate(-50%, -100%);

            display: flex;
            justify-content: center;
          }
          p {
            font-size: 0.8em;
            margin: 0 5.5px 0 5.5px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: 240px;
    .footerContent {
      width: calc(100% - 100px);
      height: calc(100% - 60px);
      .bannerStyle {
        height: 90px;
        .sns {
          div {
            div {
              width: 24px;
              height: 24px;

              margin: 0 8px 0 8px;
              img {
                display: none;
              }
            }
            &:nth-child(1) div {
              background-image: url(${facebookIcon24});
            }
            &:nth-child(2) div {
              background-image: url(${twitterIcon24});
            }
            &:nth-child(3) div {
              background-image: url(${instagramIcon24});
            }
          }
        }
      }
    }
    .companyInfo {
      width: 100%;
      height: 50px;

      display: flex;
      justify-content: center;
      .preBox {
        width: 350px;
        height: 100%;

        display: block;
        position: relative;
        .topPre {
          width: 100%;
        }
        .underPre {
          position: absolute;
          left: 50%;
          top: 100%;
          transform: translate(-50%, -100%);
        }
        pre {
          height: 20px;
        }
      }
    }
    .copy {
      div {
        font-size: 0.7em;
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 640px) {
    .footerContent {
      width: calc(100% - 10px);
    }
  }
  @media only screen and (max-width: 540px) {
    .footerContent {
      width: calc(100% - 10px);
      .bannerStyle {
        .footerBanner {
          width: 450px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    height: 200px;

    margin-bottom: 60px;
    .footerContent {
      height: 150px;
      .bannerStyle {
        height: 60px;

        position: relative;
        .footerBanner {
          display: none;
        }
        .sns {
          position: absolute;
          left: 50%;
          top: 30%;
          transform: translate(-50%, -30%);
        }
      }
      .copy {
        margin-top: 16px;
        div {
          text-align: center;
        }
      }
    }
  }
`;

export default Footer;
