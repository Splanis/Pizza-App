import React from "react";
import { Link } from "react-router-dom";

import { DropdownItems } from "./DropdownItems";
import { categories } from "../../store/categories";

import { Menu, Button, Dropdown, Input, Icon } from "semantic-ui-react";

export const Navbar = props => {
    return (
        <Menu inverted>
            <Menu.Item style={{ marginRight: "auto" }}>
                <Dropdown item text="Κατηγορίες">
                    <Dropdown.Menu>
                        {categories.map(category => (
                            <DropdownItems key={category.id} category={category} />
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

            <Menu.Item style={{ margin: "auto" }}>
                <Input placeholder="Αναζήτηση..." />
            </Menu.Item>

            <Menu.Item style={{ marginLeft: "auto" }}>
                <Link to="/login">
                    <Button style={{ margin: 5 }} primary>
                        Σύνδεση
                    </Button>
                </Link>
                <Link to="/register">
                    <Button style={{ margin: 5 }}>Εγγραφή</Button>
                </Link>
                <Link to="/cart">
                    <Icon style={{ margin: 5 }} size="big" name="shopping cart" />
                </Link>
            </Menu.Item>
        </Menu>
    );
};
