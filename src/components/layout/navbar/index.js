import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import AuthLinks from "./AuthLinks";
import NotAuthLinks from "./NotAuthLinks";

import { Menu, Input } from "semantic-ui-react";

const Navbar = () => {
    const isUser = useSelector(state => (state.firebase.auth.uid ? true : false));
    const displayName = useSelector(state => state.firebase.auth.displayName);

    return (
        <Menu inverted style={{ display: "flex", height: 70, width: "100%", position: "fixed", top: 0 }}>
            <Link to="/" style={{ display: "flex", justifyContent: "center", marginRight: "auto" }}>
                <Menu.Item>
                    <p>This is Logo</p>
                </Menu.Item>
            </Link>
            <Menu.Item style={{ margin: "auto" }}>
                <Input inverted placeholder="Αναζήτηση..." />
            </Menu.Item>
            <Menu.Item style={{ marginLeft: "auto" }}>{isUser ? <AuthLinks displayName={displayName} /> : <NotAuthLinks />}</Menu.Item>
        </Menu>
    );
};

export default Navbar;
