import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signInAction } from "../../store/actions/authActions";

import { Button, Form, Segment } from "semantic-ui-react";

const SignIn = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const { email, password } = credentials;

    const dispatch = useDispatch();
    const signIn = credentials => dispatch(signInAction(credentials));

    const handleSubmit = e => {
        e.preventDefault();
        signIn({
            email: email,
            password: password
        });
    };

    return (
        <Segment style={{ width: 300 }}>
            <Form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input type="text" value={email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Κωδικός</label>
                    <input type="password" value={password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
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

export default SignIn;
