import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button, Form, Segment } from "semantic-ui-react";

export const Login = props => {
    const [details, setDetails] = useState({
        email: "",
        password: ""
    });

    const { email, password } = details;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Segment style={{ width: 300 }}>
            <Form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input type="text" value={email} onChange={e => setDetails({ ...details, email: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Κωδικός</label>
                    <input type="password" value={password} onChange={e => setDetails({ ...details, password: e.target.value })} />
                </Form.Field>
                <div style={{ margin: "auto" }}>
                    <Button primary type="submit">
                        Σύνδεση
                    </Button>
                    <Link to="/register">
                        <Button type="submit">Εγγραφή</Button>
                    </Link>
                </div>
            </Form>
        </Segment>
    );
};
