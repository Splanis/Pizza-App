import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/homepage";
import { Navbar } from "./components/layout/navbar";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Cart } from "./pages/cart";
import { Category } from "./pages/category";

import { Container } from "semantic-ui-react";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100%" }}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/category/:category/:subcategory" component={Category} />
                </Switch>
            </Container>
        </Router>
    );
};

export default App;
