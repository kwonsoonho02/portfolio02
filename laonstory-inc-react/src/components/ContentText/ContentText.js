import React from "react";
import styled from "styled-components";

const ContentText = ({ children }) => {
  return (
    <ContentTextStyle>
      <div>{children}</div>
    </ContentTextStyle>
  );
};

const ContentTextStyle = styled.div`
  width: 100%;
  height: 60px;

  position: relative;

  div {
    width: 100%;
    height: 60px;
    position: relative;
    h2 {
      font-size: 2.45em;
      font-weight: 500;
      color: #333333;

      float: left;
      position: relative;
    }
  }

  @media only screen and (max-width: 480px) {
    float: left;
    width: 160px;

    margin-bottom: 0;

    font-size: 0.56em;
  }
`;

export default ContentText;
