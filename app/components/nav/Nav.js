import React from "react";
require("./nav.scss");

import { Link, BrowserRouter } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/" >
          Home
        </Link>
        <Link to="/userlist" className='test'>
          List of users
        </Link>
        <Link to="/productlist" >
          List of products
        </Link>
      </div>
    );
  }
}

export default Nav;
