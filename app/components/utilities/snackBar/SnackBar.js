import Snackbar from "material-ui/Snackbar";
import React from "react";
import { connect } from "react-redux";
import { showSnackbar } from "../../../actions/actions";

class SnackBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.message.length > 0
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message.length > 0) {
      this.setState({ open: true });
    }
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
    this.props.showSnackbar("");
  }

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message={this.props.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      message: state.snackbar
    };
  },
  dispatch => {
    return {
      showSnackbar: message => {
        dispatch(showSnackbar(message));
      }
    };
  }
)(SnackBar);
