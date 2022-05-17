import React, { Component } from "react";
import mainLogo from "../../logo/mainLogo/logo.png";
import mainLogo2 from "../../logo/mainLogo/logo2.png";
import styled from "styled-components";

export default class MainLogo extends Component {
  render() {
    return (
      <>
        <HeaderLogo>
          <img src={mainLogo} alt="main logo"></img>
        </HeaderLogo>
        <HeaderLogo2>
          <img src={mainLogo2} alt="main logo"></img>
        </HeaderLogo2>
      </>
    );
  }
}

const HeaderLogo = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 31px;
  width: 31px;
  z-index: 1;
`;

const HeaderLogo2 = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
  height: 9px;
  width: 14px;
  z-index: 2;
`;
