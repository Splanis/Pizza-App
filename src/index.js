import React from "react";
import ReactDOM from "react-dom";

import { Provider, useSelector } from "react-redux";

import store from "./store/store";
import App from "./App";
import Spinner from "./components/shared/Spinner";
import GlobalTheme from "./components/shared/GlobalTheme";

const root = document.getElementById("root");

// const AuthIsLoaded = ({ children }) => {
//     const auth = useSelector(state => state.auth.auth_token);
//     if (!isLoaded(auth)) return <Spinner />;
//     return children;
// };

ReactDOM.render(
    <Provider store={store}>
        <GlobalTheme />
        <App />
    </Provider>,
    root
);
