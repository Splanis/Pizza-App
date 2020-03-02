import React from "react";

import { Breadcrumb } from "semantic-ui-react";

export const Category = ({
    match: {
        params: { category, subcategory }
    }
}) => {
    const sections = [
        { key: category, content: category, link: false },
        { key: subcategory, content: subcategory, active: true }
    ];

    return (
        <div>
            <Breadcrumb icon="right angle" sections={sections} />
        </div>
    );
};
