import Container from "./components/Container";
import ProductListing from "./components/ProductListing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loadCurrencies } from "./store/currenciesReducer";
import { loadCategories } from "./store/categoriesReducer";
import ProductPage from "./components/ProductPage";
import Busket from "./components/Busket";

class App extends Component {
  constructor(props) {
    super(props);
    this.selectCurrency = this.selectCurrency.bind(this);
  }

  componentDidMount() {
    this.props.saveCurrenciesToStore();
    this.props.saveCategoriesToStore();
  }

  selectCurrency(e) {
    this.setState({
      currency: e.target.value,
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/cart">
            <Container>
              <Busket />
            </Container>
          </Route>
          <Route path="/:category/:id">
            <Container>
              <ProductPage />
            </Container>
          </Route>
          <Route path="/:category">
            <Container>
              <ProductListing />
            </Container>
          </Route>

          <Route path="/">
            <Container>
              <ProductListing />
            </Container>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.products.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrenciesToStore: () => loadCurrencies()(dispatch),
    saveCategoriesToStore: () => loadCategories()(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
