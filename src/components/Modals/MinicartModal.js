import React, { Component } from "react";
import Modal from "react-modal";
import "../../App.css";

import Minicart from "../Minicart";
Modal.setAppElement("#root");

export default class MinicartModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.toggleModalMinicart}
        contentLabel="My dialog"
        className="busket_modal"
        overlayClassName="busket_modal_overlay"
      >
        <Minicart toggleModalMinicart={this.props.toggleModalMinicart} />
      </Modal>
    );
  }
}
