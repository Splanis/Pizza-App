import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import Dashboard from "./pages/dashboard";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import SignOut from "./pages/signout";
import Cart from "./pages/cart";
import Category from "./pages/category";

const Routes = () => {
    const isUser = useSelector(state => (state.firebase.auth.uid ? true : false));

    if (isUser) {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/category/:category/:subcategory" component={Category} />
                <Route exact path="/logout" component={SignOut} />
                <Route exact path="/profile" />
                <Redirect to="/" />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/login" component={SignIn} />
                <Route exact path="/register" component={SignUp} />
                <Route exact path="/category/:category/:subcategory" component={Category} />
                <Redirect to="/" />
            </Switch>
        );
    }
};

export default Routes;
