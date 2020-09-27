import React from "react";
import styled from "styled-components";

const Media = ({ children }) => {
  return <MediaQuery>{children}</MediaQuery>;
};

const MediaQuery = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export default Media;
