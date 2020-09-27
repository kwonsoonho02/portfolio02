import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyle>
      <div className="HeaderLogo">
        <h1>
          <NavLinkStyle to="/">LAON STORY</NavLinkStyle>
        </h1>
      </div>
      <div className="nav">
        <div>
          <div>
            <NavLinkStyle to="/about">About</NavLinkStyle>
          </div>
          <div>
            <NavLinkStyle to="/">Portfolio</NavLinkStyle>
          </div>
          <div>
            <NavLinkStyle to="/history">History</NavLinkStyle>
          </div>
          <div>
            <NavLinkStyle to="/contact">Contact</NavLinkStyle>
          </div>
          <div>
            <NavLinkStyle to="/hiring">Hiring</NavLinkStyle>
          </div>
        </div>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  height: 140px;

  background: #ffffff;

  .HeaderLogo {
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      color: #333333;
      font-weight: bold;
      font-size: 1.9em;
    }
  }

  .nav {
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 426px;

      display: flex;
      justify-content: center;
      align-items: center;
      div {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    height: 100px;
    .HeaderLogo {
      height: 50px;
    }
    .nav {
      height: 50px;
    }
  }

  @media only screen and (max-width: 480px) {
    height: 50px;
    .HeaderLogo {
      height: 50px;
      h1 {
        font-size: 1.45em;
      }
    }
    .nav {
      display: none;
    }
  }
`;

const NavLinkStyle = styled(NavLink)`
  color: #333333;
  font-size: 1.1em;
`;

export default Header;
