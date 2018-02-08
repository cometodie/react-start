import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from './components/userForm/UserForm';
import UserList from './components/userList/UsersList';
import Nav from './components/nav/Nav';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

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