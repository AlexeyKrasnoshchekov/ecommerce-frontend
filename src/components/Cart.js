import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BusketLogoCart from "./Logos/BusketLogoCart";

//styles
import {
  CartContainer,
  CartImage,
  CartProductBrand,
  CartProductName,
  CartProductPrice,
  CartOutOfStock,
  CartToBusket,
} from "../styles/Cart.styles";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incart: false,
    };

    this.handleAddToBusketClick = this.handleAddToBusketClick.bind(this);
  }

  handleAddToBusketClick() {
    if (this.props.product.attributes.length !== 0) {
      alert("Please go to product page and choose attribute...");
    } else {
      let chosenAtt = { chosenAtt: [] };
      let amount = { amount: 1 };
      let toBusket = { ...this.props.product, ...chosenAtt, ...amount };

      this.props.setBusketProducts(toBusket);
    }
  }

  render() {
    return (
      <CartContainer
        style={{
          opacity: !this.props.product.inStock ? 0.5 : 1,
        }}
      >
        {this.props.product.gallery.map((image, index) => {
          return (
            index === 0 && (
              <div key={index}>
                {this.props.product.inStock && (
                  <CartToBusket
                    id="CartToBusket"
                    onClick={this.handleAddToBusketClick}
                  >
                    <BusketLogoCart />
                  </CartToBusket>
                )}
                <Link
                  to={`/ecommerce-frontend/${this.props.product.category}/${this.props.product.id}`}
                >
                  <CartOutOfStock
                    style={{
                      display: !this.props.product.inStock ? "block" : "none",
                    }}
                  >
                    Out of stock
                  </CartOutOfStock>
                  <CartImage
                    style={{ backgroundImage: `url(${image})` }}
                    alt="main logo"
                  ></CartImage>
                </Link>
              </div>
            )
          );
        })}
        <Link
          className="link"
          to={`/ecommerce-frontend/${this.props.product.category}/${this.props.product.id}`}
        >
          <CartProductBrand>{this.props.product.brand}</CartProductBrand>
        </Link>
        <Link
          className="link"
          to={`/ecommerce-frontend/${this.props.product.category}/${this.props.product.id}`}
        >
          <CartProductName>{this.props.product.name}</CartProductName>
        </Link>

        <CartProductPrice>
          {this.props.product.prices.map((price, index) => {
            return (
              price.currency.label === this.props.currency.label && (
                <div
                  key={index}
                >{`${price.currency.symbol}${price.amount}`}</div>
              )
            );
          })}
        </CartProductPrice>
      </CartContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    busketProducts: state.busket.busketProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBusketProducts: (busketProducts) =>
      dispatch({ type: "busket/setBusketProducts", payload: busketProducts }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
