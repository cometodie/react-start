import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        // const listItems = this.state.users.map((user, index) =>
        //     <li key={index}>{user.name}</li>
        // );
        return <ul>{
                this.props.userStore.map((user, index) => {
                    return <li>Name: {user.name}. Age: {user.age}</li>;
                })}
            </ul>
    }
}

export default connect(
    state => ({
        userStore: state.users
    }),
    dispatch => ({})
 )(UserList);