import React from "react";
import styles from "./nav.css";

import { Link, BrowserRouter } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/" className={styles.item}>
          Home
        </Link>
        <Link to="/userlist" className={styles.item}>
          List of users
        </Link>
        <Link to="/productlist" className={styles.item}>
          List of products
        </Link>
      </div>
    );
  }
}

export default Nav;
