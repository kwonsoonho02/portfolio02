import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Wrap from "../../components/Wrap/Wrap";
import Banner from "../../components/Banner/Banner";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";
import Media from "../../components/Media/Media";
import MediaLink from "../../components/MediaLink/MediaLink";


const HiringSub = ({ ...props }) => {
  let recruitState = props.location.state;
  useEffect(() => {
    if (recruitState === undefined) {
      alert("없는 값");
      props.history.push("/hiring");
    } else {
      console.log(recruitState);
    }
  }, []);

  return (
    <Wrap>
      <Banner>
        <div className="backgroundStyleHiring">
          <p className="hiringMainText">Hiring</p>
        </div>
      </Banner>
      <Content>
        <HiringStyle>
          <img src={recruitState.hiringImg}></img>
        </HiringStyle>
      </Content>
      <Media>
        <Footer />
      </Media>
    </Wrap>
  );
};

const HiringStyle = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 200px;

  display: flex;
  justify-content: center;
  img{
    max-width: 100%;
  }
`;

export default withRouter(HiringSub);
