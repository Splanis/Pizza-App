import React from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "semantic-ui-react";

export const DropdownItems = ({ category }) => {
    return (
        <>
            <Dropdown item text={category.name} style={{ width: "200px" }}>
                <Dropdown.Menu>
                    {category.subcategories.map(subcategory => (
                        <Dropdown.Item key={subcategory.id}>
                            <Link to={`/category/${category.name}/${subcategory.name}`} style={{ color: "black" }}>
                                {subcategory.name}
                            </Link>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};
