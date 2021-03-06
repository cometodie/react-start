import { combineReducers } from "redux";

import notes from "./notes";
import loading from "./loader";
import sidebar from "./sidebar";
import snackbar from "./snackbar";

export default combineReducers({
  loading,
  sidebar,
  notes,
  snackbar
});
