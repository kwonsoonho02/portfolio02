/*global kakao*/
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import mailIcon72 from "../image/mail-72.png";
import phoneIcon72 from "../image/phone-72.png";
import markerIcon from "../image/marker.png";

import "./kakao.scss";

//  test

const ContactInfo = () => {
  const mapRef = useRef();

  useEffect(() => {
    let options1 = {
      center: new window.kakao.maps.LatLng(37.469891, 126.887686),
      level: 3,
    };
    let options2 = {
      center: new window.kakao.maps.LatLng(37.468555, 126.887596),
      level: 3,
    };
    var mapWidth = window.innerWidth;
    let map;
    if (mapWidth <= 480) {
      map = new window.kakao.maps.Map(mapRef.current, options2);
    } else {
      map = new window.kakao.maps.Map(mapRef.current, options1);

      let content = `<div class="ContactBoxKakao">
    <div class="afterStyleKakao">
      <div class="afterBoxKakao">
        <p class="mainTextKakao">
          CONTACT<span>TO</span>
        </p>
        <p class="postKakao">(우) 08591</p>
        <p class="addressKakao">
          서울특별시 금천구 가산디지털1로 24,<br /> 대륭테크노타운13차 701호
        </p>
        <p class="e_addressKakao">
          24, Gasan digital 1-ro, Geumcheon-gu,<br /> Seoul, Republic of Korea
        </p>
        <div class="contactStyleKakao">
          <div class="contactStyleBoxKakao">
            <img src=${mailIcon72} alt=${mailIcon72} />
          </div>
          <div class="contactStyleBoxKakao">
            <img src=${phoneIcon72} alt=${phoneIcon72} />
          </div>
        </div>
      </div>
    </div>
</div>`;

      let position = new kakao.maps.LatLng(37.468355, 126.887696);

      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,

        xAnchor: 0.5,
        yAnchor: 1.15,
      });
      customOverlay.setMap(map);
    }

    let markerPosition = new window.kakao.maps.LatLng(37.468355, 126.887696);

    let icon = new window.kakao.maps.MarkerImage(
      markerIcon,
      new window.kakao.maps.Size(31, 35),
      {
        offset: new window.kakao.maps.Point(16, 34),
      }
    );

    let marker = new window.kakao.maps.Marker({
      image: icon,
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);
  return (
    <ContactInfoStyle>
      <div className="mapBox" ref={mapRef}></div>
      <div className="ContactBox">
        <div className="afterStyle">
          <div className="afterBox">
            <p className="mainText">
              CONTACT<span>TO</span>
            </p>
            <p className="post">(우) 08591</p>
            <p className="address">
              서울특별시 금천구 가산디지털1로 24, 대륭테크노타운13차 701호
            </p>
            <p className="e_address">
              24, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of Korea
            </p>
            <div className="contactStyle">
              <div className="contactStyleBox">
                <img src={mailIcon72} alt={mailIcon72} />
              </div>
              <div className="contactStyleBox">
                <img src={phoneIcon72} alt={phoneIcon72} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactInfoStyle>
  );
};

const ContactInfoStyle = styled.div`
  width: 100%;
  height: 640px;

  position: relative;
  margin: 100px 0 100px 0;
  .mapBox {
    width: calc(100% - 400px);
    height: 640px;
    background: #c4c4c4;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    float: left;

    & .ContentBox {
      width: 100px;
      height: 100px;
      background: red;
    }
  }

  .ContactBox {
    width: 280px;
    height: 352px;

    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

    display: none;

    .afterStyle {
      width: 100%;
      height: 100%;

      position: relative;

      &:after {
        position: absolute;
        bottom: -19px;
        left: calc(50% - 20px);
        content: " ";
        height: 0;
        z-index: -1;
        border-bottom: 20px solid;
        border-left: 20px solid rgba(0, 0, 0, 0);
        border-right: 20px solid rgba(0, 0, 0, 0);
        color: #ffffff;
        transform: rotate(-180deg);
      }

      .afterBox {
        width: calc(100% - 35px);
        height: calc(100% - 30px);

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .mainText {
          width: 100%;
          height: 40px;

          border-bottom: 1px solid #cccccc;

          display: block;

          color: #000000;
          font-size: 1.1em;
          font-weight: 600;

          span {
            font-size: 0.8em;

            margin-left: 5px;
          }
        }
        .post {
          width: 100%;
          height: 50px;

          line-height: 50px;
          font-weight: 600;

          margin-bottom: 5px;
        }
        .address {
          width: 100%;
          height: 50px;

          font-weight: 500;

          margin-bottom: 5px;

          font-size: 0.9em;
        }
        .e_address {
          width: 100%;
          height: 55px;

          font-weight: 400;
          font-size: 0.85em;

          border-bottom: 1px solid #cccccc;
        }
        .contactStyle {
          width: 100%;
          height: 100px;

          position: absolute;
          left: 50%;
          top: 99%;
          transform: translate(-50%, -99%);

          display: flex;
          justify-content: space-around;
          align-items: center;
          .contactStyleBox {
            width: 72px;
            height: 72px;

            border-radius: 50%;
            background: #cccccc;

            float: left;
          }
        }
      }
    }
  }

  .ContactButton {
    width: 36px;
    height: 56px;

    background: #ee0033;

    border-radius: 50px;

    position: absolute;
    left: 50%;
    top: 83%;
    transform: translate(-50%, -83%);
  }

  @media only screen and (max-width: 1300px) {
    .mapBox {
      width: calc(100% - 100px);
      height: 640px;
      background: #c4c4c4;

      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      float: left;
    }
    .ContactBox {
    }
  }

  @media only screen and (max-width: 480px) {
    margin: 0 0 56px 0;
    .mapBox {
      width: 100%;
      height: 208px;

      position: absolute;
      left: 50%;
      top: 0%;
      transform: translate(-50%, -0%);
    }
    .ContactBox {
      height: 352px;
      width: 100%;

      position: absolute;
      left: 50%;
      top: 70%;
      transform: translate(-50%, -70%);

      box-shadow: 0 0 0 rgba(0, 0, 0, 0);

      display: block;
      .afterStyle {
        &:after {
          position: absolute;
          bottom: 0;
          left: 0;
          content: " ";
          height: 0;
          z-index: 0;
          border-bottom: 0 solid;
          border-left: 0 solid rgba(0, 0, 0, 0);
          border-right: 0 solid rgba(0, 0, 0, 0);
          color: #ffffff;
          transform: rotate(0);
        }
      }
    }
  }
`;

export default ContactInfo;
