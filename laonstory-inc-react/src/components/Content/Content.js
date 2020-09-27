import React from "react";
import styled from "styled-components";

const Content = ({ children }) => {
  return (
    <ContentStyle>
      <div className="contentBox">{children}</div>
    </ContentStyle>
  );
};

const ContentStyle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 60px 0 60px;

  position: relative;
  .contentBox {
    width: calc(100% - 300px);
    height: calc(100% - 200px);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1400px) {
    .contentBox {
      width: calc(100% - 100px);
    }
  }
  @media only screen and (max-width: 1100px) {
    .contentBox {
      width: calc(100% - 100px);
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 46px 0 46px;
    .contentBox {
      width: calc(100% - 96px);
    }
  }
  @media only screen and (max-width: 480px) {
    margin: 24px 0 56px;
    .contentBox {
      width: calc(100% - 32px);
    }
  }
`;

export default Content;
