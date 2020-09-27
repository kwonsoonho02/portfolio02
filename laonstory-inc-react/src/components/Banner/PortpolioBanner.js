import React from "react";
import styled from "styled-components";

const PortfolioBanner = ({ children }) => {
  return <PofolBannerStyle>{children}</PofolBannerStyle>;
};

const PofolBannerStyle = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
  }
`;

export default PortfolioBanner;
