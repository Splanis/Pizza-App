import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import Navbar from "./components/layout/navbar";

import { Container } from "semantic-ui-react";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Container style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100%" }}>
                <Routes />
            </Container>
        </Router>
    );
};

export default App;
