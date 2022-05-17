import React, { Component } from "react";
import { connect } from "react-redux";
import MainLogo from "./Logos/MainLogo";
import BusketLogoHeader from "./Logos/BusketLogoHeader";
import { NavLink } from "react-router-dom";
import MinicartModal from "./Modals/MinicartModal";
import CurrencySelectorModal from "./Modals/CurrencySelectorModal";
import "../App.css";

//styles
import {
  HeaderComponent,
  CategoriesList,
  CategoryItem,
  BasketArea,
  BasketCount,
  Arrow,
} from "../styles/Header.styles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMinicart: false,
      isOpenSelector: false,
    };
    this.selectorArrow = React.createRef();
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.toggleModalMinicart = this.toggleModalMinicart.bind(this);
    this.toggleModalSelector = this.toggleModalSelector.bind(this);
  }

  handleCategoryClick(cat) {
    this.props.saveCategoryToStore(cat);
  }

  toggleModalMinicart() {
    this.setState({ isOpenMinicart: !this.state.isOpenMinicart });
  }
  toggleModalSelector() {
    this.setState({ isOpenSelector: !this.state.isOpenSelector });
    if (!this.state.isOpenSelector) {
      this.selectorArrow.current.style.transform = "rotate(270deg)";
    } else {
      this.selectorArrow.current.style.transform = "rotate(90deg)";
    }
  }

  render() {
    return (
      <HeaderComponent>
        <CategoriesList>
          {this.props.categoryNames.map((cat) => {
            let active = cat === this.props.category;
            return (
              <NavLink className="navLink" key={cat} to={`/ecommerce-frontend/${cat}`}>
                <CategoryItem
                  onClick={() => this.handleCategoryClick(cat)}
                  style={{
                    borderBottom: active && "solid",
                    borderBottomWidth: active && "2px",
                    borderColor: active && "#5ECE7B",
                    color: active && "#5ECE7B",
                  }}
                  key={cat}
                >
                  {cat}
                </CategoryItem>
              </NavLink>
            );
          })}
        </CategoriesList>
        <MainLogo />
        <BasketArea>
          <div
            className="currencySelectorArea"
            onClick={this.toggleModalSelector}
          >
            <span className="busketCounterHeader">
              {this.props.currency.symbol}
            </span>
            <Arrow ref={this.selectorArrow}>{">"}</Arrow>
          </div>
          <div
            className="busketLogoContainer"
            onClick={this.toggleModalMinicart}
          >
            {this.props.busketCounter !== 0 && (
              <BasketCount>{this.props.busketCounter}</BasketCount>
            )}
            <BusketLogoHeader />
          </div>

          <MinicartModal
            isOpen={this.state.isOpenMinicart}
            toggleModalMinicart={this.toggleModalMinicart}
          />
          <CurrencySelectorModal
            isOpen={this.state.isOpenSelector}
            toggleModalSelector={this.toggleModalSelector}
          />
        </BasketArea>
      </HeaderComponent>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.products.allProducts,
    categoryNames: state.categories.categoryNames,
    currency: state.currencies.currency,
    category: state.products.category,
    busketCounter: state.busket.busketCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCategoryToStore: (cat) =>
      dispatch({ type: "products/setCategory", payload: cat }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


