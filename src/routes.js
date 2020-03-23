import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Cart from "./pages/cart";
import Profile from "./pages/profile";

const Routes = () => {
    const isUser = useSelector(state => (state.auth.profile ? true : false));

    if (isUser) {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/profile" component={Profile} />
                <Redirect to="/" />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/register" component={Register} />
                <Redirect to="/" />
            </Switch>
        );
    }
};

export default Routes;
