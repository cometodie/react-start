import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserForm from './components/SearchPlugin.js';
import UserList from './components/UsersList.js';
import Nav from './components/Nav';

ReactDOM.render(
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={UserForm} />
                <Route exact path="/userlist" component={UserList} />
            </Switch>
        </div>
    </Router>,
    document.getElementById("app")
);