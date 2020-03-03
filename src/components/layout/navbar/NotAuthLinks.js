import React from "react";
import { Link } from "react-router-dom";

import { Button } from "semantic-ui-react";

const NotAuthLinks = () => {
    return (
        <>
            <Link to="/login">
                <Button style={{ margin: 5 }} primary>
                    Σύνδεση
                </Button>
            </Link>
            <Link to="/register">
                <Button style={{ margin: 5 }}>Εγγραφή</Button>
            </Link>
        </>
    );
};

export default NotAuthLinks;
