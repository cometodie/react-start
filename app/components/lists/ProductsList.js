import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card } from "material-ui/Card";
import { List, ListItem } from "material-ui/List";
require('./list.scss');

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.productsStore.map((product, index) => (
      <List key={index}>
        Name: {product.name}. Cost: {product.cost}
      </List>
    ));
    return (
      <Card className='card'>
        <ListItem>{products}</ListItem>
      </Card>
    );
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
