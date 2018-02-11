import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <ul>
        {this.props.userStore.map((user, index) => {
          return (
            <li key={index} style={{ color: this.props.isMultiplicity }}>
              Name: {user.name}. Age: {user.age}
            </li>
          );
        })}
      </ul>
    );
  }
}

UserList.propTypes = {
  userStore: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    })
  ).isRequired
};

export default UserList;
