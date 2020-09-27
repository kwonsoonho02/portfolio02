import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import {Desing, Front, Flutter, Web} from "../hiringImg";

const HiringSelect = ({ ...props }) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const [state, setState] = useState("ALL");

  const selectTab = [
    { title: "ALL", check: "ALL" },
    { title: "신입사원", check: "NEW" },
    { title: "경력사원", check: "CAREER" },
  ];

  const RecruitList = [
    {
      id: 1,
      teamName: "기획디자인팀",
      recruitText: "[연봉 2500만원 ~ 3500만원] Flutter 개발자 모집",
      backupNumber: 24,
      lastDate: "2020.08.02",
      hiringImg: Flutter,
      check: "NEW",
    },
    {
      id: 2,
      teamName: "기획디자인팀",
      recruitText: "[연봉3500만원부터] 디자인팀 웹디자인 경력직 채용",
      backupNumber: 24,
      lastDate: "2020.08.02",
      hiringImg: Desing,
      check: "NEW",
    },
    {
      id: 3,
      teamName: "기획디자인팀",
      recruitText: "[연봉 5000만원 시작] 웹/앱 개발 CTO 채용",
      backupNumber: 24,
      lastDate: "2020.08.02",
      hiringImg: Front,
      check: "NEW",
    },
    {
      id: 4,
      teamName: "기획디자인팀",
      recruitText: "[연봉4000만원 부터] 프론트/백엔드 개발자 모집",
      backupNumber: 24,
      lastDate: "2020.08.02",
      hiringImg: Web,
      check: "NEW",
    },
  ];

  const b = ({ id, data }) => {
    props.history.push(`/hiring/${id}`, data);
  };

  function handleChange(e) {
    setState(e.target.value);
  }

  return (
    <SelectWrap>
      <div className="optionStyle">
        <select name="option" onChange={handleChange} value={state}>
          {selectTab.map((data, idx) => (
            <option key={idx} value={data.check}>
              {data.title}
            </option>
          ))}
        </select>
      </div>
      <div className="selectStyle">
        <div>
          {selectTab.map((data, idx) => (
            <div key={idx}>
              <p
                onClick={() => {
                  setState(data.check);
                }}
                style={{
                  fontWeight: state === data.check ? "bold" : "400",
                }}
              >
                {data.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bar"></div>
      <div className="recruitStyle">
        {RecruitList.filter(
          (data) => data.check === state || state === "ALL"
        ).map((data, idx) => {
          let id = "0";
          if (idx < 9) {
            id = "0" + (idx + 1);
          } else {
            id = idx;
          }
          return (
            <div className="itemStyle" key={data.id}>
              <div
                className="listItem"
                onClick={() => b({ id: data.id, data }, window.scrollTo(0, 0))}
              >
                <div className="dataId">{id}</div>
                <div className="dataTeam">{data.teamName}</div>
                <div className="dataText">{data.recruitText}</div>
                <div className="dataNumber">지원자 {data.backupNumber}명</div>
                <div className="dataDate">{data.lastDate} 마감</div>
              </div>
              <div
                className="mediaListItem"
                onClick={() => b({ id: data.id, data }, window.scrollTo(0, 0))}
              >
                <div className="mediaTopStyle">
                  <div className="mediaDataTeam">{data.teamName}</div>
                  <div className="mediaRight">
                    <div className="mediaDataNumber">
                      지원자 {data.backupNumber}명
                    </div>
                    <div className="mediaDataDate">{data.lastDate} 마감</div>
                  </div>
                </div>
                <div className="mediaDataText">{data.recruitText}</div>
              </div>
            </div>
          );
        })}
      </div>
    </SelectWrap>
  );
};

const SelectWrap = styled.div`
  width: 1180px;
  height: 100%;

  .optionStyle {
    display: none;
  }

  .selectStyle {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;

    margin: 60px 0 60px 0;

    div {
      width: 250px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      div:nth-child(1) {
        width: 165px;
      }
    }
  }

  .bar {
    width: 100%;
    height: 6px;

    background: #cccccc;
  }
  .recruitStyle {
    width: 100%;
    height: 100%;

    clear: both;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1em;
      color: #333333;

      float: left;
    }
    .listItem {
      width: 100%;
      height: 80px;
      .dataId {
        width: 80px;
        height: 100%;

        cursor: pointer;
      }
      .dataTeam {
        width: 200px;
        height: 100%;

        cursor: pointer;
      }
      .dataText {
        width: 500px;
        height: 100%;
        display: block;
        line-height: 80px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        cursor: pointer;
      }
      .dataNumber {
        width: 200px;
        height: 100%;

        cursor: pointer;
      }
      .dataDate {
        width: 200px;
        height: 100%;

        cursor: pointer;
      }
    }
    .mediaListItem {
      display: none;
    }
  }

  @media only screen and (max-width: 1300px) {
    width: 680px;
    .recruitStyle {
      .listItem {
        .dataId {
          width: 50px;
        }
        .dataTeam {
          width: 150px;
        }
        .dataText {
          max-width: 250px;
        }
        .dataNumber {
          width: 100px;
        }
        .dataDate {
          width: 130px;
        }
      }
    }
  }
  @media only screen and (max-width: 720px) {
    .selectStyle {
      margin: 33px 0 30px 0;
    }
    .bar {
      display: none;
    }
    .recruitStyle {
      border-top: solid 1px #a5a5a5;

      .listItem {
        display: none;
      }

      .mediaListItem {
        width: 100%;
        height: 100px;

        display: block;

        cursor: pointer;

        border-bottom: solid 1px #a5a5a5;
        .mediaTopStyle {
          width: 100%;
          height: 25px;

          display: flex;
          justify-content: space-between;

          margin-top: 10px;

          .mediaDataTeam {
            width: 150px;
            height: 25px;

            font-size: 0.9em;
            font-weight: normal;
            color: #333333;
            text-align: left;

            float: left;
            line-height: 25px;

            display: block;
          }
          .mediaRight {
            height: 25px;
            display: flex;
            align-items: center;
            .mediaDataNumber {
              font-size: 0.8em;
              font-weight: normal;
              color: #ee0033;

              float: left;
              margin-right: 12px;
            }
            .mediaDataDate {
              font-size: 0.8em;
              color: #999999;

              float: left;
            }
          }
        }
        .mediaDataText {
          width: 400px;
          height: 40px;

          font-size: 0.9em;
          color: #333333;

          display: block;

          margin: 10px 0 10px 0;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    position: relative;
    .optionStyle {
      display: block;
      float: left;

      position: absolute;
      left: 100%;
      transform: translate(-100%);

      margin-top: 2px;
      select {
        width: 80px;
        height: 24px;
      }
    }
    .selectStyle {
      display: none;
    }
    .recruitStyle {
      .itemStyle {
        .mediaListItem {
          .mediaDataText {
            width: 200px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    margin-bottom: 24px;
    .recruitStyle {
      margin-top: 35px;
      .itemStyle {
        .mediaListItem {
          .mediaTopStyle {
            .mediaDataTeam {
              width: 100px;

              font-weight: bold;
            }
          }
          .mediaDataText {
            width: 200px;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 360px) {
    .optionStyle {
      margin: 2px;
    }
  }
`;

export default withRouter(HiringSelect);
