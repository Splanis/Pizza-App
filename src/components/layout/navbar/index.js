import React from "react";
import { Link } from "react-router-dom";

import { DropdownItems } from "./DropdownItems";
import { categories } from "../../../store/categories";

import { Menu, Button, Input, Icon } from "semantic-ui-react";

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

export const Navbar = props => {
    return (
        <>
            <Menu style={{ margin: 0, height: 60 }}>
                <Menu.Item position="left">
                    <p>This is Logo</p>
                </Menu.Item>
                <Menu.Item position="center">
                    <Input placeholder="Αναζήτηση..." />
                </Menu.Item>
                <Menu.Item position="right">
                    <Link to="/login">
                        <Button style={{ margin: 5 }} primary>
                            Σύνδεση
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button style={{ margin: 5 }}>Εγγραφή</Button>
                    </Link>
                    <Link to="/cart">
                        <Icon style={{ margin: 5, position: "relative" }} size="big" name="shopping cart" />
                        <span style={quantity}>0</span>
                    </Link>
                </Menu.Item>
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
