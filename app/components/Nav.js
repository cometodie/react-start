import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';
 
class Nav extends React.Component{
    render(){
        return <div>
                <Link to="/">Home</Link> 
                <Link to="/userlist">List of users</Link>
              </div>;
    }
}

export default Nav;