import React from 'react';

import Dashboard from '../dashboard/Dashboard';
import ReadNow from '../readNow/ReadNow';
import Login from '../login/Login';

import { Link, BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';

const Header = () => {
    return(
        <div>
        <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a data-testid="header" className="navbar-brand" href="https://newsapi.org/"> News API </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link id="dashboard" className="nav-link" to="/">Dashboard </Link>
                </li>
                <li className="nav-item active">
                    <Link id="readnow" className="nav-link" to="/readnow">Read Now </Link>
                </li>
                <li className="nav-item active">
                    <Link id= "login"  className="nav-link" to="/login">Login </Link>
                </li>
                </ul>
            </div>

            </nav>
            <Switch>
                <Route exact path = "/" component = {()=> localStorage.getItem('isAuthenticated') ? <Dashboard/> :<Redirect to="/login" />} />          
                <Route exact path = "/readnow" component = {()=> localStorage.getItem('isAuthenticated') ? <ReadNow/> :<Redirect to="/login" />} />          
                <Route exact path = "/login" component ={Login} />          
            </Switch>
            </BrowserRouter>    
         </div>
    );
}

export default Header;
