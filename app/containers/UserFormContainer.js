import { connect } from "react-redux";
import { addUser } from "../actions/actions";
import UserForm from "../components/UserForm/UserForm";

const mapStateToProps = state => {
  return {
    userStore: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: user => {
      dispatch(addUser(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
