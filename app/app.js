import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from './components/UserForm.js';
import UserList from './components/UsersList.js';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = [
    { name: 'Jon', age: 12 },
    { name: 'Sanny', age: 20 },
    { name: 'Rose', age: 18 }
]

const users = (state = initialState, action) => {
    if(action.type === 'ADD_USER'){
        return [
            ...state,
            action.payload
        ]
    }
    return state; 
}

const store = createStore(users);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={UserForm} />
                    <Route exact path="/userlist" component={UserList} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById("app")
);