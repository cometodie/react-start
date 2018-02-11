import { connect } from "react-redux";
import ProductList from "../components/lists/ProductsList";

const mapStateToProps = state => {
  return {
    productsStore: state.products
  };
};

export default connect(mapStateToProps, dispatch => ({}))(ProductList);
