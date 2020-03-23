import React from "react";
import { Link } from "react-router-dom";

import { Menu, Dropdown } from "semantic-ui-react";

const isUserLinks = ({ username }) => {
    return (
        <Menu.Item>
            <Dropdown text={username}>
                <Dropdown.Menu>
                    <Link to="/profile">
                        <Dropdown.Item style={{ margin: 5, color: "black" }}>Προφίλ</Dropdown.Item>
                    </Link>
                    <Link to="/logout">
                        <Dropdown.Item style={{ margin: 5, color: "black" }}>Αποσύνδεση</Dropdown.Item>
                    </Link>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
};

export default isUserLinks;
