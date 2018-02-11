import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import reducer from "./reducers";
import UserListContainer from "./containers/UserListContainer";
import UserFormContainer from "./containers/UserFormContainer";
import ProductListContainer from "./containers/ProductListContainer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={UserFormContainer} />
          <Route exact path="/userlist" component={UserListContainer} />
          <Route exact path="/productlist" component={ProductListContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("app")
);
