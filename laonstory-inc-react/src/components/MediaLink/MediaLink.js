import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import history from "../image/history-24.png";
import contact from "../image/contact-24.png";
import recruit from "../image/recruit-24.png";
import about from "../image/about-24.png";

const MediaLink = () => {
  return (
    <MediaLinkStyle>
      <div>
        <ul>
          <li>
            <img src={history} alt={"history"} />
          </li>
          <li>
            <FooterLink to="/history">HISTORY</FooterLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src={contact} alt={"contact"} />
          </li>
          <li>
            <FooterLink to="/about">ABOUT</FooterLink>
          </li>
        </ul>
      </div>
      <div>
        <div className="bigCStyle">
          <FooterLink className="Cstyle" to="/"></FooterLink>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <img src={recruit} alt={"recruit"} />
          </li>
          <li>
            <FooterLink to="/contact">CONTACT</FooterLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src={about} alt={"about"} />
          </li>
          <li>
            <FooterLink to="/hiring">Hiring</FooterLink>
          </li>
        </ul>
      </div>
    </MediaLinkStyle>
  );
};

const MediaLinkStyle = styled.div`
  width: 100%;
  height: 56px;

  background: #ffffff;
  display: none;

  box-shadow: 1px 1px 3.5px 1px #cccccc;

  position: fixed;
  bottom: 0;
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

        background: #1870a3;
        border-radius: 50%;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    display: block;
  }
`;

const FooterLink = styled(NavLink)`
  color: #666666;
`;

export default MediaLink;
