/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import AboutPage from "./AboutPage";
import Chores from "./Chores/Chores";
import Bills from "./Bills/Bills"
import FixItTickets from "./FixItTickets/FixItTickets"
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
    render() {
        const activeStyle = { color: 'blue' };
        return (
            <div>
                <div>
                    <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                    {' | '}
                    <NavLink to="/chores" activeStyle={activeStyle}>Chores</NavLink>
                    {' | '}
                    <NavLink to="/bills" activeStyle={activeStyle}>Bills</NavLink>
                    {' | '}
                    <NavLink to="/fixittickets" activeStyle={activeStyle}>Fix-it Tickets</NavLink>
                    {' | '}
                    <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                </div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/chores" component={Chores} />
                    <Route path="/bills" component={Bills} />
                    <Route path="/fixittickets" component={FixItTickets} />
                    <Route path="/about" component={AboutPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);
