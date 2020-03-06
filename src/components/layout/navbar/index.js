import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import AuthLinks from "./AuthLinks";
import NotAuthLinks from "./NotAuthLinks";

import { Menu, Icon } from "semantic-ui-react";

const quantity = {
    backgroundColor: "red",
    color: "white",
    fontSize: 16,
    fontWeight: 700,
    position: "absolute",
    borderRadius: "50%",
    height: 25,
    width: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "translate(100%, -180%)"
};

const Navbar = () => {
    const isUser = useSelector(state => (state.firebase.auth.uid ? true : false));
    const displayName = useSelector(state => state.firebase.auth.displayName);
    const cartQuantity = useSelector(state => state.cart.quantity);

    return (
        <Menu inverted style={{ display: "flex", height: 70, width: "100%", top: 0 }}>
            <Link to="/" style={{ display: "flex", justifyContent: "center", marginRight: "auto" }}>
                <Menu.Item>
                    <p>This is Logo</p>
                </Menu.Item>
            </Link>
            {/* <Menu.Item style={{ margin: "auto" }}>
                <Input inverted placeholder="Αναζήτηση..." />
            </Menu.Item> */}
            <Menu.Item style={{ marginLeft: "auto" }}>{isUser ? <AuthLinks displayName={displayName} /> : <NotAuthLinks />}</Menu.Item>
            <Menu.Item>
                <Link to="/cart" style={{ color: "white" }}>
                    <Icon style={{ margin: 5, position: "relative" }} size="big" name="shopping cart" />
                    <span style={quantity}>{cartQuantity}</span>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
