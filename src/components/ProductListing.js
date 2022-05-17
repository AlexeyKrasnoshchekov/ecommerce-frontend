import React, { Component } from "react";
import Cart from "../components/Cart";
import Loading from "../components/Loading";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { loadProducts } from "../store/productsReducer";

//styles
import {
  PLPcontainer,
  PLPheader,
  ListingContainer,
} from "../styles/PLP.styles";

class ProductListing extends Component {
  componentDidMount() {
    if (this.props.categoryParams !== undefined) {
      this.props.categoryParams === this.props.category &&
        this.props.saveProductsToStore(this.props.category);

      this.props.saveCategoryToStore(this.props.categoryParams);
      this.props.saveProductsToStore(this.props.categoryParams);
    } else {
      this.props.saveProductsToStore(this.props.category);
    }
  }
  render() {
    return (
      <PLPcontainer>
        <PLPheader>{this.props.category}</PLPheader>

        {this.props.isLoading ? (
          <Loading />
        ) : (
          <ListingContainer>
            {this.props.products.map((prod, index) => {
              return (
                <Cart
                  product={prod}
                  key={index}
                  currency={this.props.currency}
                />
              );
            })}
          </ListingContainer>
        )}
      </PLPcontainer>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.categoryParams !== prevProps.categoryParams) {
      this.props.saveProductsToStore(this.props.categoryParams);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const cat = ownProps.match.params.category;

  return {
    products: state.products.allProducts,
    categoryParams: cat,
    category: state.products.category,
    isLoading: state.products.isLoadingProducts,
    currency: state.currencies.currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveProductsToStore: (cat) => loadProducts(cat)(dispatch),
    saveCategoryToStore: (cat) =>
      dispatch({ type: "products/setCategory", payload: cat }),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListing);
