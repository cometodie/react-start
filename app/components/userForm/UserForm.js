import React, { Component } from "react";
import Router from "react-router";
import AgeField from "../ageField/AgeField";
import NameField from "../nameField/NameField";
import actions from "../../actions/actions.js";
import { connect } from "react-redux";

class UserForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var name = this.refs.nameField.state.value;
    var age = parseInt(this.refs.ageField.state.value);
    if (this.refs.nameField.state.valid && this.refs.ageField.state.valid) {
      this.props.onSubmitForm({ name: name, age: age });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NameField value="" ref="nameField" />
        <AgeField value="5" ref="ageField" />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

export default UserForm;
