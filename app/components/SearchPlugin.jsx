
import React, { Component } from 'react';
// import Router from 'react-router';
import AgeField from 'AgeField';
// import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

class NameField extends Component {
    constructor(props) {
        super(props);
        var isValid = this.validate(props.value);
        this.state = { value: props.value, valid: isValid };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        return val.length > 2;
    }
    onChange(e) {
        var val = e.target.value;
        var isValid = this.validate(val);
        this.setState({ value: val, valid: isValid });
    }
    render() {
        var color = this.state.valid === true ? "green" : "red";
        return <p>
            <label>Имя:</label><br />
            <input type="text" value={this.state.value} onChange={this.onChange} style={{ borderColor: color }} />
        </p>;
    }
}

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

module.exports = UserForm;
