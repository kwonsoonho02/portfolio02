import React from "react";
import styled from "styled-components";

const HistoryInfo = () => {
  return (
    <HistroyStyle>
      <div className="history">
        <div className="historyBox">
          <div className="historyYear">
            <p>2014</p>
          </div>
          <div className="historyContents">
            <div className="contentText">
              <p>Nov</p>
              <p>
                창조경제박람회(COEX)
                <br />
                한국과학창의재단 비콘탐사 교육앱 개발
                <br />
                대한민국 창의과학축전(BEXCO)
                <br />
                한국과학창의재단 비콘탐사 교육앱 개발
              </p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>굿게임쇼 2014 공식 어플 개발 및 서비스</p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>스마트 전시 플랫폼 '엑스폰(EXPON)런칭</p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>스마트 오프라인 마케팅 플랫폼 '비폰(BEAPON)런칭'</p>
            </div>
          </div>
        </div>
        <div className="historyBox">
          <div className="historyYear">
            <p>2013</p>
          </div>
          <div className="historyContents">
            <div className="contentText">
              <p>Nov</p>
              <p>
                Message Book 개발
                <br /> (기업형 푸시 알림 서비스)
              </p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>
                융합 앱개발 지원 사업 수주
                <br />
                (주관:창업진흥원)
              </p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>힐링데이트 우울증 치유 앱 서비스 런칭</p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>오리지날 K-POP 댄스강의 앱 서비스 런칭</p>
            </div>
          </div>
        </div>
        <div className="historyBox  viewMoreClass">
          <div className="historyYear">
            <p>2012</p>
          </div>
          <div className="historyContents">
            <div className="contentText">
              <p>Nov</p>
              <p>
                힐링 프로젝트 지원사업 수주
                <br />
                (주관:경기콘텐츠진흥원)
              </p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>
                (주)라온스토리 법인 설립 상생프로젝트 지원사업
                수주(주관:경기콘텐츠진흥원)
              </p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>하이보카 영어단어 앱 시리즈 개발 GPS위치기반 운동 앱 개발</p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>스마트폰용 순발력 터치게임 개발</p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>맥용TTS프로그램 개발</p>
            </div>
            <div className="contentText">
              <p>May</p>
              <p>스마트폰용 주사위 게임 개발</p>
            </div>
          </div>
        </div>
        <div className="viewMore">
          <div
            className="viewMoreBtn"
            onClick={() => {
              let view = document.getElementsByClassName("viewMoreClass");
              let btn = document.getElementsByClassName("viewMore");
              if (view[0].style.display === "block") {
                view[0].style.display = "none";
              } else {
                view[0].style.display = "block";
                btn[0].style.display = "none";
              }
            }}
          >
            <p>ViewMore</p>
            <p>&gt;</p>
          </div>
        </div>
      </div>
    </HistroyStyle>
  );
};

const HistroyStyle = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  margin: 100px 0 100px 0;
  .history {
    width: 760px;
    .viewMoreClass {
      display: none;
    }
    .historyBox {
      width: 100%;

      margin-bottom: 62px;

      .historyYear {
        width: 100%;
        height: 140px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom: 14px;

        position: relative;
        p {
          width: 200px;
          height: 43px;

          font-weight: 500;
          font-size: 30px;
          line-height: 43px;

          display: flex;
          justify-content: center;
          align-items: center;

          color: #444444;

          &:after {
            content: "";
            width: 200px;
            height: 2px;
            background: #c2356d;

            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .historyContents {
        width: 100%;
        .contentText {
          width: 100%;

          display: flex;

          margin-bottom: 45px;
          p:nth-child(1) {
            font-weight: normal;
            font-size: 24px;
            line-height: 35px;

            color: #ab4383;
            margin-right: 51px;
          }
          p:nth-child(2) {
            font-weight: normal;
            font-size: 34px;
            line-height: 49px;

            color: #666666;
          }
        }
      }
    }
    .viewMore {
      width: 100%;
      height: 200px;

      display: flex;
      justify-content: center;
      align-items: center;
      .viewMoreBtn {
        width: 192px;

        font-size: 40px;
        line-height: 58px;

        color: #444444;

        cursor: pointer;

        p {
          text-align: center;
        }

        p:nth-child(2) {
          width: 50px;
          height: 50px;

          text-align: center;
          line-height: 50px;

          transform: rotate(90deg);
          float: left;

          margin-left: 70px;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 52px 0 52px 0;
    .history {
      width: 392px;

      .historyBox {
        margin-bottom: 52px;
        .historyYear {
          height: 100px;
          p {
            width: 100px;
            height: 29px;

            font-size: 20px;
            line-height: 29px;
          }
        }
        .historyContents {
          .contentText {
            p:nth-child(1) {
              width: 30px;
              height: 23px;

              font-size: 16px;
              line-height: 23px;

              margin-right: 50px;
            }
            p:nth-child(2) {
              font-size: 18px;
              line-height: 26px;
            }
          }
        }
      }
      .viewMore {
        height: 100px;
        .viewMoreBtn {
          width: 115px;
          height: 81px;
          p:nth-child(1) {
            font-size: 24px;
            line-height: 35px;
          }
          p:nth-child(2) {
            width: 30px;
            height: 30px;
            margin-left: 55px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    margin: 24px 0 50px 0;
    .history {
      width: 280px;
      .historyBox {
        margin-bottom: 24px;
        .historyYear {
          height: 80px;
          p {
            width: 100px;
            height: 29px;
          }
        }
        .historyContents {
          .contentText {
            p:nth-child(1) {
              width: 26px;
              height: 20px;

              font-size: 14px;
              line-height: 20px;

              margin-right: 27px;
            }
            p:nth-child(2) {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
      .viewMore {
        height: 80px;
        .viewMoreBtn {
          width: 67px;
          height: 54px;
          p:nth-child(1) {
            font-size: 14px;
            line-height: 20px;
          }
          p:nth-child(2) {
            width: 22px;
            height: 22px;
            margin-left: 40px;
          }
        }
      }
    }
  }
`;

export default HistoryInfo;
