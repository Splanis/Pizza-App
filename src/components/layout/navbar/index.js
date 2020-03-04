import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { DropdownItems } from "./DropdownItems";
import { categories } from "../../../store/categories";
import AuthLinks from "./AuthLinks";
import NotAuthLinks from "./NotAuthLinks";

import { Menu, Input } from "semantic-ui-react";

const Navbar = () => {
    const isUser = useSelector(state => (state.firebase.auth.uid ? true : false));
    const userFirstName = useSelector(state => state.firebase.profile.firstName);

    return (
        <>
            <Menu style={{ margin: 0, height: 60 }}>
                <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
                    <Menu.Item position="left">
                        <p>This is Logo</p>
                    </Menu.Item>
                </Link>
                <Menu.Item position="right">
                    <Input placeholder="Αναζήτηση..." />
                </Menu.Item>
                <Menu.Item position="right">{isUser ? <AuthLinks userFirstName={userFirstName} /> : <NotAuthLinks />}</Menu.Item>
            </Menu>
            <Menu inverted style={{ marginTop: 0, height: 40, borderRadius: 0 }}>
                <Menu.Item>
                    {categories.map(category => (
                        <DropdownItems key={category.id} category={category} />
                    ))}
                </Menu.Item>
            </Menu>
        </>
    );
};

export default Navbar;
