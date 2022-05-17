import React, { Component } from "react";
import styled from "styled-components";
import busket from "../../logo/busketWhite/busket.png";
import wheel from "../../logo/busketWhite/wheel.png";
import "../../App.css";

export default class BusketLogoCart extends Component {
  render() {
    return (
      <>
        <BusketLogo>
          <img src={busket} alt="busket logo"></img>
        </BusketLogo>
        <BusketWheel>
          <img src={wheel} alt="busket logo"></img>
        </BusketWheel>
        <BusketWheel>
          <img className="busketLogoWheel" src={wheel} alt="busket logo"></img>
        </BusketWheel>
      </>
    );
  }
}
const BusketLogo = styled.div`
  position: absolute;
  left: 40%;
  top: 40%;
  transform: translate(-50%, -50%);
  height: 13px;
  width: 20px;
  z-index: 1;
`;
const BusketWheel = styled.div`
  position: absolute;
  left: 40%;
  top: 40%;
  transform: translate(-50%, 20%);
  height: 4px;
  width: 4px;
  z-index: 2;
`;
