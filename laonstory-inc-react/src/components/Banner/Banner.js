import React from "react";
import styled from "styled-components";

const Banner = ({ children }) => {
  return <NavStyle>{children}</NavStyle>;
};

const NavStyle = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

  position: relative;

  display: flex;
  & > div {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .historyBackgroundStyle {
    background: linear-gradient(
      90deg,
      #c73268 0%,
      #3388ee 99.99%,
      #55cbf2 100%
    );
    transform: matrix(-1, 0, 0, 1, 0, 0);
    p {
      width: 290px;
      height: 144px;

      font-weight: 500;
      font-size: 50px;
      line-height: 72px;

      text-align: center;
      color: #ffffff;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }

  .backgroundStyleHiring {
    background: linear-gradient(
      90deg,
      #c73268 0%,
      #3388ee 99.99%,
      #55cbf2 100%
    );

    transform: matrix(-1, 0, 0, 1, 0, 0);

    .hiringMainText {
      width: 110px;
      height: 52px;

      transform: matrix(-1, 0, 0, 1, 0, 0);

      font-weight: bold;
      font-size: 36px;
      line-height: 52px;

      color: #ffffff;
    }
  }

  .backgroundStyle {
    width: 100%;

    background: linear-gradient(90deg, #55cbf2 0%, #3184ed 100%);

    img {
      max-width: 100%;
      min-height: 100%;

      object-fit: cover;
    }
    .pofolMainText {
      width: 316px;
      height: 80px;

      font-weight: bold;
      font-size: 55px;
      line-height: 80px;

      color: #ffffff;
    }
    .hiringMainText {
      width: 110px;
      height: 52px;

      font-weight: bold;
      font-size: 36px;
      line-height: 52px;

      color: #ffffff;
    }
    .aboutMainText {
      height: 200px;

      display: flex;

      p:nth-child(1) {
        width: 202px;
        height: 49px;

        font-weight: bold;
        font-size: 34px;
        line-height: 49px;

        color: #ffffff;

        margin-right: 33px;
      }
      p:nth-child(2) {
        width: 404px;
        height: 87px;

        font-weight: normal;
        font-size: 20px;
        line-height: 29px;

        color: #ffffff;

        margin-top: 3px;
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    .backgroundStyle {
      .aboutMainText {
        width: 463‬px;
        height: 104px;
        p:nth-child(1) {
          width: 119px;
          height: 29px;

          font-size: 20px;
          line-height: 29px;
        }
        p:nth-child(2) {
          width: 311px;
          height: 104px;

          font-size: 18px;
          line-height: 26px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    height: 190px;

    .historyBackgroundStyle {
      p {
        width: 209px;
        height: 104px;

        font-size: 36px;
        line-height: 52px;
      }
    }
    .backgroundStyle {
      .hiringMainText {
        width: 200px;
        height: 52px;

        font-size: 36px;
        line-height: 52px;
        text-align: center;
      }
      .pofolMainText {
        width: 200px;
        height: 52px;

        font-size: 36px;
        line-height: 52px;

        text-align: center;
      }
      .aboutMainText {
        width: 463‬px;
        height: 68px;
        p:nth-child(1) {
          width: 95px;
          height: 23px;

          font-size: 16px;
          line-height: 23px;
        }
        p:nth-child(2) {
          width: 207px;
          height: 68px;

          font-size: 12px;
          line-height: 17px;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    height: 130px;
    .backgroundStyleHiring {
      .hiringMainText {
        width: 150px;
        height: 23px;

        font-size: 16px;
        line-height: 23px;
        text-align: center;
      }
    }
    .backgroundStyle {
      .hiringMainText {
        width: 150px;
        height: 23px;

        font-size: 16px;
        line-height: 23px;
        text-align: center;
      }
      .pofolMainText {
        width: 150px;
        height: 30px;

        font-size: 16px;
        line-height: 23px;

        text-align: center;
      }
      .aboutMainText {
        height: 104px;
        display: block;
        p {
          text-align: center;
          &:nth-child(1) {
            margin: 0 auto;
          }
          &:nth-child(2) {
            margin-top: 10px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 360px) {
    .backgroundStyle {
      img {
        max-width: 100%;
      }
    }
  }
`;

export default Banner;
