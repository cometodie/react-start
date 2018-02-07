
import React, { Component } from 'react';
import Router from 'react-router';
import AgeField from './AgeField';
import NameField from './NameField';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        var name = this.refs.nameField.state.value;
        var age = this.refs.ageField.state.value;
        if (this.refs.nameField.state.valid && this.refs.ageField.state.valid) {
            alert("Имя: " + name + " Возраст: " + age);
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
