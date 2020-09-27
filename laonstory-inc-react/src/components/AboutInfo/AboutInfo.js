import React from "react";
import styled from "styled-components";

import visionImg from "../image/미래지향적-기업.png";
import missionImg from "../image/선도하는-기업.png";
import { urlArgs } from "scriptjs";

const AboutInfo = () => {
  return (
    <AboutInfoStyle>
      <div className="aboutWrap">
        <div className="service">
          <div className="versionStyle">
            <div className="versionStyleBox">
              <div className="versionBox">
                <div className="versionMainText">
                  <p>Vision</p>
                  <p>"따듯한 기술을 만들고"</p>
                </div>
              </div>
              <div className="versionBox">
                <div className="versionMainText">
                  <p>Mission</p>
                  <p>"생각을 그리고"</p>
                </div>
              </div>
              <div className="versionBox">
                <div className="versionMainText">
                  <p>Values</p>
                  <p>당신을 최고의 가치로 여기다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vision">
          <div className="visionAndMissionBox">
            <div className="visionAndMission">
              <div className="visionText">
                <div className="backText">
                  <img src={visionImg} alt={visionImg}></img>
                </div>
              </div>
              <div className="circles">
                <div className="circle">
                  <p>Faith and Trust</p>
                </div>
                <div className="circle">
                  <p>Creat Future</p>
                </div>
                <div className="circle">
                  <p>Share Happiness</p>
                </div>
              </div>
              <div className="missionText">
                <div className="backText">
                  <img src={missionImg} alt={missionImg}></img>
                </div>
              </div>
            </div>
          </div>
          <div className="valuesTextBox">
            <p>VALUES</p>
          </div>
          <div className="circleValueBox">
            <div className="circleValue">
              <div className="outCircle">
                <div className="circleValues">
                  <p>
                    <span>시대의 흐름 & 프론트엔드 개발 시장</span>을
                    <span>선도</span>하는 React.js 전문가 집단
                  </p>
                  <div className="imgCircle"></div>
                </div>
                <div className="inCircle">
                  <p>LAONSTORY VALUES</p>
                </div>
                <div className="circleValues">
                  <div className="imgCircle"></div>
                  <p>
                    <span>
                      MSA(<span>Micro Service Architechture</span>) 서비스 기반
                    </span>
                    으로 유지보수 용이, 대규모 프로젝트 개발 가능
                  </p>
                </div>
                <div className="circleValues">
                  <div className="imgCircle"></div>
                  <p>
                    프로젝트 구현에 가장 최적화된 언어, Java, Kotlin, python, GO
                    <br />
                    기반으로 <span>아이디어 실현</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutInfoStyle>
  );
};

const AboutInfoStyle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  .aboutWrap {
    width: 1375px;
    height: 100%;

    margin: 100px 0 100px;
    .service {
      width: 100%;

      position: relative;

      margin-bottom: 131px;

      display: flex;
      justify-content: center;
      .versionStyle {
        width: 1181px;
        height: 332px;

        display: flex;
        justify-content: center;

        position: absolute;
        top: -100%;
        transform: translateY(-100%);

        margin-top: 100px;
        .versionStyleBox {
          width: 100%;
          height: 100%;

          float: left;

          .versionBox {
            width: 372px;
            height: 250px;

            position: relative;

            float: left;

            background: #ffffff;

            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
            border-radius: 16px;

            display: flex;
            justify-content: center;
            align-items: center;

            &:nth-child(2) {
              margin: 0 32px 0 32px;
            }
            .versionImg {
              width: 100%;

              display: flex;
              justify-content: center;

              margin-bottom: 27px;
              div {
                width: 118px;
                height: 118px;

                border-radius: 50%;

                background: #c4c4c4;
              }
            }
            &:nth-child(1) .versionMainText {
              width: 269px;
            }
            &:nth-child(2) .versionMainText {
              width: 333px;
            }
            &:nth-child(3) .versionMainText {
              width: 270px;
            }
            .versionMainText {
              p {
                &:nth-child(1) {
                  font-style: normal;
                  font-weight: bold;
                  font-size: 32px;
                  line-height: 46px;

                  text-align: center;
                  color: #71aafc;

                  margin: 0 0 24px 0;
                }
                font-weight: 500;
                font-size: 14px;
                text-align: center;
              }
            }
            .pageNumber {
              font-size: 14px;
              text-align: center;
              color: #999999;

              margin: 18px 0 18px 0;
            }
            .versionEx {
              width: 315px;

              font-weight: 500;
              font-size: 15px;
              text-align: center;

              margin: 0 auto;
            }
          }
        }
      }
    }
    .vision {
      width: 100%;
      height: 100%;
      .visionAndMissionBox {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        .visionAndMission {
          width: 100%;
          .visionText {
            height: 246px;
            position: relative;

            .backText {
              width: 582px;
              height: 246px;

              display: flex;
              justify-content: center;
              align-items: center;

              position: relative;
              img {
                max-width: 100%;
                max-height: 100%;
              }
              p:nth-child(1) {
                font-weight: bold;
                font-size: 170px;

                text-align: center;

                color: rgba(133, 183, 245, 0.2);
                position: absolute;
              }
              p:nth-child(2) {
                width: 410px;
                height: 90px;

                font-weight: 500;
                font-size: 30px;
                line-height: 43px;

                color: #333333;
                span {
                  font-weight: bold;

                  margin-left: 170px;
                }
              }
            }
          }
          .missionText {
            height: 246px;

            position: relative;

            .backText {
              width: 725px;
              height: 100%;

              display: flex;
              justify-content: center;
              align-items: center;

              position: absolute;
              right: 0;

              img {
                max-width: 100%;
                max-height: 100%;
              }
              p:nth-child(1) {
                font-weight: bold;
                font-size: 170px;

                text-align: center;

                color: rgba(133, 183, 245, 0.2);
                position: absolute;
              }
              p:nth-child(2) {
                width: 540px;
                height: 86px;

                font-weight: 500;
                font-size: 30px;
                line-height: 43px;

                color: #333333;
                span:nth-child(1) {
                  font-weight: bold;
                }
                .leftBox {
                  margin-left: 145px;
                }
              }
            }
          }

          .circles {
            width: 774px;
            height: 290px;

            margin: 0 auto;

            position: relative;

            .circle {
              width: 290px;
              height: 290px;

              font-size: 30px;
              line-height: 43px;
              text-align: center;

              color: #333333;

              border-radius: 50%;

              position: absolute;

              display: flex;
              justify-content: center;
              align-items: center;

              &:nth-child(1) {
                background: rgba(71, 175, 240, 0.7);
                p {
                  width: 138px;
                  height: 86px;
                }
              }
              &:nth-child(2) {
                background: rgba(51, 135, 238, 0.5);

                left: 50%;
                transform: translateX(-50%);

                p {
                  width: 92px;
                  height: 86px;
                }
              }
              &:nth-child(3) {
                background: rgba(133, 183, 245, 0.6);

                left: 100%;
                transform: translateX(-100%);

                p {
                  width: 148px;
                  height: 86px;
                }
              }
            }
          }
        }
      }
      .valuesTextBox {
        width: 100%;
        height: 161px;

        display: flex;
        justify-content: center;
        align-items: center;
        p {
          width: 147px;
          height: 58px;

          font-weight: 500;
          font-size: 40px;
          line-height: 58px;

          color: #a8ccfd;
        }
      }
      .circleValueBox {
        width: 100%;
        height: 845px;

        display: flex;
        justify-content: center;
        align-items: center;

        .circleValue {
          width: 100%;
          height: 643px;

          display: flex;
          justify-content: center;
          align-items: center;

          .outCircle {
            width: 636px;
            height: 636px;

            border-radius: 50%;
            border: 2px solid #aacffc;

            position: relative;

            .circleValues {
              width: 430px;
              height: 135px;

              display: flex;
              align-items: center;

              p {
                font-size: 24px;
                line-height: 35px;

                color: #666666;

                span {
                  font-weight: bold;

                  color: #8bbbf5;
                }
              }
              .imgCircle {
                width: 135px;
                height: 135px;

                border-radius: 50%;

                background: rgb(133, 183, 245);
              }

              &:nth-child(1) {
                position: absolute;
                left: -33%;
                top: 30%;
                transform: translate(-33%, -30%);
                p {
                  width: 261px;
                  height: 105px;

                  margin-right: 34px;
                }
              }
              &:nth-child(3) {
                width: 531px;
                position: absolute;
                right: -32%;
                top: 5%;
                transform: translate(32%, -5%);
                p {
                  width: 365px;
                  height: 105px;

                  text-align: left;
                  margin-left: 34px;

                  span {
                    span {
                      font-size: 20px;
                      line-height: 29px;
                    }
                  }
                }
              }
              &:nth-child(4) {
                width: 521px;
                position: absolute;
                right: -32%;
                top: 95%;
                transform: translate(32%, -95%);
                p {
                  width: 365px;
                  height: 105px;

                  text-align: left;
                  margin-left: 24px;
                }
              }
            }

            .inCircle {
              width: 428px;
              height: 428px;

              border-radius: 50%;

              background: linear-gradient(
                90deg,
                #85b7f5 0%,
                rgba(133, 183, 245, 0.76) 100%
              );

              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);

              display: flex;
              justify-content: center;
              align-items: center;
              p {
                width: 214px;
                height: 104px;

                font-weight: bold;
                font-size: 36px;
                line-height: 52px;
                text-align: center;

                color: #ffffff;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    .aboutWrap {
      width: calc(100% - 96px);
      height: 100%;

      .vision {
        width: 100%;
        height: 100%;

        .circleValueBox {
          .circleValue {
            .outCircle {
              width: 536px;
              height: 536px;

              .circleValues {
                height: 100px;
                .imgCircle {
                  width: 100px;
                  height: 100px;
                }

                &:nth-child(1) {
                  width: 351px;

                  position: absolute;
                  left: -33%;
                  top: 30%;
                  transform: translate(-33%, -30%);
                  p {
                    width: 217px;
                    height: 87px;

                    font-size: 20px;
                    line-height: 29px;
                  }
                }
                &:nth-child(3) {
                  width: 422px;

                  position: absolute;
                  right: -30%;
                  top: 5%;
                  transform: translate(30%, -5%);

                  p {
                    width: 288px;
                    height: 87px;

                    font-size: 20px;
                    line-height: 29px;
                    span {
                      span {
                        font-size: 17px;
                        line-height: 25px;
                      }
                    }
                  }
                }
                &:nth-child(4) {
                  width: 422px;

                  position: absolute;
                  right: -30%;
                  top: 95%;
                  transform: translate(30%, -95%);

                  p {
                    width: 304px;
                    height: 87px;

                    font-size: 20px;
                    line-height: 29px;
                  }
                }
              }

              .inCircle {
                width: 328px;
                height: 328px;

                p {
                  width: 179px;
                  height: 86px;

                  font-size: 30px;
                  line-height: 43px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    .aboutWrap {
      width: 100%;
      .service {
        width: 744px;
        height: 212px;

        margin: 0 auto;
        .versionStyle {
          width: 100%;
          height: 100%;

          position: absolute;
          top: 0%;
          transform: translateY(-0%);

          margin-top: 0;
          .versionStyleBox {
            .versionBox {
              width: 240px;
              height: 180px;
              &:nth-child(2) {
                margin: 0 12px 0 12px;
              }

              &:nth-child(1) .versionMainText {
                width: 180px;
              }
              &:nth-child(2) .versionMainText {
                width: 190px;
              }
              &:nth-child(3) .versionMainText {
                width: 190px;
              }

              .versionMainText {
                width: 180px;
                p {
                  &:nth-child(1) {
                    font-size: 20px;
                    line-height: 29px;
                  }
                }
              }

              .versionEx {
                display: none;
              }
            }
          }
        }
      }
      .vision {
        position: relative;
        .circleValueBox {
          height: 845px;
          .circleValue {
            height: 643px;

            display: block;
            .outCircle {
              width: 636px;
              height: 636px;

              position: sticky;
              left: -45%;
              transform: translateX(-45%);
              .circleValues {
                height: 100px;

                .imgCircle {
                  width: 100px;
                  height: 100px;
                }

                &:nth-child(1) {
                  position: absolute;
                  left: 208%;
                  top: 50%;
                  transform: translate(-208%, -50%);

                  p {
                    margin: 0 0 0 34px;

                    position: absolute;
                    right: 0;
                  }

                  .imgCircle {
                    position: absolute;
                    left: 0;
                  }
                }
                &:nth-child(3) {
                  position: absolute;
                  right: -25%;
                  top: 5%;
                  transform: translate(25%, -5%);
                }
                &:nth-child(4) {
                  position: absolute;
                  right: -25%;
                  top: 95%;
                  transform: translate(25%, -95%);
                }
              }
              .inCircle {
                width: 434px;
                height: 434px;

                display: block;
                p {
                  position: absolute;
                  left: 70%;
                  top: 55%;
                  transform: translate(-55%, -70%);
                  text-align: left;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .aboutWrap {
      .vision {
        .circleValueBox {
          .circleValue {
            .outCircle {
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 860px) {
    .aboutWrap {
      margin: 52px 0 52px;
      .vision {
        .visionAndMissionBox {
          .visionAndMission {
            .visionText {
              display: flex;
              justify-content: center;
              align-items: center;
              .backText {
                width: 514px;
                height: 217px;
                p:nth-child(1) {
                  font-size: 150px;
                  line-height: 217px;
                }
                p:nth-child(2) {
                  width: 329px;
                  height: 72px;

                  font-size: 25px;
                  line-height: 36px;

                  color: #333333;
                  span {
                    font-weight: bold;

                    margin-left: 130px;
                  }
                }
              }
            }

            .circles {
              width: 600px;
              height: 224px;
              .circle {
                width: 224px;
                height: 224px;
              }
            }
            .missionText {
              position: relative;
              .backText {
                width: 640px;
                height: 217px;

                position: absolute;
                left: 50%;
                transform: translate(-50%);
                p:nth-child(1) {
                  font-size: 150px;
                  line-height: 217px;
                }
                p:nth-child(2) {
                  width: 439px;
                  height: 79px;

                  font-size: 25px;
                  line-height: 36px;

                  span:nth-child(1) {
                    font-weight: bold;
                  }
                  .leftBox {
                    margin-left: 110px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .aboutWrap {
      .service {
        width: 240px;
        height: 708px;
        .versionStyle {
          .versionStyleBox {
            .versionBox {
              &:nth-child(2) {
                margin: 24px 0 24px 0;
              }
            }
          }
        }
      }
      .vision {
        .visionAndMissionBox {
          .visionAndMission {
            .visionText {
              height: 116px;
              .backText {
                width: 274px;
                height: 116px;
                p:nth-child(1) {
                  font-size: 80px;
                  line-height: 116px;
                }
                p:nth-child(2) {
                  width: 211px;
                  height: 49px;

                  font-size: 16px;
                  line-height: 23px;

                  span {
                    margin-left: 70px;
                  }
                }
              }
            }
            .circles {
              width: 267px;
              height: 250px;
              .circle {
                width: 150px;
                height: 150px;

                &:nth-child(2) {
                  position: absolute;
                  left: 50%;
                  transform: translate(-50%);

                  p {
                    width: 43px;
                    height: 40px;

                    font-size: 14px;
                    line-height: 20px;
                  }
                }
                &:nth-child(1) {
                  position: absolute;
                  left: 0%;
                  top: 100%;
                  transform: translate(-0%, -100%);
                  p {
                    width: 65px;
                    height: 40px;

                    font-size: 14px;
                    line-height: 20px;
                  }
                }
                &:nth-child(3) {
                  position: absolute;
                  left: 100%;
                  top: 100%;
                  transform: translate(-100%, -100%);
                  p {
                    width: 69px;
                    height: 40px;

                    font-size: 14px;
                    line-height: 20px;
                  }
                }
              }
            }
            .missionText {
              height: 116px;
              .backText {
                width: 320px;
                height: 116px;
                p:nth-child(1) {
                  font-size: 80px;
                  line-height: 116px;
                }
                p:nth-child(2) {
                  width: 282px;
                  height: 46px;

                  font-size: 16px;
                  line-height: 23px;
                  .leftBox {
                    margin-left: 70px;
                  }
                }
              }
            }
          }
        }
        .valuesTextBox {
          height: 116px;
          p {
            width: 66px;
            height: 26px;

            font-size: 18px;
            line-height: 26px;
          }
        }
        .circleValueBox {
          height: 400px;
          .circleValue {
            height: 100%;
            .outCircle {
              width: 366px;
              height: 366px;

              position: sticky;
              left: -50%;
              transform: translateX(-50%);
              .circleValues {
                .imgCircle {
                  width: 57px;
                  height: 57px;
                }
                p {
                  span {
                    font-size: 14px;
                    line-height: 20px;
                  }
                }
                &:nth-child(1) {
                  width: 220px;

                  position: absolute;
                  left: 235%;
                  top: 50%;
                  transform: translate(-235%, -50%);
                  p {
                    width: 152px;

                    font-size: 14px;
                    line-height: 20px;

                    margin: 0 0 0 12px;
                  }
                }
                &:nth-child(3) {
                  width: 272px;

                  position: absolute;
                  right: -30%;
                  top: 5%;
                  transform: translate(30%, -5%);
                  p {
                    width: 203px;

                    font-size: 14px;
                    line-height: 20px;

                    text-align: left;
                    margin-left: 12px;

                    span {
                      span {
                        font-size: 12px;
                        line-height: 17px;
                      }
                    }
                  }
                }
                &:nth-child(4) {
                  width: 272px;
                  position: absolute;
                  right: -30%;
                  top: 100%;
                  transform: translate(30%, -100%);
                  p {
                    width: 203px;

                    font-size: 14px;
                    line-height: 20px;

                    text-align: left;
                    margin-left: 12px;
                  }
                }
              }
              .inCircle {
                width: 246px;
                height: 246px;
                p {
                  width: 84px;
                  height: 40px;

                  font-size: 14px;
                  line-height: 20px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 460px) {
    .aboutWrap {
      margin: 34px 0 56px 0;
      .service {
        height: 608px;
      }
      .vision {
        .circleValueBox {
          .circleValue {
            .outCircle {
              position: sticky;
              left: -55%;
              transform: translateX(-55%);
              .inCircle {
                p {
                  position: absolute;
                  left: 93%;
                  top: 37%;
                  transform: translate(-93%, 37%);
                }
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 320px) {
    .aboutWrap {
      .vision {
        margin-bottom: 40px;
        .circleValueBox {
          .circleValue {
            .outCircle {
              width: 360px;
              .circleValues {
                &:nth-child(1) {
                  max-width: 190px;

                  position: absolute;
                  left: 195%;
                  top: 50%;
                  transform: translate(-195%, -50%);
                  p {
                    max-width: 65%;

                    margin: 0 0 0 0;
                  }
                }
                &:nth-child(3) {
                  max-width: 225px;

                  position: absolute;
                  right: -25%;
                  top: 0%;
                  transform: translate(25%, -0%);
                  p {
                    max-width: 70%;
                  }
                }
                &:nth-child(4) {
                  max-width: 225px;

                  position: absolute;
                  right: -23%;
                  top: 100%;
                  transform: translate(23%, -100%);
                  p {
                    max-width: 70%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default AboutInfo;
