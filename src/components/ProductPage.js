import React, { Component } from "react";
import parse from "html-react-parser";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { compose } from "redux";
import Loading from "../components/Loading";
import "../App.css";
import { loadProduct } from "../store/productReducer";

//styles
import {
  ProductComponent,
  ProductImageRow,
  ProductImageRowItem,
  ProductMainImage,
  ProductInfo,
  PLPdescription,
  ProductBrand,
  ProductName,
  PDPheading,
  PLPprice,
  PDPbutton,
  AttList,
  AttItem,
} from "../styles/PDP.styles";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0,
      clickedAtts: [],
      swatch: false,
      activeAtt: [],
    };
    this.setCurrentImage = this.setCurrentImage.bind(this);
    this.setCurrentAtt = this.setCurrentAtt.bind(this);
    this.handleAddToBusketClick = this.handleAddToBusketClick.bind(this);
  }

  async componentDidMount() {
    await this.props.saveProductToStore(this.props.productId);
    !this.props.isLoading && this.props.setCustomAttributes();
  }

  setCurrentImage(index) {
    this.setState({
      currentImageIndex: index,
    });
  }

  handleAttClick(attType, attValue) {
    this.setCurrentAtt(attType, attValue);
    this.props.setActiveAtt(attType, attValue);
  }

  setCurrentAtt(attType, attValue) {
    let attObj = {
      attId: attType,
      attItemId: attValue,
    };

    if (this.props.chosenAtts.length !== 0) {
      let attIds = [];
      this.props.chosenAtts.forEach((att) => {
        attIds.push(att.attId);
        if (att.attId === attType && att.attItemId !== attValue) {
          this.props.updateChosenAtts(attObj);
        }
      });

      if (!attIds.includes(attType)) {
        this.props.setChosenAtts(attObj);
      }
    } else {
      this.props.setChosenAtts(attObj);
    }
  }

  checkAttChosen() {
    if (this.props.chosenAtts.length === 0) {
      let stringOfAtt = "";

      for (let i = 0; i < this.props.product.attributes.length; i++) {
        if (i < this.props.product.attributes.length - 1) {
          stringOfAtt += `${this.props.product.attributes[i].id} and `;
        }
        if (i === this.props.product.attributes.length - 1) {
          stringOfAtt += `${this.props.product.attributes[i].id}`;
        }
      }
      alert(`Please choose ${stringOfAtt} `);
      return;
    }

    if (this.props.product.attributes.length > this.props.chosenAtts.length) {
      alert("Select all attributes of the product...");
      return;
    }
  }

  handleAddToBusketClick() {
    this.checkAttChosen();

    let chosenAtt = { chosenAtt: this.props.chosenAtts };
    let amount = { amount: 1 };

    let toBusketProducts = { ...this.props.product, ...chosenAtt, ...amount };

    this.props.setBusketProducts(toBusketProducts);
    this.props.clearActiveAtt();
  }

  render() {
    return (
      <div className="pdpContainer">
        <div>
          {this.props.isLoading ? (
            <Loading />
          ) : (
            <div>
              {this.props.product.gallery && (
                <ProductComponent>
                  <ProductImageRow>
                    {this.props.product.gallery.map((image, index) => {
                      return (
                        <ProductImageRowItem
                          key={index}
                          style={{ backgroundImage: `url(${image})` }}
                          onClick={() => this.setCurrentImage(index)}
                          alt="product photo"
                        ></ProductImageRowItem>
                      );
                    })}
                  </ProductImageRow>

                  <ProductMainImage
                    style={{
                      backgroundImage: `url(${
                        this.props.product.gallery[this.state.currentImageIndex]
                      })`,
                    }}
                    alt="main logo"
                  ></ProductMainImage>
                  <ProductInfo>
                    <ProductBrand>{this.props.product.brand}</ProductBrand>
                    <ProductName>{this.props.product.name}</ProductName>
                    <AttList>
                      {this.props.prodAtts.length !== 0 &&
                        this.props.prodAtts.map((att, index) => {
                          return (
                            <div key={index} className="pdpAttListContainer">
                              <PDPheading>{`${att.id}:`}</PDPheading>
                              <div className="pdpAttList">
                                {att.items.map((attItem) => {
                                  return (
                                    <AttItem
                                      key={attItem.value}
                                      style={{
                                        backgroundColor: attItem.value.includes(
                                          "#"
                                        )
                                          ? attItem.value
                                          : "white",
                                      }}
                                      className={[
                                        attItem.active && !attItem.isSwatch
                                          ? "activeAtt"
                                          : null,
                                        attItem.isSwatch && attItem.active
                                          ? "activeSwatch"
                                          : null,
                                      ]}
                                      onClick={() => {
                                        this.handleAttClick(
                                          att.id,
                                          attItem.value
                                        );
                                      }}
                                      id={attItem.value}
                                    >
                                      {!attItem.value.includes("#") &&
                                        attItem.value}
                                    </AttItem>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })}
                    </AttList>
                    <PDPheading>Price:</PDPheading>
                    <div>
                      {this.props.product.prices.map((price, index) => {
                        return (
                          price.currency.label ===
                            this.props.currency.label && (
                            <PLPprice
                              key={index}
                            >{`${price.currency.symbol}${price.amount}`}</PLPprice>
                          )
                        );
                      })}
                    </div>
                    {this.props.product.inStock ? (
                      <PDPbutton onClick={this.handleAddToBusketClick}>
                        Add to cart
                      </PDPbutton>
                    ) : (
                      <p className="pdpOutOfStock">
                        Product is out of stock...
                      </p>
                    )}
                    <PLPdescription>
                      {parse(this.props.product.description)}
                    </PLPdescription>
                  </ProductInfo>
                </ProductComponent>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.product !== prevProps.product) {
      this.props.saveProductToStore(this.props.productId);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    productId: id,
    currency: state.currencies.currency,
    product: state.product.product,
    isLoading: state.product.isLoadingProduct,
    busketProducts: state.busket.busketProducts,
    chosenAtts: state.busket.chosenAtts,
    prodAtts: state.product.prodAtts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveProductToStore: (productId) => loadProduct(productId)(dispatch),
    clearActiveAtt: () => dispatch({ type: "product/clearActiveAtt" }),
    setCustomAttributes: () =>
      dispatch({ type: "product/setCustomAttributes" }),

    setBusketProducts: (busketProducts) =>
      dispatch({ type: "busket/setBusketProducts", payload: busketProducts }),

    saveCounterForProduct: (amount) =>
      dispatch({ type: "busket/saveCounterForProduct", payload: amount }),

    setChosenAtts: (att) =>
      dispatch({ type: "busket/setChosenAtts", payload: att }),

    updateChosenAtts: (att) =>
      dispatch({ type: "busket/updateChosenAtts", payload: att }),

    setActiveAtt: (attType, attValue) =>
      dispatch({
        type: "product/setActiveAtt",
        payload: { attType: attType, attValue: attValue },
      }),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProductPage);
