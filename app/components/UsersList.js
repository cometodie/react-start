import React, { Component } from 'react';

class UserList extends Component {
    constructor(props){
        super(props);
        this.state = { 
            users: [
                { id: 0, name: 'Jon' },
                { id: 1, name: 'Sanny' },
                { id: 2, name: 'Rose' }
            ]}
    }

    render() {
        // const listItems = this.state.users.map((user, index) =>
        //     <li key={index}>{user.name}</li>
        // );
        return <ul>{
                this.state.users.map((user, index) => {
                    return <li key={index}>{user.name}</li>;
                })}
            </ul>
    }
}

export default UserList;