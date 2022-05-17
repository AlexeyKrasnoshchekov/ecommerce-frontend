import React, { Component } from "react";
import styled from "styled-components";
import busketLogo from "../../logo/busket/busketBlack.png";
import busketWheel from "../../logo/busket/wheel.png";
import "../../App.css";

export default class BusketLogoHeader extends Component {
  render() {
    return (
      <>
        <BusketLogo>
          <img src={busketLogo} alt="busket logo"></img>
        </BusketLogo>
        <BusketWheel>
          <img src={busketWheel} alt="busket logo"></img>
        </BusketWheel>
        <BusketWheel>
          <img
            className="busketLogoWheel"
            src={busketWheel}
            alt="busket logo"
          ></img>
        </BusketWheel>
      </>
    );
  }
}
const BusketLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -60%);
  height: 13px;
  width: 20px;
  z-index: 1;
`;
const BusketWheel = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, -60%);
  height: 4px;
  width: 4px;
  z-index: 2;
`;
