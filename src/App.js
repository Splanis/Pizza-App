import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import { Container } from "./components/shared/Container";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Container>
                <Routes />
            </Container>
            <Footer />
        </Router>
    );
};

export default App;
