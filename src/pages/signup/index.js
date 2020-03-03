import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { signUpAction } from "../../store/actions/authActions";

import { Button, Form, Segment } from "semantic-ui-react";

const SignUp = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        city: "",
        address: "",
        phone: "",
        postal_code: ""
    });

    const { email, password, firstName, lastName, city, address, postal_code, phone } = credentials;

    const dispatch = useDispatch();
    const signUp = credentials => dispatch(signUpAction(credentials));

    const handleSubmit = e => {
        e.preventDefault();
        signUp(credentials);
    };

    return (
        <Segment style={{ width: 500 }}>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Email</label>
                    <input type="text" value={email} onChange={e => setCredentials({ ...credentials, email: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Κωδικός</label>
                    <input type="password" value={password} onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Όνομα</label>
                    <input type="text" value={firstName} onChange={e => setCredentials({ ...credentials, firstName: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Επώνυμο</label>
                    <input type="text" value={lastName} onChange={e => setCredentials({ ...credentials, lastName: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Πόλη</label>
                    <input type="text" value={city} onChange={e => setCredentials({ ...credentials, city: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Διεύθυνση</label>
                    <input type="text" value={address} onChange={e => setCredentials({ ...credentials, address: e.target.value })} />
                </Form.Field>
                <Form.Field>
                    <label>Τ.Κ</label>
                    <input
                        type="text"
                        value={postal_code}
                        onChange={e => setCredentials({ ...credentials, postal_code: e.target.value })}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Τηλέφωνο</label>
                    <input type="text" value={phone} onChange={e => setCredentials({ ...credentials, phone: e.target.value })} />
                </Form.Field>
                <Button primary type="submit">
                    Εγγραφή
                </Button>
            </Form>
        </Segment>
    );
};

export default SignUp;
