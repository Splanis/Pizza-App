import React from "react";
import { Link } from "react-router-dom";

import { Dropdown } from "semantic-ui-react";

const DropdownItems = ({ name, subcategories }) => {
    console.log("run");
    return (
        <>
            <Dropdown text={name} style={{ width: "200px" }}>
                <Dropdown.Menu>
                    {subcategories.map(subcategory => (
                        <Link to={`/category/${name}/${subcategory.name}`}>
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

export default React.memo(DropdownItems);
