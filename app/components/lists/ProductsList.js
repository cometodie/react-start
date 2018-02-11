import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.productsStore.map((product, index) => (
      <li key={index}>
        Name: {product.name}. Cost: {product.cost}
      </li>
    ));
    return <ul>{products}</ul>;
  }
}

ProductList.propTypes = {
  productsStore: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ProductList;
