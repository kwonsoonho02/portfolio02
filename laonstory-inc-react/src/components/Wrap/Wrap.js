import React from "react";
import styled from "styled-components";

const Wrap = ({ children }) => {
  return <WrapStyle>{children}</WrapStyle>;
};

const WrapStyle = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

export default Wrap;
