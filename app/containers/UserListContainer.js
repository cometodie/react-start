import { connect } from "react-redux";

import UserList from "../components/lists/UsersList";
import { getUsers } from "../actions/actions";

const getMultiplicity = usersLength => {
  return usersLength % 2 == 0 ? "blue" : "red";
};

const mapStateToProps = state => {
  return {
    userStore: state.users,
    isMultiplicity: getMultiplicity(state.users.length)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
