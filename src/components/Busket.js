import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import BusketItem from "./BusketItem";

class Busket extends Component {
  render() {
    return (
      <Container>
        <CartTitle>Cart</CartTitle>
        {(this.props.busketProducts.length !== 0
          ? this.props.busketProducts
          : this.props.busketProducts
        ).map((product, index) => {
          return (
            <BusketItem
              busket={true}
              key={product.id}
              product={product}
              productIndex={index}
            />
          );
        })}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    busketProducts: state.busket.busketProducts,
  };
};

export default connect(mapStateToProps)(Busket);

const Container = styled.div`
  display: block;
  padding-right: 242px;
  padding-left: 100px;
`;
const CartTitle = styled.h2`
  font-family: Raleway;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  text-transform: uppercase;
  margin-top: 80px;
  margin-bottom: 80px;
`;
