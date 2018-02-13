import { combineReducers } from "redux";

import users from "./users";
import products from "./products";
import loading from "./loader";

export default combineReducers({
  loading,
  users,
  products
});
