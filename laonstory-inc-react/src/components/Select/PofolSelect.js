import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import ContentText from "../ContentText/ContentText";
import { useLocation } from "react-router-dom";

import {
  CRM1,
  CRM2,
  CRM3,
  CRM4,
  CRM5,
  CRM6,
  CRM7,
  CRMThumbnail,
  MCRM1,
  MCRM2,
  MCRM3,
  MCRM4,
  MCRM5,
  MCRM6,
  MCRM7,
  MCRMThumbnail,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partnerThumbnail,
  Mpartner1,
  Mpartner2,
  Mpartner3,
  Mpartner4,
  Mpartner5,
  Mpartner6,
  MpartnerThumbnail,
  address1,
  address2,
  address3,
  address4,
  address5,
  address6,
  addressThumbnail,
  Maddress1,
  Maddress2,
  Maddress3,
  Maddress4,
  Maddress5,
  Maddress6,
  MaddressThumbnail,
  vote1,
  vote2,
  vote3,
  vote4,
  vote5,
  vote6,
  vote7,
  voteThumbnail,
  Mvote1,
  Mvote2,
  Mvote3,
  Mvote4,
  Mvote5,
  Mvote6,
  MvoteThumbnail,
  BEAPON1,
  BEAPON2,
  BEAPON3,
  BEAPONThumbnail,
  MBEAPON1,
  MBEAPON2,
  MBEAPON3,
  MBEAPONThumbnail,
  REPULER1,
  REPULER2,
  REPULER3,
  REPULER4,
  REPULERThumbnail,
  MREPULER1,
  MREPULER2,
  MREPULER3,
  MREPULER4,
  MREPULERThumbnail,
  COUPLE1,
  COUPLE2,
  COUPLE3,
  COUPLEThumbnail,
  MCOUPLE1,
  MCOUPLE2,
  MCOUPLE3,
  MCOUPLEThumbnail,
  FARMER1,
  FARMER2,
  FARMER3,
  FARMER4,
  FARMERThumbnail,
  MFARMER1,
  MFARMER2,
  MFARMER3,
  MFARMER4,
  MFARMERThumbnail,
  BERRYVIEW1,
  BERRYVIEW2,
  BERRYVIEW3,
  BERRYVIEW4,
  BERRYVIEW5,
  BERRYVIEW6,
  BERRYVIEW7,
  BERRYVIEWThumbnail,
  MBERRYVIEW1,
  MBERRYVIEW2,
  MBERRYVIEW3,
  MBERRYVIEW4,
  MBERRYVIEW5,
  MBERRYVIEW6,
  MBERRYVIEW7,
  MBERRYVIEWThumbnail,
  CROPS1,
  CROPS2,
  CROPS3,
  CROPS4,
  CROPS5,
  CROPSThumbnail,
  MCROPS1,
  MCROPS2,
  MCROPS3,
  MCROPS4,
  MCROPS5,
  MCROPSThumbnail,
  DELARUA1,
  DELARUA2,
  DELARUA3,
  DELARUA4,
  DELARUA5,
  DELARUAThumbnail,
  MDELARUA1,
  MDELARUA2,
  MDELARUA3,
  MDELARUA4,
  MDELARUA5,
  MDELARUAThumbnail,
  GRANDIE1,
  GRANDIE2,
  GRANDIE3,
  GRANDIE4,
  GRANDIE5,
  GRANDIEThumbnail,
  MGRANDIE1,
  MGRANDIE2,
  MGRANDIE3,
  MGRANDIE4,
  MGRANDIE5,
  MGRANDIEThumbnail,
  laonstory1,
  laonstory2,
  laonstory3,
  laonstory4,
  laonstory5,
  laonstoryThumbnail,
  Mlaonstory1,
  Mlaonstory2,
  Mlaonstory3,
  Mlaonstory4,
  Mlaonstory5,
  MlaonstoryThumbnail,
  MADRABBIT1,
  MADRABBIT2,
  MADRABBIT3,
  MADRABBIT4,
  MADRABBITThumbnail,
  MMADRABBIT1,
  MMADRABBIT2,
  MMADRABBIT3,
  MMADRABBIT4,
  MMADRABBITThumbnail,
  nicomatic1,
  nicomatic2,
  nicomatic3,
  nicomatic4,
  nicomaticThumbnail,
  Mnicomatic1,
  Mnicomatic2,
  Mnicomatic3,
  Mnicomatic4,
  MnicomaticThumbnail,
  ROPE1,
  ROPE2,
  ROPE3,
  ROPE4,
  ROPEThumbnail,
  MROPE1,
  MROPE2,
  MROPE3,
  MROPE4,
  MROPEThumbnail,
  SHOOTINGSTARBEEER1,
  SHOOTINGSTARBEEER2,
  SHOOTINGSTARBEEER3,
  SHOOTINGSTARBEEER4,
  SHOOTINGSTARBEEER5,
  SHOOTINGSTARBEEER6,
  SHOOTINGSTARBEEERThumbnail,
  MSHOOTINGSTARBEEER1,
  MSHOOTINGSTARBEEER2,
  MSHOOTINGSTARBEEER3,
  MSHOOTINGSTARBEEER4,
  MSHOOTINGSTARBEEER5,
  MSHOOTINGSTARBEEER6,
  MSHOOTINGSTARBEEERThumbnail,
  SILVER1,
  SILVER2,
  SILVER3,
  SILVER4,
  SILVER5,
  SILVER6,
  SILVERThumbnail,
  MSILVER1,
  MSILVER2,
  MSILVER3,
  MSILVER4,
  MSILVER5,
  MSILVER6,
  MSILVERThumbnail,
} from "../portfolioImg";

const PofolSelect = ({ ...props }) => {
  useEffect(() => {}, []);

  const [state, setState] = useState("ALL");
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const selectTab = [
    { title: "ALL", check: "ALL" },
    { title: "WEB", check: "WEB" },
    { title: "APP", check: "APP" },
    { title: "GAME", check: "GAME" },
  ];

  const PortfolioList = [
    {
      id: 1,
      name: "CRM",
      date: "2020.02.02",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: CRMThumbnail,
      Mthumbnail: MCRMThumbnail,
      baneerImg: CRM1,
      mBannerImg: MCRM1,
      img: [CRM2, CRM3, CRM4, CRM5, CRM6, CRM7],
      mImg: [MCRM2, MCRM3, MCRM4, MCRM5, MCRM6, MCRM7],
      check: "WEB",
    },
    {
      id: 2,
      name: "건축파트너",
      date: "2020.02.02",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: partnerThumbnail,
      Mthumbnail: MpartnerThumbnail,
      baneerImg: partner1,
      mBannerImg: Mpartner1,
      img: [partner2, partner3, partner4, partner5, partner6],
      mImg: [Mpartner2, Mpartner3, Mpartner4, Mpartner5, Mpartner6],
      check: "WEB",
    },
    {
      id: 3,
      name: "투표창고",
      date: "2020.02.02",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: voteThumbnail,
      Mthumbnail: MvoteThumbnail,
      baneerImg: vote1,
      mBannerImg: Mvote1,
      img: [vote2, vote3, vote4, vote5, vote6, vote7],
      mImg: [Mvote2, Mvote3, Mvote4, Mvote5, Mvote6],
      check: "WEB",
    },
    {
      id: 4,
      name: "주소록",
      date: "2020.02.02",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: addressThumbnail,
      Mthumbnail: MaddressThumbnail,
      baneerImg: address1,
      mBannerImg: Maddress1,
      img: [address2, address3, address4, address5, address6],
      mImg: [Maddress2, Maddress3, Maddress4, Maddress5, Maddress6],
      check: "WEB",
    },
    {
      id: 5,
      name: "BEAPON",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: BEAPONThumbnail,
      Mthumbnail: MBEAPONThumbnail,
      baneerImg: BEAPON1,
      mBannerImg: MBEAPON1,
      img: [BEAPON2, BEAPON3],
      mImg: [MBEAPON2, MBEAPON3],
      check: "WEB",
    },
    {
      id: 6,
      name: "FARMER",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: FARMERThumbnail,
      Mthumbnail: MFARMERThumbnail,
      baneerImg: FARMER1,
      mBannerImg: MFARMER1,
      img: [FARMER2, FARMER3,FARMER4],
      mImg: [MFARMER2, MFARMER3, MFARMER4],
      check: "WEB",
    },
    {
      id: 7,
      name: "COUPLE",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: COUPLEThumbnail,
      Mthumbnail: MCOUPLEThumbnail,
      baneerImg: COUPLE1,
      mBannerImg: MCOUPLE1,
      img: [COUPLE2, COUPLE3],
      mImg: [MCOUPLE2, MCOUPLE3],
      check: "WEB",
    },
    {
      id: 8,
      name: "REPULER",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: REPULERThumbnail,
      Mthumbnail: MREPULERThumbnail,
      baneerImg: REPULER1,
      mBannerImg: MREPULER1,
      img: [REPULER2, REPULER3, REPULER4],
      mImg: [MREPULER2, MREPULER3, MREPULER4],
      check: "WEB",
    },
    {
      id: 9,
      name: "BERRYVIEW",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: BERRYVIEWThumbnail,
      Mthumbnail: MBERRYVIEWThumbnail,
      baneerImg: BERRYVIEW1,
      mBannerImg: MBERRYVIEW1,
      img: [BERRYVIEW2, BERRYVIEW3, BERRYVIEW4, BERRYVIEW5, BERRYVIEW6, BERRYVIEW7],
      mImg: [MBERRYVIEW2, MBERRYVIEW3, MBERRYVIEW4, MBERRYVIEW5, MBERRYVIEW6, MBERRYVIEW7,],
      check: "WEB",
    },
    {
      id: 10,
      name: "CROPS",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: CROPSThumbnail,
      Mthumbnail: MCROPSThumbnail,
      baneerImg: CROPS1,
      mBannerImg: MCROPS1,
      img: [CROPS2, CROPS3, CROPS4, CROPS5],
      mImg: [MCROPS2, MCROPS3, MCROPS4, MCROPS5],
      check: "WEB",
    },
    {
      id: 11,
      name: "DELARUA",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: DELARUAThumbnail,
      Mthumbnail: MDELARUAThumbnail,
      baneerImg: DELARUA1,
      mBannerImg: MDELARUA1,
      img: [DELARUA2, DELARUA3, DELARUA4, DELARUA5],
      mImg: [MDELARUA2, MDELARUA3, MDELARUA4, MDELARUA5],
      check: "WEB",
    },
    {
      id: 12,
      name: "GRANDIE",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: GRANDIEThumbnail,
      Mthumbnail: MGRANDIEThumbnail,
      baneerImg: GRANDIE1,
      mBannerImg: MGRANDIE1,
      img: [GRANDIE2, GRANDIE3, GRANDIE4, GRANDIE5],
      mImg: [MGRANDIE2, MGRANDIE3, MGRANDIE4, MGRANDIE5],
      check: "WEB",
    },
    {
      id: 13,
      name: "laonstory",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: laonstoryThumbnail,
      Mthumbnail: MlaonstoryThumbnail,
      baneerImg: laonstory1,
      mBannerImg: Mlaonstory1,
      img: [laonstory2, laonstory3, laonstory4, laonstory5],
      mImg: [Mlaonstory2, Mlaonstory3, Mlaonstory4, Mlaonstory5],
      check: "WEB",
    },
    {
      id: 14,
      name: "MADRABBIT",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: MADRABBITThumbnail,
      Mthumbnail: MMADRABBITThumbnail,
      baneerImg: MADRABBIT1,
      mBannerImg: MMADRABBIT1,
      img: [MADRABBIT2, MADRABBIT3, MADRABBIT4],
      mImg: [MMADRABBIT2, MMADRABBIT3, MMADRABBIT4],
      check: "WEB",
    },
    {
      id: 15,
      name: "MADRABBIT",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: nicomaticThumbnail,
      Mthumbnail: MnicomaticThumbnail,
      baneerImg: nicomatic1,
      mBannerImg: Mnicomatic1,
      img: [nicomatic2, nicomatic3, nicomatic4],
      mImg: [Mnicomatic2, Mnicomatic3, Mnicomatic4],
      check: "WEB",
    },
    {
      id: 16,
      name: "ROPE",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: ROPEThumbnail,
      Mthumbnail: MROPEThumbnail,
      baneerImg: ROPE1,
      mBannerImg: MROPE1,
      img: [ROPE2, ROPE3, ROPE4],
      mImg: [MROPE2, MROPE3, MROPE4],
      check: "WEB",
    },
    {
      id: 17,
      name: "SHOOTINGSTARBEEER",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: SHOOTINGSTARBEEERThumbnail,
      Mthumbnail: MSHOOTINGSTARBEEERThumbnail,
      baneerImg: SHOOTINGSTARBEEER1,
      mBannerImg: MSHOOTINGSTARBEEER1,
      img: [SHOOTINGSTARBEEER2, SHOOTINGSTARBEEER3, SHOOTINGSTARBEEER4, SHOOTINGSTARBEEER5, SHOOTINGSTARBEEER6],
      mImg: [MSHOOTINGSTARBEEER2, MSHOOTINGSTARBEEER3, MSHOOTINGSTARBEEER4, MSHOOTINGSTARBEEER5, MSHOOTINGSTARBEEER6,],
      check: "WEB",
    },
    {
      id: 18,
      name: "SHOOTINGSTARBEEER",
      date: "2020.02.13",
      additionEx:
        "무료로 사용하는 농수산물 직거래장터! 무료로 사용하는 농수산물 직거래 장터!",
      nh: "NH농협 | App Android, IOS",
      thumbnail: SILVERThumbnail,
      Mthumbnail: MSILVERThumbnail,
      baneerImg: SILVER1,
      mBannerImg: MSILVER1,
      img: [SILVER2, SILVER3, SILVER4, SILVER5, SILVER6],
      mImg: [MSILVER2, MSILVER3, MSILVER4, MSILVER5, MSILVER6],
      check: "WEB",
    },
  ];

  const a = ({ id, data }) => {
    props.history.push(`/portfolio/${id}`, data);
  };

  function handleChange(e) {
    setState(e.target.value);
  }

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <PortfolioWrap>
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
      <div className="portfolioStyle">
        {PortfolioList.filter(
          (data) => data.check === state || state === "ALL"
        ).map((data) => (
          <div
            className="PortfolioBox"
            key={data.id}
            onClick={() => a({ id: data.id, data }, window.scrollTo(0, 0))}
          >
            <div className="imgBox">
              <img
                src={windowSize >= 480 ? data.thumbnail : data.Mthumbnail}
                alt={data.thumbnail}
              />
            </div>
            <div className="textBox">
              <div>
                <p className="PofolName">{data.name}</p>
                <p className="PofolDate">{data.date}</p>
              </div>
              <p className="addEx">{data.additionEx}</p>
              <p className="nhText">{data.nh}</p>
            </div>
          </div>
        ))}
      </div>
    </PortfolioWrap>
  );
};

const PortfolioWrap = styled.div`
  width: 100%;
  height: 100%;

  .optionStyle {
    display: none;
  }

  .selectStyle {
    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    cursor: pointer;

    div {
      width: 280px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .portfolioStyle {
    width: 100%;
    height: calc(100% - 200px);

    margin-top: 50px;

    .PortfolioBox:nth-child(4n + 4) {
      margin-right: 0;
    }
    .PortfolioBox {
      width: calc(100% / 4 - 23px);

      float: left;

      margin: 0 30px 40px 0;

      cursor: pointer;
      .imgBox {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        img {
          max-width: 100%;
          max-height: 100%;

          object-fit: cover;
        }
      }

      .textBox {
        width: 100%;
        height: 150px;

        position: relative;
        div {
          width: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          .PofolName {
            color: #333333;
            font-size: 1.1em;
            font-weight: bold;

            float: left;

            margin-top: 20px;
          }
          .PofolDate {
            color: #999999;
            font-size: 0.9em;

            float: left;
            margin-top: 20px;
          }
        }
        .addEx {
          color: #333333;
          font-size: 0.9em;
          font-weight: normal;

          margin-top: 10px;
        }

        .nhText {
          width: 160px;

          color: #999999;
          font-size: 0.8em;

          float: left;

          position: absolute;
          left: 100%;
          top: 85%;
          transform: translate(-100%, -85%);
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .selectStyle {
      margin-top: 20px;
    }
    .portfolioStyle {
      .PortfolioBox:nth-child(2n + 2) {
        margin-right: 0;
      }
      .PortfolioBox {
        width: calc(100% / 2 - 10px);
        margin-right: 20px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .selectStyle {
      margin-top: 12px;
    }
    .portfolioStyle {
      margin-top: 24px;
      .PortfolioBox {
        width: calc(100% / 2 - 8px);

        margin: 0 16px 16px 0;

        .imgBox {
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
        width: 68px;
        height: 24px;
      }
    }
    .selectStyle {
      display: none;
    }
    .portfolioStyle {
      .PortfolioBox {
        width: calc(100% / 1);
        margin: 20px 0 0 0;
      }
    }
  }
  @media only screen and (max-width: 360px) {
    .optionStyle {
      margin: 2px;
    }
  }
`;

export default withRouter(PofolSelect);
