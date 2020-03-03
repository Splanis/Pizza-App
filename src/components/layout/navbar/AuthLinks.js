import React from "react";
import { Link } from "react-router-dom";

import { Icon, Menu, Dropdown } from "semantic-ui-react";

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

const isUserLinks = ({ userFirstName }) => {
    return (
        <>
            <Menu.Item>
                <Dropdown text={userFirstName}>
                    <Dropdown.Menu>
                        <Link to="/profile">
                            <Dropdown.Item style={{ margin: 5 }}>Προφίλ</Dropdown.Item>
                        </Link>
                        <Link to="/logout">
                            <Dropdown.Item style={{ margin: 5 }}>Αποσύνδεση</Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            <Link to="/cart">
                <Icon style={{ margin: 5, position: "relative" }} size="big" name="shopping cart" />
                <span style={quantity}>0</span>
            </Link>
        </>
    );
};

export default isUserLinks;
