import React from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "semantic-ui-react";

export const DropdownItems = ({ category }) => {
    return (
        <>
            <Dropdown text={category.name} style={{ width: "200px" }}>
                <Dropdown.Menu>
                    {category.subcategories.map(subcategory => (
                        <Link to={`/category/${category.name}/${subcategory.name}`}>
                            <Dropdown.Item key={subcategory.id} style={{ color: "black" }}>
                                {subcategory.name}
                            </Dropdown.Item>
                        </Link>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};
